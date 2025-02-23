/**
 * SammichBuilder is responsible for managing the sandwich layers within a specified container.
 * It allows adding ingredients as layers to the sandwich.
 */

export class SammichBuilder {
    /**
     * Creates an instance of SammichBuilder.
     * @param {string} containerId - The ID of the container element where the sandwich layers will be added.
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    /**
     * Adds an ingredient newlyCreatedDiv to the sandwich.
     * @param {string} passedTopping - The class name representing the passedTopping to be added as a newlyCreatedDiv.
     */
    addIngredient(passedTopping) {
        const newlyCreatedDiv = document.createElement("div"); // Create a new div element
        newlyCreatedDiv.classList.add("ingredient", passedTopping); // adds the class name ingredient and the passedTopping to the newlyCreatedDiv
        newlyCreatedDiv.style.width = "910px"; // Set the width of the newlyCreatedDiv so it will be visible when the sandwich is built

        // console.log(newlyCreatedDiv.classList);

        this.container.appendChild(newlyCreatedDiv); // Add the newlyCreatedDiv to the container
    }

}