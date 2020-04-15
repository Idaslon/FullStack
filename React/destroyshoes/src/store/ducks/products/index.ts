import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  console.log(state);

  switch (action.type) {
    case ProductsTypes.ADD_TO_CART:
      return { ...state, loading: true, data: [...state.data, action.payload.data] };

      // case ProductsTypes.LOAD_REQUEST:
      //   return { ...state, loading: true };
      // case ProductsTypes.LOAD_SUCCESS:
      //   return { ...state, loading: false, data: action.payload.data };
      // case ProductsTypes.LOAD_FAILURE:
      //   return { ...state, loading: false, error: false };

    default:
      return state;
  }
};


export default reducer;
