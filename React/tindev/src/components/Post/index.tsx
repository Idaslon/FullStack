import React from 'react';
import {
  Container, PostHeader, Info, Title,
} from './style';
import { UserLogo } from '../Header/style';

import logo from '../../assets/logo.png';
import Comment from '../Comment';

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

    <Comment user="Idaslon" userLogo={logo} text="Boy eh doido" />
    <Comment user="Idaslon" userLogo={logo} text="Boy eh doido" />

  </Container>
);

export default Post;
