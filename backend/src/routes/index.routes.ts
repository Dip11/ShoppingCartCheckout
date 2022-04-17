import express from 'express';
import productRouter from './product.routes';
import checkoutRouter from '../routes/checkout.routes';


module.exports = function (app:express.Express) {    
  
    // productRouter includes all the routing related to Product
    app.use('/product', productRouter);

    // checkoutRouter includes  routing related to Checkout
    app.use('/checkout', checkoutRouter);

  };