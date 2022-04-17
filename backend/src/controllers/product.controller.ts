import { ProductInterface } from "../interfaces/product.interface";
import { products } from "../mockdata/product.data";
import { Request, Response } from 'express';

function getAllProduct(req: Request<{}, {}, ProductInterface>, res: Response<ProductInterface[]>) {
    // Get product list
    res.status(200).json(products);
};

function addProduct(req: Request<{}, {}, ProductInterface>, res: Response) {
    // Add product to the product array data
    products.push(req.body);
    res.status(200).json(products);
};

export { getAllProduct, addProduct};
