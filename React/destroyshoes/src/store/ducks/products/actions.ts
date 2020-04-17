import { ProductsTypes, ProductApiResponse, ProductRefAmount } from './types';

export const addToCart = (product: ProductApiResponse) => ({
  type: ProductsTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id: number) => ({
  type: ProductsTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const updateProductAmount = (productRefAmount: ProductRefAmount) => ({
  type: ProductsTypes.UPDATE_AMOUNT,
  payload: productRefAmount,
});
