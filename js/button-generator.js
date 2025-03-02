import { ToppingPriceManager } from "./topping-price-manager.js";

/**
 * ButtonGenerator dynamically creates ingredient buttons based on available toppings.
 */
export class ButtonGenerator {
    /**
     * @param {string} containerId - The ID of the container where buttons will be added.
     * @param {Array<string>} toppings - Array of available toppings.
     * @param {function} callback - Function to handle button click events.
     */
    constructor(containerId, toppings, callback) {
        this.container = document.getElementById(containerId);

        if (!this.container) {
            throw new Error(`Element with ID '${containerId}' not found.`);
        }

        this.toppings = toppings;
        this.callback = callback.bind(this); // Bind the callback function to the instance
        this.generateToppingButtons();
    }

    /**
     * Generates buttons dynamically based on available toppings.
     */
    generateToppingButtons() {
        this.container.innerHTML = ""; // Clear any existing buttons
        const fragment = document.createDocumentFragment();

        // Loop through toppings and create buttons dynamically
        this.toppings.forEach(topping => {
            const button = document.createElement("button");
            button.id = `btn${topping}`;
            button.className = `btn btn-primary ingredient-btn`;
            button.textContent = `${topping.charAt(0).toUpperCase() + topping.slice(1)}`;

            button.dataset.topping = topping; // ✅ Store topping name in dataset

            // Attach event listener with provided callback function
            button.addEventListener("click", (event) => this.callback(event));
            fragment.appendChild(button);

        });

        // Append button to the container
        this.container.appendChild(fragment);
    }
}
