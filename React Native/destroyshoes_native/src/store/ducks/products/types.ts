import { ProductApi } from '~/services/api/types';

export interface Product extends ProductApi {
  amount: number;
  subtotal: number;
  subtotalFormatted: string;
}

export interface ProductState {
  readonly data: Product[];
}

export const ADD_TO_CART_REQUEST = '@products/ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = '@products/ADD_TO_CART_SUCCESS';

interface AddToCartRequestAction {
  payload: ProductApi;
  type: typeof ADD_TO_CART_REQUEST;
}

interface AddToCartSuccessAction {
  payload: ProductApi;
  type: typeof ADD_TO_CART_SUCCESS;
}

export type ProductActionsTypes =
  | AddToCartRequestAction
  | AddToCartSuccessAction;
