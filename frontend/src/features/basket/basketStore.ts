import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from '../../app/contracts/common.interface';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { RootState } from '../../app/store';

export interface BasketInterface {
  basket: ProductInterface[];
};

// Declaring Initial State for the Basket
const initialState: BasketInterface & CommonState  = {
    loading : false,
    basket : [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductInterface>) => {  
      state.basket = [...state.basket, action.payload];      
    },
    emptyTheBasket: (state) => {  
      state.basket = [];   
    },
  },
  extraReducers: (builder) => {

  },
});

export const basket = (state: RootState) => state.basket.basket;

export const basketQuantity = (state: RootState) => state.basket.basket.length;

export const { addToBasket, emptyTheBasket } = basketSlice.actions;

export default basketSlice.reducer;
