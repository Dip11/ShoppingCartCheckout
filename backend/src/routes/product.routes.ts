import express from 'express';
var router = express.Router();
import { getAllProduct, addProduct } from '../controllers/product.controller'

router.get('/get-all', getAllProduct);

router.post('/', addProduct);

export default router;