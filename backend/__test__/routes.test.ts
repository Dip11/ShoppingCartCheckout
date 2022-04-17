import request from 'supertest';
import express from 'express';
const routes = require("../src/routes/index.routes");

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Routes
routes(app);

describe('Get total price from Checkout Route', function () {
  const test1ProductCodesInBasket = ["001", "002","003"];
  const tes1ExpectedResult = "29.65€";
  const test2ProductCodesInBasket = ["002", "001","002"];
  const test2ExpectedResult = "9.93€";
  const test3ProductCodesInBasket = ["002", "001","002", "003"];
  const test3ExpectedResult = "31.04€";
    
    

  // Test 1
  test('Test 1: responds to /checkout', async () => {
    const res = await request(app).post('/checkout')
                                  .set('Content-Type', 'application/json')
                                  .send(test1ProductCodesInBasket)    
                                  
    expect(res.body).toEqual(tes1ExpectedResult);
  });


  // Test 2
  test('Test 2: responds to /checkout', async () => {
    const res = await request(app).post('/checkout')
                                  .set('Content-Type', 'application/json')
                                  .send(test2ProductCodesInBasket)    
                                  
    expect(res.body).toEqual(test2ExpectedResult);
  });


  // Test 3
  test('Test 3: responds to /checkout', async () => {
    const res = await request(app).post('/checkout')
                                  .set('Content-Type', 'application/json')
                                  .send(test3ProductCodesInBasket)    
                                  
    expect(res.body).toEqual(test3ExpectedResult);
  });
});
