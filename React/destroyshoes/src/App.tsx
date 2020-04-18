import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import Header from '@components/Header';
import history from '@services/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>

      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Router history={history}>
        <Header />
        <Routes />
      </Router>

    </Provider>
  );
}

export default App;
