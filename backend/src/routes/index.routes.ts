import express from 'express';
import productRouter from './product.routes';


module.exports = function (app:express.Express) {    
  
    // productRouter includes all the routing related to Product
    app.use('/product', productRouter);
  };