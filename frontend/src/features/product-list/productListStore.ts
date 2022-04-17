import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from '../../app/contracts/common.interface';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { RootState, AppThunk } from '../../app/store';
import { addNewProduct, fetchProducts } from './productListApi';


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

export const addNewProductAsync = createAsyncThunk(
  'product/addNewProduct',
  async (product: ProductInterface) => {
    return (await addNewProduct(product));    
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
      })
      .addCase(addNewProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProductAsync.fulfilled, (state, action) => {  
        console.log(action.payload);
              
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const productList = (state: RootState) => state.products.products;

export default productSlice.reducer;
