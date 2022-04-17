import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketStore from '../features/basket/basketStore';
import productListStore from '../features/product-list/productListStore';

export const store = configureStore({
  reducer: {
    products: productListStore,
    basket: basketStore,
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
