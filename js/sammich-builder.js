export class SammichBuilder {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    addIngredient(topping) {
        const layer = document.createElement("div");
        layer.classList.add("ingredient", topping);
        layer.style.width = "910px";

        // console.log(layer.classList);

        this.container.appendChild(layer);
    }

}