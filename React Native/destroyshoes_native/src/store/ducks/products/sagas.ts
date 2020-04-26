import { all, takeLatest } from 'redux-saga/effects';
import { addToCartRequest } from './actions';
import { ADD_TO_CART_REQUEST } from './types';

function* addToCart({ payload }: ReturnType<typeof addToCartRequest>) {}

export default all([takeLatest(ADD_TO_CART_REQUEST, addToCart)]);
