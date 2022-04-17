import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import basketStore from '../features/basket/basketStore';
import checkoutStore from '../features/checkout/checkoutStore';
import productListStore from '../features/product-list/productListStore';

export const store = configureStore({
  reducer: {
    products: productListStore,
    basket: basketStore,
    checkout: checkoutStore,
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
