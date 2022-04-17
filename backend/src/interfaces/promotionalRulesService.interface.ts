import { RulesInterface } from "../services/promotionalRules.service";
import { BasketInterface } from "./basket.interface";

export interface PromotionalRulesServiceInterface{
    discountedPrice(basket: BasketInterface): number;
    discountWhenSpendOverASpecificAmount(rule: RulesInterface, basket: BasketInterface): number;
    discountWhenBuyTwoOrMorePizzas(rule: RulesInterface, basket: BasketInterface): number;
}