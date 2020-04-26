import { ProductApi, StockApi } from '~/services/api/types';

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

export const UPDATE_AMOUNT_REQUEST = '@products/UPDATE_AMOUNT_REQUEST';
export const UPDATE_AMOUNT_SUCCESS = '@products/UPDATE_AMOUNT_SUCCESS';

export const REMOVE_FROM_CART = '@products/REMOVE_FROM_CART';

interface AddToCartRequestAction {
  payload: ProductApi;
  type: typeof ADD_TO_CART_REQUEST;
}

interface AddToCartSuccessAction {
  payload: Product;
  type: typeof ADD_TO_CART_SUCCESS;
}

interface UpdateAmountRequestAction {
  payload: StockApi;
  type: typeof UPDATE_AMOUNT_REQUEST;
}

interface UpdateAmountSuccessAction {
  payload: StockApi;
  type: typeof UPDATE_AMOUNT_SUCCESS;
}

interface RemoveFromCartAction {
  payload: {
    id: number;
  };
  type: typeof REMOVE_FROM_CART;
}

export type ProductActionsTypes =
  | AddToCartRequestAction
  | AddToCartSuccessAction
  | UpdateAmountRequestAction
  | UpdateAmountSuccessAction
  | RemoveFromCartAction;
