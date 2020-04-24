import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px 30px;
  background: #191920;
`;

export const TopBar = styled.View`
  flex-direction: row;

  align-content: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const Product = styled.View`
  background: #fff;
`;

export const AreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled(FlatList)``;
