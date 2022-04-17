import express from 'express';
var router = express.Router();
// var CheckoutController = require('../controllers/checkout.controller');
import { checkout } from '../controllers/checkout.controller';

router.post('/', checkout);

export default router;