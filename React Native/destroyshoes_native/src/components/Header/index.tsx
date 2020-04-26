import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';

import { Container, Logo, ShopContainer, Circle } from './styles';

export default function Header() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Logo />
      <ShopContainer>
        <Icon
          name="shopping-basket"
          color="#FFF"
          size={28}
          onPress={() => navigate('Cart')}
          style={{ flex: 1 }}
        />
        <Circle>3</Circle>
      </ShopContainer>
    </Container>
  );
}
