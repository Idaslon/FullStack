import { Reducer } from 'react';

import { produce } from 'immer';

import {
  ProductState,
  ProductActionsTypes,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
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
    case ADD_TO_CART_REQUEST:
      return produce(state, (draft: ProductState) => {
        const { payload } = action;

        const index = draft.data.findIndex((p) => p.id === payload.id);

        if (index === -1) {
          const product = {
            ...payload,
            amount: 1,
            subtotal: payload.price,
            subtotalFormatted: formatPrice(payload.price),
          };
          draft.data.push(product);
        } else {
          const product = draft.data[index];

          product.amount += 1;
          product.subtotal += product.price;
          product.subtotalFormatted = formatPrice(product.subtotal);
        }
      });
    case ADD_TO_CART_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
