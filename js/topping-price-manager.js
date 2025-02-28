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
        this.BASE_PRICE = 3.00;
        this.currentPrice = this.BASE_PRICE

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
    addToppingPrice(topping) {
        console.log("addToppingPrice called for " + topping);

        if (!this.toppingPrice[topping]) return; // If the topping does not exist in the array for the selected topping, exit the function.

        this.BASE_PRICE = Math.min(this.BASE_PRICE + this.toppingPrice[topping], this.cappedPrice);
    }


    /**
    * Removes a topping price from the total.
    */
    removeToppingPrice(topping) {
        console.log("removeToppingPrice called for " + topping);

        if (!this.toppingPrice[topping]) return;
        this.currentPrice = Math.max((this.currentPrice - this.toppingPrice[topping]), this.BASE_PRICE);
        return this.currentPrice;
    }


    /**
     * Resets the total price to the base price.
     */
    resetTotalToBase() {
        this.currentPrice = this.BASE_PRICE;
    }

    /**
     * Returns the formatted total price of the sandwich as a currency string.
     * @returns {string} The formatted total price.
     */
    getFormattedTotal() {

        return this.BASE_PRICE.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}