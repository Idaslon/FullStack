import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

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

import appColors from '~/styles/appColors';
import { Product } from '~/services/api/types';
import { formatPrice } from '~/utils/format';

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve e Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        priceFormatted: formatPrice(179.9),
      },
      {
        id: 2,
        title: 'Tênis de Caminhada Leve e Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        priceFormatted: formatPrice(179.9),
      },
    ];
    setProducts(data);
  }, []);

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
