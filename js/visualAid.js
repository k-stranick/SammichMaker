export function addIngredient(topping) {
    const layer = document.createElement("div");
    layer.classList.add("ingredient", topping);
    document.querySelector("middle").appendChild(layer);
}