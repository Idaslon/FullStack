import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '@components/Header';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>

      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
