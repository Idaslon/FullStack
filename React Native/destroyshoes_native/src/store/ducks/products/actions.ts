import { ProductApi, StockApi } from '~/services/api/types';

import {
  Product,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  UPDATE_AMOUNT_REQUEST,
  UPDATE_AMOUNT_SUCCESS,
} from './types';

export const addToCartRequest = (product: ProductApi) => ({
  payload: product,
  type: ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (product: Product) => ({
  payload: product,
  type: ADD_TO_CART_SUCCESS,
});

export const updateAmountRequest = (data: StockApi) => ({
  payload: data,
  type: UPDATE_AMOUNT_REQUEST,
});

export const updateAmountSuccess = (data: StockApi) => ({
  payload: data,
  type: UPDATE_AMOUNT_SUCCESS,
});
