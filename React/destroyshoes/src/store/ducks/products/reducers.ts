import { Reducer } from 'redux';
import { produce } from 'immer';
import { formatPrice } from '@utils/format';
import {
  ProductsState, ProductsTypes, ProductsActionsTypes, Product,
} from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ProductsState, ProductsActionsTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const productIndex = draft.data.findIndex((p) => p.id === action.payload.id);

        if (productIndex === -1) {
          const product: Product = {
            ...action.payload,
            amount: 1,
            subtotal: action.payload.price,
            subtotalFormatted: formatPrice(action.payload.price),
          };
          draft.data.push(product);
        } else {
          const product = draft.data[productIndex];

          product.amount += 1;
          product.subtotal = product.price * product.amount;
          product.subtotalFormatted = formatPrice(product.subtotal);
        }
      });
    case ProductsTypes.UPDATE_AMOUNT:
      return produce(state, (draft) => {
        const { payload } = action;

        const productIndex = draft.data.findIndex((p) => p.id === payload.id);
        const product = draft.data[productIndex];

        const amountUpdated = product.amount + payload.amount;

        if (product && amountUpdated > 0) {
          product.amount = amountUpdated;
          product.subtotal = product.price * product.amount;
          product.subtotalFormatted = formatPrice(product.subtotal);
        }
      });
    case ProductsTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        const productIndex = draft.data.findIndex((p) => p.id === action.payload.id);

        if (productIndex !== -1) {
          draft.data.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
};

export default reducer;
