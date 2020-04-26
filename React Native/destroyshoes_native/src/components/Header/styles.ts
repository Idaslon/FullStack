import styled from 'styled-components/native';

import { darken } from 'polished';
import logo from '~/assets/logo.png';
import appColors from '~/styles/appColors';

export const Container = styled.View`
  background: ${darken(0.04, appColors.dark)};
  flex-direction: row;

  align-content: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 239px;
  height: 31px;
`;

export const ShopContainer = styled.View``;

export const Circle = styled.Text`
  position: absolute;
  top: -4px;
  right: -6px;

  width: 18px;
  height: 18px;

  text-align: center;
  border-radius: 15px;

  font-size: 12px;

  background: ${appColors.primary};
  color: #fff;
`;
