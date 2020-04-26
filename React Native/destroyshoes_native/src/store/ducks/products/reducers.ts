import { Reducer } from 'react';

import { produce } from 'immer';

import {
  ProductState,
  ProductActionsTypes,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from './types';

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
        const product = {
          ...action.payload,
          amount: 1,
        };

        draft.data.push(product);
      });
    case ADD_TO_CART_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
