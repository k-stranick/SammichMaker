// import { ToppingPriceManager } from "./topping-price-manager.js";


// export class ButtonGenerator {

//     constructor(containerId, calback) {
//         this.container = document.getElementById(containerId);
//         if (!this.container) {
//             throw new Error(`Element with ID '${containerId}' not found.`);

//         }

//         this.toppingPriceManager = new ToppingPriceManager;
//         this.callback = callback;

//         this.generateButtons();
//     }

//     generateButtons() {
//         Object.keys(this.toppingPriceManager.toppingPrice).forEach(topping => {
//             const button = document.createElement("button");
//             button.id = `btn${topping}`;
//             button.className = `btn btn-primary ingredient-btn`;
//             button.textContent = `${topping.charAt(0).toUpperCase() + topping.slice(1)} ($${this.toppingPriceManager.toppingPrice[topping].toFixed(2)})`;

//             button.addEventListener("click", (event) => {
//                 this.callback(event);
//             });

//             this.container.appendChild(button);

//         });
//     }



// }


import { ToppingPriceManager } from "./topping-price-manager.js";

/**
 * ButtonGenerator dynamically creates ingredient buttons based on available toppings.
 */
export class ButtonGenerator {
    /**
     * @param {string} containerId - The ID of the container where buttons will be added.
     * @param {function} callback - Function to handle button click events.
     */
    constructor(containerId, callback) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Element with ID '${containerId}' not found.`);
        }

        this.toppingPriceManager = new ToppingPriceManager(); // Manage topping prices
        this.callback = callback; // Function to call when button is clicked

        this.generateButtons();
    }

    /**
     * Generates buttons dynamically based on available toppings.
     */
    generateButtons() {
        // Clear any existing buttons (useful if regenerating dynamically)
        this.container.innerHTML = "";

        // Loop through toppings and create buttons dynamically
        Object.keys(this.toppingPriceManager.toppingPrice).forEach(topping => {
            const button = document.createElement("button");
            button.id = `btn${topping}`;
            button.className = `btn btn-primary ingredient-btn`;
            button.textContent = `${topping.charAt(0).toUpperCase() + topping.slice(1)} ($${this.toppingPriceManager.toppingPrice[topping].toFixed(2)})`;

            // Attach event listener with provided callback function
            button.addEventListener("click", this.callback);

            // Append button to the container
            this.container.appendChild(button);
        });
    }
}
