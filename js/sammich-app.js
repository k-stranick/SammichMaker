/********************************************************************************
 * @file sammich-app.js
 * Main application logic for the Sandwich Maker application.
 *
 * - Manages user interactions, updates the total price, and handles sandwich layers.
 * - Integrates with ToppingPriceManager, SammichBuilder, and ButtonGenerator.
 *
 * Usage:
 *  1. Create an instance of SandwichApp.
 *  2. The instance will handle button clicks, topping additions, and price updates.
 *
 * Example:
 *  const app = new SandwichApp();
 ********************************************************************************/

import { SammichBuilder } from "./sammich-builder.js";
import { ToppingPriceManager } from "./topping-price-manager.js";
import { ButtonGenerator } from "./button-generator.js";

/**
 * SandwichApp is responsible for managing the sandwich-making application.
 * It handles user interactions, updates the total price, and manages the sandwich layers.
 */
export class SandwichApp {

    /**
     * Creates an instance of SandwichApp.
     * Initializes the ToppingPriceManager, SammichBuilder, and ButtonGenerator.
     * Binds event handlers and updates the initial price display.
     */
    constructor() {

        /**
         * Instance of ToppingPriceManager to manage topping prices.
         * @type {ToppingPriceManager}
         */
        this.toppingPriceManager = new ToppingPriceManager();

        /**
         * Instance of SammichBuilder to manage sandwich layers.
         * @type {SammichBuilder}
         */
        this.sammichBuilder = new SammichBuilder("middle");

        /**
         * Element to display the total price.
         * @type {HTMLElement} - The element where the total price is displayed.
         */
        this.totalDisplay = document.getElementById("running-total");

        // Bind methods to ensure 'this' refers to the instance
        this.handleIngredientButtonClick = this.handleIngredientButtonClick.bind(this);
        this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
        this.handleClearIngredients = this.handleClearIngredients.bind(this);


        /**
         * Instance of ButtonGenerator to create topping buttons.
         * @type {ButtonGenerator}
        */
        this.buttonGenerator = new ButtonGenerator("topping-button-container", this.toppingPriceManager.getToppings(), this.handleIngredientButtonClick);
        this.initializeClearButtons();
        this.updatePriceDisplay();
    }

    /**
     * Initializes event listeners for the control buttons (remove and clear).
     */
    initializeClearButtons() {
        document.getElementById("removeLast").addEventListener("click", this.handleRemoveIngredient);
        document.getElementById("clearAll").addEventListener("click", this.handleClearIngredients);
    }


    /**
     * Handles the click event for topping buttons.
     * Adds the topping to the sandwich, updates the total price, and adds the ingredient layer.
     * @param {Event} event - The click event object.
     */
    handleIngredientButtonClick(event) {
        /**
         * Extracts the topping name from the dataset
         * @type {string} - The topping name from the dataset.
         */
        const ingredient = event.target.dataset.topping; // Directly use dataset

        if (!ingredient) return console.error("Invalid topping clicked.");

        this.toppingPriceManager.addToppingPrice(ingredient);
        this.sammichBuilder.addIngredient(ingredient);
        this.updatePriceDisplay();
    }


    /**
     * Removes the last added ingredient and updates the price.
     * @param {string} ingredient - The name of the topping to remove.
     */
    handleRemoveIngredient(ingredient) {
        const removedIngredient = this.sammichBuilder.removeIngredient(ingredient);
        if (!removedIngredient) return;

        this.toppingPriceManager.removeToppingPrice(removedIngredient);
        this.updatePriceDisplay();
    }

    /**
     * Clears all ingredients and resets the price.
     */
    handleClearIngredients() {
        this.sammichBuilder.clearIngredients();
        this.toppingPriceManager.clearAllToppingPrices();
        this.updatePriceDisplay();

    }

    /**
    * Updates the displayed price.
    * @type {HTMLElement} - The element where the total price is displayed.
    */
    updatePriceDisplay() {
        this.totalDisplay.textContent = this.toppingPriceManager.getFormattedTotal();
    }
}

