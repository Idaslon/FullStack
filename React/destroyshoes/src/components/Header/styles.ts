import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  margin-top: 50px;
`;

export const Cart = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      color: #999;
      font-size: 12px;
    }
  }
`;
