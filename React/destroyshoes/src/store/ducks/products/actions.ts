import { ProductsTypes, ProductApiResponse, ProductRefAmount } from './types';

export const addToCart = (product: ProductApiResponse) => ({
  type: ProductsTypes.ADD_TO_CART,
  payload: product,
});

export const updateProductAmount = (productRefAmount: ProductRefAmount) => ({
  type: ProductsTypes.UPDATE_AMOUNT,
  payload: productRefAmount,
});
