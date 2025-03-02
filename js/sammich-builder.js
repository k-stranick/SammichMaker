/**
 * SammichBuilder is responsible for managing the sandwich HTML layers within a specified container.
 * It allows adding ingredients as layers to the sandwich.
 */


export class SammichBuilder {

    ingredientsImages = {
        turkey: "/assets/turke2y.jpg",
        tofu: "/assets/tofu.jpg",
        lettuce: "/assets/lettuce.jpg",
        tomato: "/assets/tomato.jpg",
    };

    /**
     * Creates an instance of SammichBuilder.
     * 
     * @param {string} containerId 
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    /**
     * Adds an ingredient newlyCreatedDiv to the sandwich html.
     * @param {string} passedTopping - The class name representing the passedTopping to be added as a newlyCreatedDiv.
     */
    addIngredient(passedTopping) {
        const newlyCreatedDiv = document.createElement("div"); // Create a new div element

        newlyCreatedDiv.classList.add("ingredient", passedTopping); // adds the class name ingredient and the passedTopping to the newlyCreatedDiv
        this.addIngredientImageFor(passedTopping, newlyCreatedDiv); // Add the image of the ingredient to the sandwich
        this.container.prepend(newlyCreatedDiv); // Add the newlyCreatedDiv to the top of the container
    }

    /**
     * Removes the top (last added) ingredient from the sandwich.
     */
    removeIngredient() {
        if (this.container.firstChild) {
            const removedIngredient = this.container.firstChild;
            const ingredientName = removedIngredient.classList[1]; // Get the topping name

            this.container.removeChild(removedIngredient);
            console.log(ingredientName, " removed");
            return ingredientName; // Return the removed topping for price update
        }
        console.log("removeIngredient firstChild is null all ingredients cleared");
        return null;

    }

    /**
     * Removes all ingredients from the sandwich.
     */
    clearIngredients() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    /**
    * Adds an image of the ingredient to the sandwich.
    * @param {string} topping - The name of the topping to add.
    */
    addIngredientImageFor(topping, ingredientDiv) {

        if (!this.ingredientsImages[topping]) {
            console.log("no img for: " + topping);
            return; // If the topping does not have an image, exit the function
        }

        const image = document.createElement("img"); // Create a new image element

        image.src = this.ingredientsImages[topping]; // Set the image source to the URL of the topping image
        image.alt = topping; // Set the alt attribute to the topping name
        image.classList.add("ingredient-image"); // Add the class name ingredient-image to the image
        ingredientDiv.appendChild(image); // Add the image to the container

    }
}