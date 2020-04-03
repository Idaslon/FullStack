import React from 'react';
import { Container, Text } from './style';
import { UserLogo } from '../Header/style';

interface Props {
  user: string
  userLogo: string
  text: string
}

const Comment: React.FC<Props> = ({ user, userLogo, text }: Props) => (
  <Container>
    <UserLogo src={userLogo} />
    <Text>
      <b>{user.concat(' ')}</b>
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
      {text}
    </Text>
  </Container>
);

export default Comment;
