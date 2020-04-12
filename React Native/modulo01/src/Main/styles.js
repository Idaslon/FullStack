import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 18px;

  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 42px;
  padding: 0px 15px;
  border-radius: 3px;

  background-color: red;
  background: #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  margin-left: 10px;
  padding: 0px 12px;
  border-radius: 4px;

  background: #7f2ed0;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 13px 15px;
`;

export const Avatar = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 30px;
`;

export const Name = styled.Text`
  margin-top: 3px;

  font-size: 15px;
  font-weight: bold;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  margin-top: 4px;

  line-height: 19px;
  color: #999;
`;

export const ProfileButton = styled(RectButton)`
  align-self: stretch;

  align-items: center;
  justify-content: center;

  margin-top: 10px;
  height: 40px;
  border-radius: 4px;

  background: #7f2ed0;
`;

export const ProfileButtonText = styled.Text`
  font-weight: bold;
  color: #eee;
`;
