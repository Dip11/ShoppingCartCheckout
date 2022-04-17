import express from 'express';
var router = express.Router();
var ProductController = require('../controllers/product.controller');


router.get('/get-all', ProductController.getAllProduct);

router.post('/', ProductController.addProduct);

export default router;