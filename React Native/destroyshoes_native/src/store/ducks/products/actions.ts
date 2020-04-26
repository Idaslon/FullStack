import { ProductApi } from '~/services/api/types';

import { Product, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS } from './types';

export const addToCartRequest = (product: ProductApi) => ({
  payload: product,
  type: ADD_TO_CART_REQUEST,
});

export const addToCartSuccess = (product: Product) => ({
  payload: product,
  type: ADD_TO_CART_SUCCESS,
});
