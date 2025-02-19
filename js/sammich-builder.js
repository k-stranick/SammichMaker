export class SammichBuilder {
    constructor(containerId){
        this.container = document.getElementById(containerId); 
    }

    addIngredient(topping) {
        const layer = document.createElement("div");
        layer.classList.add("ingredient", topping);
        this.container.appendChild(layer);
    }

}