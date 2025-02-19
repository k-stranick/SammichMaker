export class ToppingPriceManager {

    constructor() {
        this.toppingPrice = {
            turkey: 5.00, tofu: 5.00, lettuce: .75, tomato: 2.00
        };
        this.basePrice = 3.00;
        this.cappedPrice = 10.00;
    }

    addTopping(topping) {
        if (!this.toppingPrice[topping]) return;

        this.basePrice = Math.min(this.basePrice + this.toppingPrice[topping], this.cappedPrice);

    }

    getFormattedTotal() {
        return `$${this.basePrice.toFixed(2)}`;
    }

}