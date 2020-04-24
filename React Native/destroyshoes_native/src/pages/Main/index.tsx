import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo.png';
import {
  Scroll,
  AreaView,
  Logo,
  TopBar,
  Container,
  Product,
} from '~/pages/Main/styles';

Icon.loadFont();

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 42,
  },
});

const Main: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <Logo source={logo} />
        <Icon name="add-shopping-cart" color="#FFF" size={30} />
      </TopBar>

      <Product />

      {/* <AreaView>
        <Scroll
          horizontal
          data={[
            {
              title: 'AS',
            },
          ]}
        />
      </AreaView> */}
    </Container>
  );
};

export default Main;
