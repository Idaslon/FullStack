import { createStore, Store } from 'redux';

import reducers from './ducks/rootReducer';
import { ProductsState } from './ducks/products/types';

export interface ApplicationState {
  products: ProductsState
}

const store: Store<ApplicationState> = createStore(reducers);

export default store;
