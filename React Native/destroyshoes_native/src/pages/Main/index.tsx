import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import {
  Container,
  Product,
  ProductImage,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  ProductCartAmount,
  ProductCartAmountText,
  AddToCartText,
} from './styles';

interface Product {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
  image: string;
}

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  const renderProduct = (product: Product) => (
    <Product>
      <ProductImage
        source={{
          uri: product.image,
        }}
      />
      <ProductDescription>{product.title}</ProductDescription>
      <ProductPrice>{product.priceFormatted}</ProductPrice>
      <AddToCartButton>
        <ProductCartAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <ProductCartAmountText>1</ProductCartAmountText>
        </ProductCartAmount>
        <AddToCartText>ADICIONAR</AddToCartText>
      </AddToCartButton>
    </Product>
  );

  return (
    <Container>
      <Header />

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderProduct(item)}
      />
    </Container>
  );
};

export default Main;
