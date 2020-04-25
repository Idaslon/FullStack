import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { darken } from 'polished';

import appColors from '~/styles/appColors';

export const Container = styled.View`
  flex: 1;
  padding: 10px 30px;
  background: ${appColors.dark};
`;

export const Product = styled.View`
  max-width: 300px;
  max-height: 460px;

  margin-right: 20px;
  margin-top: 40px;

  align-content: center;
  justify-content: center;

  padding: 20px;
  border-radius: 6px;

  background: #fff;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 280px;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  line-height: 24px;
  font-size: 18px;

  color: #494949;
`;

export const ProductPrice = styled.Text`
  margin-top: 4px;

  font-size: 26px;
  font-weight: bold;
`;

export const AddToCartButton = styled(RectButton)`
  flex-direction: row;
  align-content: center;

  margin-top: auto;

  border-radius: 5px;

  background: ${appColors.primary};
`;

export const ProductCartAmount = styled.View`
  flex-direction: row;
  align-content: center;

  padding: 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  background: ${darken(0.1, appColors.primary)};
`;

export const ProductCartAmountText = styled.Text`
  margin-left: 8px;
  font-size: 15px;

  color: #fff;
`;

export const AddToCartText = styled.Text`
  flex: 1;
  align-self: center;

  text-align: center;

  font-weight: bold;
  font-size: 17px;

  color: #fff;
`;
