import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Product } from '~/store/ducks/products/types';
import { useSafeSelector } from '~/store/hooks';

import Header from '~/components/Header';
import appColors from '~/styles/appColors';
import { formatPrice } from '~/utils/format';

import {
  Container,
  Purchase,
  CartProduct,
  CartProductImage,
  CartProductInfo,
  CartProductDescription,
  CartProductPrice,
  CartProductControls,
  CartProductInput,
  CartProductSubtotal,
  EndPurchase,
  TotalText,
  TotalPrice,
  SubmitButton,
  SubmitText,
  ProductList,
} from './styles';

const Cart = () => {
  const products = useSafeSelector((state) => state.products.data);

  const renderProduct = (product: Product) => (
    <>
      <CartProduct>
        <CartProductImage source={{ uri: product.image }} />
        <CartProductInfo>
          <CartProductDescription>{product.title}</CartProductDescription>
          <CartProductPrice>{product.priceFormatted}</CartProductPrice>
        </CartProductInfo>
        <Icon name="delete-forever" size={28} color={appColors.primary} />
      </CartProduct>
      <CartProductControls>
        <Icon
          name="remove-circle-outline"
          size={24}
          color={appColors.primary}
        />
        <CartProductInput value="3" />
        <Icon name="add-circle-outline" size={24} color={appColors.primary} />
        <CartProductSubtotal>R$436,99</CartProductSubtotal>
      </CartProductControls>
    </>
  );

  return (
    <Container>
      <Header />
      <Purchase>
        <ProductList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => renderProduct(item)}
          showsVerticalScrollIndicator={false}
        />
        <EndPurchase>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>R$1000,97</TotalPrice>
          <SubmitButton onPress={() => {}}>
            <SubmitText>FINALIZAR PEDIDO</SubmitText>
          </SubmitButton>
        </EndPurchase>
      </Purchase>
    </Container>
  );
};

export default Cart;
