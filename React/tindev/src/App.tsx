import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Post user="Lonlon" date="04 Jun 2020" title="Pessoal alguém sabe dizer quem eh o kra??" />
    </>
  );
}

export default App;
