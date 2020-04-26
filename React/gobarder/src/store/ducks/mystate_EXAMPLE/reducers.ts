import { Reducer } from 'redux';

import { State, StateTypes, ActionsTypes } from './types';

const INITIAL_STATE: State = {
  data: [],
};

const reducer: Reducer<State, ActionsTypes> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case StateTypes.ADD_REQUEST:
      console.log(action.payload);
      return state;
    case StateTypes.ADD_SUCCESS:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default reducer;
