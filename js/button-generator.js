/********************************************************************************
 * @file button-generator.js
 * Dynamically creates ingredient buttons based on available toppings for the
 * Sandwich Maker application.
 *
 * - Generates buttons for each topping.
 * - Binds click event handlers to the buttons.
 *
 * Usage:
 *  1. Create an instance of ButtonGenerator.
 *  2. Pass the container ID, array of toppings, and a callback function to handle button clicks.
 *
 * Example:
 *  const buttonGenerator = new ButtonGenerator('topping-button-container', ['turkey', 'tofu', 'lettuce', 'tomato'], handleButtonClick);
 ********************************************************************************/

import { ToppingPriceManager } from "./topping-price-manager.js";

export class ButtonGenerator {
    /**
     * Creates a new ButtonGenerator instance.
     * @param {string} containerId - The ID of the container where buttons will be added.
     * @param {Array<string>} toppings - Array of available toppings.
     * @param {function} callback - Function to handle button click events.
     * @param {ToppingPriceManager} toppingPriceManager - Instance of ToppingPriceManager.
     * @throws {Error} If the container element with the specified ID is not found.
     */
    constructor(containerId, toppings, callback, toppingPriceManager) {
        this.container = document.getElementById(containerId);

        if (!this.container) {
            throw new Error(`Element with ID '${containerId}' not found.`);
        }

        this.toppings = toppings;
        this.callback = callback.bind(this); // Bind the callback function to the instance
        this.toppingPriceManager = toppingPriceManager;
        this.generateToppingButtons();
    }

    /**
     * Generates buttons dynamically based on available toppings.
     * Clears any existing buttons in the container before generating new ones.
     */
    generateToppingButtons() {
        this.container.innerHTML = ""; // Clear any existing buttons

        if (!this.container) {
            throw new Error(`Element with ID '${containerId}' not found.`);
        }
        const fragment = document.createDocumentFragment();

        // Loop through toppings and create buttons dynamically
        this.toppings.forEach(topping => {
            const button = document.createElement("button");
            button.id = `btn${topping}`;
            button.className = `btn btn-primary ingredient-btn`;
            button.textContent = `${topping.charAt(0).toUpperCase() + topping.slice(1)}`;
            button.dataset.topping = topping; // Store topping name in dataset
            button.dataset.bsToggle = "tooltip"; // Enable Bootstrap tooltip
            button.dataset.bsPlacement = "top"; // Tooltip appears above button
            button.title = `Add ${topping} to your sandwich for $${this.toppingPriceManager.getPrice(topping).toFixed(2)}`;
            button.addEventListener("click", (event) => this.callback(event)); // Attach event listener with provided callback function

            fragment.appendChild(button);
        });

        this.initializeTooltips();

        // Append button to the container
        this.container.appendChild(fragment);
    }

    /**
 * Ensures tooltips are correctly initialized for dynamically added buttons.
 */
    initializeTooltips() {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipTriggerEvent => {
            if (!bootstrap.Tooltip.getInstance(tooltipTriggerEvent)) {
                new bootstrap.Tooltip(tooltipTriggerEvent);
            }
        });
    }
}
