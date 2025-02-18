const cappedPrice = 10.00;
const toppingPrice = {turkey: 5.00, tofu: 5.00, lettuce: .75, tomato: 2.00};

let basePrice = 3.00; // basePrice for the sammich

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
}

    
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click",calculateTotal)
});
