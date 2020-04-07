import React from 'react';

import logo from '@assets/logo.png';

import { Container, Profile, UserLogo } from './style';


const Header: React.FC = () => (
  <Container>
    Tindev

    <Profile>
      Meu Perfil
      <UserLogo src={logo} />
    </Profile>
  </Container>
);

export default Header;
