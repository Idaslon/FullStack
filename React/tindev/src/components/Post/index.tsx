import React from 'react';
import {
  Container, PostHeader, Info, Title,
} from './style';
import { UserLogo } from '../Header/style';

import logo from '../../assets/logo.png';

interface Props {
  user: string
  date: string
  title: string
}

const Post: React.FC<Props> = ({ user, date, title }: Props) => (
  <Container>
    <PostHeader>
      <UserLogo src={logo} />
      <Info>
        <b>{user}</b>
        <small>{date}</small>
      </Info>
    </PostHeader>
    <Title>{title}</Title>
    <hr />

  </Container>
);

export default Post;
