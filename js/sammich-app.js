import { SammichBuilder } from "./sammich-builder.js";
import { ToppingPriceManager } from "./topping-price-manager.js";
import { ButtonGenerator } from "./button-generator.js";

/**
 * SandwichApp is responsible for managing the sandwich-making application.
 * It handles user interactions, updates the total price, and manages the sandwich layers.
 */
export class SandwichApp {

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


        this.handleToppingButtonClick = this.handleToppingButtonClick.bind(this);
        this.handleRemoveTopping = this.handleRemoveTopping.bind(this);
        this.handleClearToppings = this.handleClearToppings.bind(this);


        /**
         * Instance of ButtonGenerator to create topping buttons.
         * @type {ButtonGenerator}
        */
        this.buttonGenerator = new ButtonGenerator("topping-button-container", this.handleToppingButtonClick);

        this.bindButtonEventListeners();
        this.updatePriceDisplay();
    }


    bindButtonEventListeners() {
        // Bind remove ingredient button
        document.getElementById("removeLast").addEventListener("click", () => { this.handleRemoveTopping(); });

        // Bind clear all button
        document.getElementById("clearAll").addEventListener("click", () => { this.handleClearToppings(); });
    }

    /**
     * Handles the click event for topping buttons.
     * Adds the topping to the sandwich, updates the total price, and adds the ingredient layer.
     * @param {Event} event - The click event object.
     */
    handleToppingButtonClick(event) {
        /**
         * Extract the topping name from the button ID.
         * The button ID is expected to be in the format "btnToppingName".
         */
        const topping = event.target.id.replace("btn", "").toLowerCase();

        this.toppingPriceManager.addToppingPrice(topping);
        this.sammichBuilder.addIngredient(topping)
        this.updatePriceDisplay();
    }


    /**
    * Removes the last added ingredient and updates the price.
    */
    handleRemoveTopping(topping) {
        const removedTopping = this.sammichBuilder.removeIngredient(topping);

        if (!removedTopping) return; // nothing to remove

        this.toppingPriceManager.removeToppingPrice(removedTopping);
        this.updatePriceDisplay();
    }

    /**
     * Clears all ingredients and resets the price.
     */
    handleClearToppings() {
        this.sammichBuilder.clearIngredients();
        this.toppingPriceManager.clearAllToppings();
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

