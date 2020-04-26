import styled from 'styled-components/native';

import { FlatList, TextInput, RectButton } from 'react-native-gesture-handler';

import { Product } from '~/services/api/types';
import appColors from '~/styles/appColors';

export const Container = styled.View`
  flex: 1;
  padding: 10px 30px;
  background: ${appColors.dark};
`;

export const Purchase = styled.View`
  margin-top: 40px;

  padding: 0px 15px;
  border-radius: 5px;

  background: #fff;
`;

export const CartProduct = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 25px;
`;

export const CartProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const CartProductInfo = styled.View`
  margin: 0 10px;
  max-width: 190px;
`;

export const CartProductDescription = styled.Text`
  font-size: 16px;
  line-height: 21px;

  color: #555;
`;

export const CartProductPrice = styled.Text`
  margin-top: 6px;

  font-size: 19px;
  font-weight: bold;
`;

export const CartProductControls = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;

  padding: 10px;
  border-radius: 5px;

  background: #eee;
`;

export const CartProductInput = styled(TextInput).attrs({
  readonly: true,
})`
  min-width: 60px;
  height: 29px;

  justify-content: center;

  margin: 0px 6px;
  padding: 5px 10px;

  border: 1px solid #ddd;
  border-radius: 5px;

  background: #fff;
`;

export const CartProductSubtotal = styled.Text`
  margin-left: auto;

  font-size: 20px;
  font-weight: bold;
`;

export const EndPurchase = styled.View`
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const TotalText = styled.Text`
  text-align: center;

  color: #999;
  font-size: 20px;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  margin-bottom: 20px;

  text-align: center;

  font-size: 30px;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  align-items: center;

  padding: 15px;
  border-radius: 5px;

  background: ${appColors.primary};
`;

export const SubmitText = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #fff;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  max-height: 350px;
`;
