import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RepositoryList from './components/RepositoryList';


function App() {
  return (
    <Provider store={store}>
      <RepositoryList />
    </Provider>
  );
}

export default App;
