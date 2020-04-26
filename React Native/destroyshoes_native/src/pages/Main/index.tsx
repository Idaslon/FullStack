import React, { useState, useEffect, useCallback } from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux';
import Header from '~/components/Header';
import api from '~/services/api';
import { ProductApi } from '~/services/api/types';

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
import { addToCartRequest } from '~/store/ducks/products/actions';
import { useSafeSelector } from '~/store/hooks';

interface Amounts {
  [key: number]: number;
}

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const productsAmounts = useSafeSelector((state) =>
    state.products.data.reduce(
      (amounts, product) => ({ ...amounts, [product.id]: product.amount }),
      {} as Amounts
    )
  );

  const [products, setProducts] = useState<ProductApi[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<ProductApi[]>('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  const handleAddToCart = useCallback(
    (product: ProductApi) => {
      dispatch(addToCartRequest(product));
    },
    [dispatch]
  );

  const renderProduct = (product: ProductApi) => (
    <Product>
      <ProductImage
        source={{
          uri: product.image,
        }}
      />
      <ProductDescription>{product.title}</ProductDescription>
      <ProductPrice>{product.priceFormatted}</ProductPrice>
      <AddToCartButton onPress={() => handleAddToCart(product)}>
        <ProductCartAmount>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <ProductCartAmountText>
            {productsAmounts[product.id] ?? 0}
          </ProductCartAmountText>
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
