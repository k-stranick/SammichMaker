import { SammichBuilder } from "./sammich-builder.js";
import { ToppingPriceManager } from "./topping-price-manager.js";

export class SandwichApp {
    constructor() {
        this.toppingPriceManager = new ToppingPriceManager();
        this.sammichBuilder = new SammichBuilder("middle");
        this.totalDisplay = document.getElementById("total");
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
        this.totalDisplay.textContent = `$${this.toppingPriceManager.getFormattedTotal()}`;


        this.sammichBuilder.addIngredient(topping)
    }
}





// function calculateTotal(event) {
//     // let topping = document.querySelectorAll('event.target.id');


//     if (basePrice > cappedPrice) {
//         basePrice = cappedPrice;
//     }

//     document.getElementById("total").textContent = `$${basePrice.toFixed(2)}`;

//     addIngredient(topping);
// }


// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", calculateTotal)
// });
