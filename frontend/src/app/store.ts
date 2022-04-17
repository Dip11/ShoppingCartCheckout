import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productListStore from '../features/product-list/productListStore';

export const store = configureStore({
  reducer: {
    products: productListStore,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
