/********************************************************************************
 * @file sammich-builder.js
 * Manages the sandwich HTML layers within a specified container for the Sandwich Maker application.
 *
 * - Allows adding ingredients as layers to the sandwich.
 * - Supports removing the top ingredient and clearing all ingredients.
 * - Integrates with ingredient images for visual representation.
 *
 * Usage:
 *  1. Create an instance of SammichBuilder with the ID of the container element.
 *  2. Use addIngredient(passedTopping) to add an ingredient.
 *  3. Use removeIngredient() to remove the top ingredient.
 *  4. Use clearIngredients() to remove all ingredients.
 *
 * Example:
 *  const builder = new SammichBuilder('sandwich-container');
 *  builder.addIngredient('turkey');
 *  builder.removeIngredient();
 *  builder.clearIngredients();
 ********************************************************************************/

/**
 * SammichBuilder is responsible for managing the sandwich HTML layers within a specified container.
 * It allows adding ingredients as layers to the sandwich.
 */
export class SammichBuilder {

    /**
     * Creates an instance of SammichBuilder.
     * 
     * @param {string} containerId - The ID of the container where the sandwich layers will be added.
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.ingredientsImages = {
            turkey: "/assets/turkey.jpg",
            tofu: "/assets/tofu.jpg",
            lettuce: "/assets/lettuce.jpg",
            tomato: "/assets/tomato.jpg",
        };
    }

    /**
     * Adds an ingredient to the sandwich HTML.
     * 
     * @param {string} passedTopping - The class name representing the topping to be added.
     */
    addIngredient(passedTopping) {
        const ingredientHtmlElement = document.createElement("div"); // Create a new div element

        ingredientHtmlElement.classList.add("ingredient", passedTopping); // Add the class name 'ingredient' and the passedTopping to the ingredientHtmlElement
        this.addIngredientImageFor(passedTopping, ingredientHtmlElement); // Add the image of the ingredient to the sandwich
        // Attach a click event to remove this specific ingredient when clicked
        ingredientHtmlElement.addEventListener("click", () => {
            this.removeClickedIngredient(ingredientHtmlElement, passedTopping);
        });


        this.container.append(ingredientHtmlElement); // Add the ingredientHtmlElement to the top of the container
    }

    /**
     * Removes the bottom (last added) ingredient from the sandwich when using remove button.
     * 
     * @returns {string|null} The class name of the removed topping, or null if no ingredient was removed.
     */
    removeIngredient() {
        if (!this.container.lastChild) return null;

        const removedIngredient = this.container.lastChild;
        this.container.removeChild(removedIngredient);

        return removedIngredient.classList[1] || null; // Return the removed topping for price update
    }

    /**
     * Removes all ingredients from the sandwich.
     */
    clearIngredients() {
        this.container.innerHTML = "";
    }


    /**
 * Removes the specific clicked ingredient from the sandwich.
 * @param {HTMLElement} ingredientElement - The element to remove.
 * @param {string} ingredient - The topping name.
 */
    removeClickedIngredient(ingredientElement, ingredient) {
        this.container.removeChild(ingredientElement); // Remove the clicked element

        // Inform SandwichApp to update the price
        document.dispatchEvent(new CustomEvent("ingredientRemoved", { detail: ingredient }));
    }

    /**
     * Adds an image of the ingredient to the sandwich.
     * 
     * @param {string} topping - The name of the topping to add.
     * @param {HTMLElement} ingredientDiv - The div element to which the image will be added.
     */
    addIngredientImageFor(topping, ingredientDiv) {
        if (!this.ingredientsImages[topping]) {
            return; // If the topping does not have an image, exit the function
        }

        const image = document.createElement("img"); // Create a new image element
        image.src = this.ingredientsImages[topping]; // Set the image source to the URL of the topping image
        image.alt = topping; // Set the alt attribute to the topping name
        image.classList.add("ingredient-image"); // Add the class name 'ingredient-image' to the image

        ingredientDiv.appendChild(image); // Add the image to the ingredientDiv
    }

}