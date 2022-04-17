import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CommonState } from '../../app/contracts/common.interface';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { RootState } from '../../app/store';
import { checkout } from './checkoutApi';

interface CheckoutInterface {
  totalPrice: string;
};

// Declaring Initial State for the checkout
const initialState: CheckoutInterface & CommonState  = {
    loading : false,
    totalPrice : "",
}


// Creating Async Thunk for getting Product list
export const checkoutAsync = createAsyncThunk(
    'checkout',
    async (products : ProductInterface[]) => {
      // Getting all Product Codes from the Basket into a string Array to match it with the request body in the API
        const productCodes: string[] = [];
         products.forEach(product => {
             productCodes.push(product.productCode);
         });
        return (await checkout(productCodes));
    }
  );
  

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
        builder
            .addCase(checkoutAsync.pending, (state)=>{
                state.loading = true;
            } )
            .addCase(checkoutAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.totalPrice = action.payload;
            })
  },
});

export const totalPrice = (state:RootState) => state.checkout.totalPrice;

export const checkoutTotalPrice = (state: RootState) => state.checkout.totalPrice;

export default checkoutSlice.reducer;
