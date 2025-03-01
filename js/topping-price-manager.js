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

        /**
         * The running total price of the sandwich.
         * @type {number}
         */
        this.runningTotal = this.BASE_PRICE

        /**
         * The maximum price the sandwich can reach.
         * @type {number}
         */
        this.cappedPrice = 10.00;

        /**
         * An array to store the topping prices added to the sandwich.
         * @type {Array.<string>}
         */
        this.priceArray = [];

        // this.addToppingPrice = this.addToppingPrice.bind(this);
        // this.removeToppingPrice = this.removeToppingPrice.bind(this);
        // this.resetTotalToBase = this.resetTotalToBase.bind(this);
        // this.getFormattedTotal = this.getFormattedTotal.bind(this);

    }

    /**
     * Adds the price of a topping to the base price, ensuring it does not exceed the capped price.
     * @param {string} topping - The name of the topping to add.
     */
    addToppingPrice(topping) {
        console.log("addToppingPrice called for " + topping);

        if (!this.toppingPrice[topping]) return; // If the topping does not exist in the array for the selected topping, exit the function.

        this.priceArray.push(topping);
        this.recalculateTotal();

    }


    /**
    * Removes a topping price from the total.
    */
    removeToppingPrice(topping) {
        console.log("removeToppingPrice called for " + topping);

        const indexOfToppings = this.priceArray.indexOf(topping);
        if (indexOfToppings === -1) return;

        if (indexOfToppings !== -1) {
            this.priceArray.splice(indexOfToppings, 1);
            this.recalculateTotal();
        }
    }

    clearAllToppings() {
        this.priceArray = [];
        this.recalculateTotal();
    }



    recalculateTotal() {
        let total = this.BASE_PRICE;
        if (this.priceArray.length !== 0) {
            for (const topping of this.priceArray) {
                total += this.toppingPrice[topping];

                this.runningTotal = Math.min(total, this.cappedPrice);
            }
        } else {
            this.runningTotal = this.BASE_PRICE;
        }

    }

    // /**
    //  * Resets the total price to the base price.
    //  */
    // resetTotalToBase() {
    //     this.priceArray = this.BASE_PRICE;
    // }

    /**
     * Returns the formatted total price of the sandwich as a currency string.
     * @returns {string} The formatted total price.
     */
    getFormattedTotal() {

        return this.runningTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

}