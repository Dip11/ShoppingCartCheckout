import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from '../../app/contracts/common.interface';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { RootState, AppThunk } from '../../app/store';
import { fetchProducts } from './productListApi';


const initialState: { products :ProductInterface[] } & CommonState  = {
    loading : false,
    products : []
}

export const getProductListAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return (await fetchProducts());    
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductListAsync.fulfilled, (state, action) => {        
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const productList = (state: RootState) => state.products.products;

export default productSlice.reducer;
