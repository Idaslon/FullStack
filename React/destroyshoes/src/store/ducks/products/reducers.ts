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
  console.log(action.type);

  switch (action.type) {
    case ProductsTypes.ADD_TO_CART_SUCESS:
      return produce(state, (draft) => {
        draft.data.push(action.payload);
      });
    case ProductsTypes.UPDATE_AMOUNT_SUCCESS:
      return produce(state, (draft) => {
        const { payload } = action;

        const productIndex = draft.data.findIndex((p) => p.id === payload.id);
        const product = draft.data[productIndex];

        const amountUpdated = product.amount + payload.amount;

        if (product && amountUpdated > 0) {
          updateProductAmountAndSubtotal(product, amountUpdated);
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

const updateProductAmountAndSubtotal = (product: Product, amount: number) => {
  product.amount = amount;
  product.subtotal = product.price * product.amount;
  product.subtotalFormatted = formatPrice(product.subtotal);

  return product;
};

export default reducer;
