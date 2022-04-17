import { BasketInterface } from '../interfaces/basket.interface';
import CheckoutServiceInterface from '../interfaces/checkoutService.interface';
import { PromotionalRulesServiceInterface } from '../interfaces/promotionalRulesService.interface';

export default class CheckoutService implements CheckoutServiceInterface {

    private basket: BasketInterface;
    private discountedPrice: number;
    constructor(basket: BasketInterface, promotionalRuleService: PromotionalRulesServiceInterface){
        this.basket = basket;
        this.discountedPrice = promotionalRuleService.discountedPrice(basket);
    }

    // get Total product price
    getTotal() {
       const totalPriceBeforeDiscount = this.basket.reduce((item, product) => item + product.price, 0);
       const totalPrice = (totalPriceBeforeDiscount-this.discountedPrice).toFixed(2);
       return `${totalPrice}€`;
    }
}