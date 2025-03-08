/********************************************************************************
 * @file topping-price-manager.js
 * Manages the prices of sandwich toppings for the Sandwich Maker application.
 *
 * - Allows adding, removing, and clearing toppings.
 * - Recalculates the total price based on the selected toppings.
 * - Provides a formatted total price as a currency string.
 *
 * Usage:
 *  1. Create an instance of ToppingPriceManager.
 *  2. Use addToppingPrice(topping) to add a topping.
 *  3. Use removeToppingPrice(topping) to remove a topping.
 *  4. Use clearAllToppings() to clear all toppings.
 *  5. Use getFormattedTotal() to get the formatted total price.
 *
 * Example:
 *  const toppingManager = new ToppingPriceManager();
 *  toppingManager.addToppingPrice('turkey');
 *  console.log(toppingManager.getFormattedTotal());
 ********************************************************************************/
// export class ToppingPriceManager {
class ToppingPriceManager {

    constructor() {

        /**
         * An object containing a dictionary where each key is a topping name and each value is the price of that topping
         * @type {Object.<string, number>}
         * 
         */
        this.toppingPrice = {
            turkey: 5.00, tofu: 5.00, lettuce: .75, tomato: 2.00
        };

        /**
         * The base price of the sandwich.
         * @type {number}
         * 
         */
        this.BASE_PRICE = 3.00;

        /**
         * The running total price of the sandwich.
         * @type {number}
         * 
         */
        this.runningTotal = this.BASE_PRICE

        /**
         * The maximum price the sandwich can reach.
         * @type {number}
         * 
         */
        this.cappedPrice = 10.00;

        /**
         * An array to store the topping prices added to the sandwich.
         * @type {Array.<string>}
         * 
         */
        this.toppingNames = [];
    }


    /**
     * Retrieves the list of available toppings.
     * @returns {Array.<string>} An array of topping names.
     */
    getToppings() {
        return Object.keys(this.toppingPrice);
    }

    /**
 * Retrieves the price of a given topping.
 * @param {string} topping - The name of the topping.
 * @returns {number} The price of the topping, or 0 if not found.
 */
    getPrice(topping) {
        return this.toppingPrice[topping] ?? 0; // Uses Nullish Coalescing to return 0 if undefined
    }


    /**
     * Adds the price of a topping to the base price, ensuring it does not exceed the capped price.
     * @param {string} topping - The name of the topping to add.
     */
    addToppingPrice(topping) {
        if (!this.getPrice) return; // If the topping does not exist in the array for the selected topping, exit the function.

        this.toppingNames.push(topping);
        this.recalculateTotal();
    }


    /**
     * Removes a topping price from the total.
     */
    removeToppingPrice(topping) {
        const indexOfToppings = this.toppingNames.lastIndexOf(topping);
        if (indexOfToppings === -1) return;

        this.toppingNames.splice(indexOfToppings, 1);
        this.recalculateTotal();
    }


    /**
     * Clears all toppings and resets the total price to the base price by emptying the price array and recalculating the total price of the .
     */
    clearAllToppingPrices() {
        this.toppingNames = [];
        this.recalculateTotal();
    }


    /**
     * Recalculates the total price of an item based on selected toppings.
     *
     * This method ensures `toppingNames` is initialized before computing the total cost.
     * It sums the base price (`BASE_PRICE`) with the prices of selected toppings from 
     * the `toppingPrice` object. If a topping is missing, it defaults to a price of 0.
     * The final total is capped at `cappedPrice` to prevent exceeding a predefined limit.
     *
     * Key Details:
     * - If `toppingNames` is undefined, it is initialized as an empty array.
     * - Uses `.reduce()` with `BASE_PRICE` as the initial accumulator value.
     * - Ensures the total does not exceed `cappedPrice` using `Math.min()`.
     *
     * Edge Cases Handled:
     * - Prevents errors when `toppingNames` is undefined or empty.
     * - Avoids issues if a topping is not found in `toppingPrice`.
     *
     * @returns {number} The newly calculated total price, also stored in `runningTotal`.
     * @throws {Error} Not thrown directly, but logs an error if `toppingNames` is undefined.
     */
    recalculateTotal() {

        if (!this.toppingNames) {
            console.error("toppingNames is undefined! Initializing to empty array.");
            this.toppingNames = [];
        }

        const total = this.toppingNames.reduce((sum, topping) => {
            return sum + this.getPrice(topping);

        }, this.BASE_PRICE);

        this.runningTotal = Math.min(total, this.cappedPrice);
    }


    /**
     * Returns the formatted total price of the sandwich as a currency string.
     * @returns {string} The formatted total price.
     */
    getFormattedTotal() {

        return this.runningTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }


}