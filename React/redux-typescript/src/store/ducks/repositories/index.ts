import { Reducer } from 'redux';
import {
  RepositoriesState, LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE, RepositoriesActionTypes,
} from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState, RepositoriesActionTypes> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload,
      };
    case LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
