const cappedPrice = 10.00;
const toppingPrice = {turkey: 5.00, tofu: 5.00, lettuce: .75, tomato: 2.00};

let basePrice = 3.00; // basePrice for the sammich

function calculateTotal(event) {
    // let topping = document.querySelectorAll('event.target.id');
    let topping = event.target.id.replace("btn", "").toLowerCase();
    
    if (topping in toppingPrice) {
        total += toppingPrice[topping];
    }

    document.getElementById("price").textContent = total.toFixed(2);
}
    
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click",calculateTotal)
});
