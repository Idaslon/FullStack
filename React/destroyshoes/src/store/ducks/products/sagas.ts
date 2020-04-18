import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '@services/api';
import { ProductAmountResponse } from '@services/api/types';
import { ApplicationState } from '@store/index';
import { formatPrice } from '@utils/format';

import history from '@services/history';
import { ProductsTypes } from './types';
import {
  addToCartRequest, addToCartSuccess, updateProductAmountSuccess, updateProductAmountRequest,
} from './actions';

function* addToCart({ payload }: ReturnType<typeof addToCartRequest>) {
  const { products }: ApplicationState = yield select();
  const productState = products.data.find((p) => p.id === payload.id);

  const response: ProductAmountResponse = yield call(api.get, `/stock/${payload.id}`);
  const stockAmount = response.data.amount;

  const currentProductAmount = productState ? productState.amount : 0;
  const amount = currentProductAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade Solicitada fora de Stock');
    return;
  }

  if (productState) {
    yield put(updateProductAmountSuccess({ id: payload.id, amount: 1 }));
    return;
  }

  const product = {
    ...payload,
    amount: 1,
    subtotal: payload.price,
    subtotalFormatted: formatPrice(payload.price),
  };

  yield put(addToCartSuccess(product));

  history.push('/cart');
}

function* updateAmount({ payload }: ReturnType<typeof updateProductAmountRequest>) {
  const { products }: ApplicationState = yield select();
  const product = products.data.find((p) => p.id === payload.id);

  if (product) {
    const response: ProductAmountResponse = yield call(api.get, `/stock/${payload.id}`);

    const updatedAmount = product.amount + 1;

    if (updatedAmount > response.data.amount) {
      toast.error('Quantidade fora de stock');
      return;
    }

    yield put(updateProductAmountSuccess({ amount: 1, id: payload.id }));
  }
}

export default all([
  takeLatest(ProductsTypes.ADD_TO_CART_REQUEST, addToCart),
  takeLatest(ProductsTypes.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
