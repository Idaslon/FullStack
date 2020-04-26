import { Reducer } from 'react';

import { produce } from 'immer';

import {
  ProductState,
  ProductActionsTypes,
  ADD_TO_CART_SUCCESS,
  UPDATE_AMOUNT_SUCCESS,
  REMOVE_FROM_CART,
} from './types';
import { formatPrice } from '~/utils/format';

const INITAL_STATE: ProductState = {
  data: [],
};

const reducer: Reducer<ProductState, ProductActionsTypes> = (
  state = INITAL_STATE,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return { data: [...state.data, action.payload] };
    case UPDATE_AMOUNT_SUCCESS:
      return produce(state, (draft: ProductState) => {
        const { payload } = action;

        if (payload.amount < 1) {
          return;
        }

        const index = draft.data.findIndex((p) => p.id === payload.id);
        const product = draft.data[index];

        product.amount = payload.amount;
        product.subtotal += product.price;
        product.subtotalFormatted = formatPrice(product.subtotal);
      });
    case REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const index = draft.data.findIndex((p) => p.id === action.payload.id);

        draft.data.splice(index, 1);
      });
    default:
      return state;
  }
};

export default reducer;
