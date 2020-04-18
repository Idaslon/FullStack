import { ProductApiResponse, StockAmount } from '@services/api/types';
import { ProductsTypes, Product } from './types';

export const addToCartRequest = (product: ProductApiResponse) => ({
  type: ProductsTypes.ADD_TO_CART_REQUEST,
  payload: product,
});

export const addToCartSuccess = (product: Product) => ({
  type: ProductsTypes.ADD_TO_CART_SUCESS,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: ProductsTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const updateProductAmountRequest = (stockAmount: StockAmount) => ({
  type: ProductsTypes.UPDATE_AMOUNT_REQUEST,
  payload: stockAmount,
});

export const updateProductAmountSuccess = (stockAmount: StockAmount) => ({
  type: ProductsTypes.UPDATE_AMOUNT_SUCCESS,
  payload: stockAmount,
});
