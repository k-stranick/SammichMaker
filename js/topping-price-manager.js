/**
 * ToppingPriceManager is responsible for managing the prices of sandwich toppings.
 * It allows adding toppings to the base price and provides a formatted total price.
 */
export class ToppingPriceManager {

    /**
     * Creates an instance of ToppingPriceManager.
     * Initializes the topping prices, base price, and capped price.
     */
    constructor() {

        /**
         * An object containing the prices of available toppings.
         * @type {Object.<string, number>}
         */
        this.toppingPrice = {
            turkey: 5.00, tofu: 5.00, lettuce: .75, tomato: 2.00
        };

        /**
         * The base price of the sandwich.
         * @type {number}
         */
        this.basePrice = 3.00;

        /**
         * The maximum price the sandwich can reach.
         * @type {number}
         */
        this.cappedPrice = 10.00;
    }

    /**
     * Adds the price of a topping to the base price, ensuring it does not exceed the capped price.
     * @param {string} topping - The name of the topping to add.
     */
    addTopping(topping) {

        if (!this.toppingPrice[topping]) return; // If the topping does not exist in the array for the selected topping, exit the function.

        this.basePrice = Math.min(this.basePrice + this.toppingPrice[topping], this.cappedPrice);
    }

    /**
     * Returns the formatted total price of the sandwich as a currency string.
     * @returns {string} The formatted total price.
     */
    getFormattedTotal() {

        return this.basePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}