import { SammichBuilder } from "./sammich-builder.js";
import { ToppingPriceManager } from "./topping-price-manager.js";
// import { ButtonGenerator } from "./button-generator.js";

export class SandwichApp {
    constructor() {
        this.toppingPriceManager = new ToppingPriceManager();
        this.sammichBuilder = new SammichBuilder("middle");
        this.totalDisplay = document.getElementById("total");

        // new ButtonGenerator("buttonsContainer", this.handleToppingClick.bind(this));

        this.initialize();
    }

    initialize() {
        document.querySelectorAll(".ingredient-btn").forEach(button => {
            button.addEventListener("click", (event) => this.handleToppingClick(event));
        })
    }

    handleToppingClick(event) {
        let topping = event.target.id.replace("btn", "").toLowerCase();

        this.toppingPriceManager.addTopping(topping);
        this.totalDisplay.textContent = `${this.toppingPriceManager.getFormattedTotal()}`;


        this.sammichBuilder.addIngredient(topping)
    }
}

