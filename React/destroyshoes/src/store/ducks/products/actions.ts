import { ProductsTypes, Product } from './types';

export const addToCart = (data: Product) => ({
  type: ProductsTypes.ADD_TO_CART,
  payload: {
    data,
  },
});

// export const loadRequest = () => ({
//   type: ProductsTypes.LOAD_REQUEST,
// });

// export const loadSuccess = () => ({
//   type: ProductsTypes.LOAD_SUCCESS,
// });

// export const loadFailure = () => ({
//   type: ProductsTypes.LOAD_FAILURE,
// });
