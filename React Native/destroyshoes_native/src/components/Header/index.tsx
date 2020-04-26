import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from 'react-navigation-hooks';

import { State } from 'react-native-gesture-handler';
import { Container, Logo, ShopContainer, Circle } from './styles';
import { useSafeSelector } from '~/store/hooks';

export default function Header() {
  const cartProductsSize = useSafeSelector(
    (state) => state.products.data.length
  );

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
        {cartProductsSize ? <Circle>{cartProductsSize}</Circle> : <></>}
      </ShopContainer>
    </Container>
  );
}
