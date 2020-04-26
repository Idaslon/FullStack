import { MyState, StateTypes } from './types';

export const addRequest = (item: MyState) => ({
  type: StateTypes.ADD_REQUEST,
  payload: item,
});

export const addSuccess = (item: MyState) => ({
  type: StateTypes.ADD_REQUEST,
  payload: item,
});
