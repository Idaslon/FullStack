import React from 'react';
import { Container, Profile, UserLogo } from './style';

import logo from '../../assets/logo.png';

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
