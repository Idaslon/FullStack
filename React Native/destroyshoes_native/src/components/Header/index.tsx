import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';

import logo from '~/assets/logo.png';

import { Container, Logo } from './styles';

export default function Header() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Logo source={logo} />
      <Icon
        name="shopping-basket"
        color="#FFF"
        size={34}
        onPress={() => {
          navigate('Cart');
        }}
      />
    </Container>
  );
}
