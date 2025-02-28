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

        this.buttonGenerator = new ButtonGenerator("topping-button-container", this.handleToppingButtonClick.bind(this));
        // this.initialize();

    }

    /**
         * Sets up event listeners for ingredient actions.
         */
    // initialize() {
    //     document.getElementById("removeLast").addEventListener("click", () => this.handleRemoveTopping());
    //     document.getElementById("clearAll").addEventListener("click", () => this.handleClearToppings());
    // }


    /**
     * Handles the click event for topping buttons.
     * Adds the topping to the sandwich, updates the total price, and adds the ingredient layer.
     * @param {Event} event - The click event object.
     */
    handleToppingButtonClick(event) {
        /**
         * Extract the topping name from the button ID.
         * The button ID is expected to be in the format "btnToppingName".
         * This line removes the "btn" prefix and converts the remaining string to lowercase.
         * For example, "btnTomato" becomes "tomato".
         */
        const topping = event.target.id.replace("btn", "").toLowerCase();

        /**
         * Add the topping price to the total price using the ToppingPriceManager.
         * @param {string} topping - The name of the topping to add.
         */
        this.toppingPriceManager.addToppingPrice(topping);

        /**
         * Update the displayed total price.
         * The total price is formatted as a currency string.
         */
        // this.totalDisplay.textContent = `${this.toppingPriceManager.getFormattedTotal()}`;

        /**
         * Add the topping as a new ingredient layer in the sandwich.
         * @param {string} topping - The name of the topping to add.
         */
        this.sammichBuilder.addIngredient(topping)

        this.updatePriceDisplay();

    }

    /**
 * Removes the last added ingredient and updates the price.
 */
    handleRemoveTopping(topping) {
        const removedTopping = this.sammichBuilder.removeIngredient(topping);

        if (removedTopping) {

            this.toppingPriceManager.removeToppingPrice(removedTopping);
            this.updatePriceDisplay();
        }
    }

    /**
     * Clears all ingredients and resets the price.
     */
    handleClearToppings() {
        this.sammichBuilder.clearIngredients();

        this.toppingPriceManager.resetTotalToBase();
        this.updatePriceDisplay();

    }

    /**TODO MAKE THIS EAT TOPPING */
    /**
 * Updates the displayed price.
 */
    updatePriceDisplay() {
        this.totalDisplay.textContent = this.toppingPriceManager.getFormattedTotal();
    }
}

