import { ToppingPriceManager } from "./topping-price-manager";

export class ButtonGenerator {

    constructor(containerId, calback) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(`Element with ID '${containerId}' not found.`);

        }

        this.toppingPriceManager = new ToppingPriceManager;
        this.callback = this.callback;

        this.generateButtons();
    }

    generateButtons() {
        Object.keys(this.toppingPriceManager.toppingPrice.forEach(topping => {
            const button = document.createElement("button");
            button.id = `btn${topping}`;
            button.className = `ntm btn-primary ingredient-btn`;
            button.textContent = `${topping.charAt(0).toUpperCase() + topping.slice(1)} ($${this.toppingPriceManager.toppingPrice[topping].toFixed(2)})`;

            button.addEventListener("click", (event) => {
                this.callback(event);
            });

            this.container.appendChild(button);

        }));
    }



}