import React, { useMemo, useCallback } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';
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
import {
  updateAmountRequest,
  removeFomCart,
} from '~/store/ducks/products/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSafeSelector((state) => state.products.data);

  const updateAmount = useCallback(
    (id: number, amount: number) => {
      dispatch(updateAmountRequest({ id, amount }));
    },
    [dispatch]
  );

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFomCart({ id }));
    },
    [dispatch]
  );

  const totalPrice = useMemo(() => {
    const totalProductsPrice = products.reduce(
      (total, product) => total + product.subtotal,
      0
    );
    return formatPrice(totalProductsPrice);
  }, [products]);

  const renderProduct = (product: Product) => (
    <>
      <CartProduct>
        <CartProductImage source={{ uri: product.image }} />
        <CartProductInfo>
          <CartProductDescription>{product.title}</CartProductDescription>
          <CartProductPrice>{product.priceFormatted}</CartProductPrice>
        </CartProductInfo>
        <Icon
          name="delete-forever"
          size={28}
          color={appColors.primary}
          onPress={() => handleRemoveFromCart(product.id)}
        />
      </CartProduct>
      <CartProductControls>
        <Icon
          name="remove-circle-outline"
          size={24}
          color={appColors.primary}
          onPress={() => updateAmount(product.id, -1)}
        />
        <CartProductInput value={String(product.amount)} />
        <Icon
          name="add-circle-outline"
          size={24}
          color={appColors.primary}
          onPress={() => updateAmount(product.id, 1)}
        />
        <CartProductSubtotal>{product.subtotalFormatted}</CartProductSubtotal>
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
          <TotalPrice>{totalPrice}</TotalPrice>
          <SubmitButton onPress={() => {}}>
            <SubmitText>FINALIZAR PEDIDO</SubmitText>
          </SubmitButton>
        </EndPurchase>
      </Purchase>
    </Container>
  );
};

export default Cart;
