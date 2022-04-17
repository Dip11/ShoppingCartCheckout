import { BasketInterface } from '../interfaces/basket.interface';
import { PromotionalRulesServiceInterface } from '../interfaces/promotionalRulesService.interface';

export interface RulesInterface{
    Description : string,
    amount?: number,
    discountPercentage?: number,
    productCode?: string,
    newPrice?: number
}

interface PromotionalRulesInterface {
    [key: string]: RulesInterface
 }

const promotionalRules: PromotionalRulesInterface = {
    'SPEND_OVER_A_SPECIFIC_AMOUNT':{
        Description : 'If Spend Over a specific amount',
        amount: 30,
        discountPercentage: 10
    },
    'BUY_TWO_OR_MORE_PIZZAS':{
        Description : 'Buy two or more pizzas',
        productCode: '002',
        newPrice: 3.99
    }
}

export default class PromotionalRulesService implements PromotionalRulesServiceInterface {
    // Get the total Discounted Price
    discountedPrice(basket: BasketInterface){
        let discountedPrice = 0;
        discountedPrice += this.discountWhenSpendOverASpecificAmount(promotionalRules['SPEND_OVER_A_SPECIFIC_AMOUNT'], basket);
        discountedPrice += this.discountWhenBuyTwoOrMorePizzas(promotionalRules['BUY_TWO_OR_MORE_PIZZAS'], basket);
        return discountedPrice;
    }

    // Calculate Discount Price on  spending over a specific amount
    discountWhenSpendOverASpecificAmount(rule: RulesInterface, basket: BasketInterface) {
       let totalBasketPrice = basket.reduce((item, product) => item + product.price, 0);
       if(rule?.amount !== undefined && totalBasketPrice > rule.amount && rule.discountPercentage !== undefined){
           return totalBasketPrice* rule?.discountPercentage/100;
       } else {
           return 0;
       }
    }

    // Calculate Discount on buying two or more pizzas
    discountWhenBuyTwoOrMorePizzas(rule: RulesInterface, basket: BasketInterface) {
        let countProductCode = 0;
        let discountedPrice = 0;
        basket.forEach((product) => {
            if (product.productCode == rule?.productCode) {
                countProductCode += 1;
            }
        })
        if (countProductCode >= 2) {
            basket.forEach((product) => {
                if(product.productCode == rule?.productCode && rule.newPrice !== undefined){
                    discountedPrice += product.price  - rule?.newPrice;
                    return product;
                } else{
                    return product;
                }
            })
           
        }
        return discountedPrice;
     }
}