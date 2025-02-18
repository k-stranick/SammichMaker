import { toppingPrice, cappedPrice, basePrice } from "./toppingPrice";
import { addIngredient } from "./visualAid";

function calculateTotal(event) {
    // let topping = document.querySelectorAll('event.target.id');
    let topping = event.target.id.replace("btn", "").toLowerCase();
    
    if (topping in toppingPrice) {
        basePrice += toppingPrice[topping];
    }

    if (basePrice > cappedPrice) {
        basePrice = cappedPrice;
    }

    document.getElementById("total").textContent = `$${basePrice.toFixed(2)}`;

    addIngredient(topping);
}

    
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click",calculateTotal)
});
