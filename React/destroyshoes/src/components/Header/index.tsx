import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '@images/logo.svg';
import { useSafeSelector } from '@store/hooks';

import { Container, Cart } from './styles';

export default function Header() {
  const cartProducts = useSafeSelector((state) => state.products.data);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="ROCKETSHOES" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartProducts.length}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
