import { Request, Response } from 'express';
import { BasketInterface } from '../interfaces/basket.interface';
import { PromotionalRulesServiceInterface } from '../interfaces/promotionalRulesService.interface';
import { products } from '../mockdata/product.data';
import CheckoutService from '../services/checkout.service';
import PromotionalRulesService from '../services/promotionalRules.service';


function checkout(req: Request<{}, {}, string[]>, res: Response) {
    // Get Product Codes from Request Body
    const productCodes = req.body;

    // Declare an Empty Basket
    const basket: BasketInterface = [];

    // Find the Product from the prodcucts data and create the basket with all member data
    productCodes.forEach((code => {
        let product = products.find((product) => product.productCode == code);
        if (product) {
            basket.push(product);            
        }
    }));

    // Create a new Promotional Service Instance to apply the Promotions 
    const promotionalRulesService: PromotionalRulesServiceInterface = new PromotionalRulesService();

    // Creat the Checkout Instance
    const checkOutService = new CheckoutService(basket, promotionalRulesService);

    // Get the total price from Checkout
    const totalPrice = checkOutService.getTotal();
    res.status(200).json(totalPrice);
};

export {checkout}
