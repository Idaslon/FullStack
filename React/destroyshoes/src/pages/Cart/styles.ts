import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  margin: 35px 10px 0px;
  padding: 20px;

  border-radius: 4px;
  background: #fff;
`;

export const Product = styled.li`
  display: flex;
  align-content: center;
  justify-content: space-between;

  padding-bottom: 30px;
  border-bottom: 1px solid #eee;

  img {
    max-width: 120px;
  }

  svg {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    color: #999;
    margin-bottom: 40px;
  }

`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    margin-bottom: 5px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ProductAmount = styled.div`
  display: flex;
  align-content: center;

  input {
    max-width: 50px;
    margin: 0 5px;
    padding: 5px 10px;

    border-radius: 4px;
    border: 1px solid #eee;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  span {
    font-size: 15px;
    font-weight: bold;
  }

  svg {
    margin-right: 80px;
    margin-left: 60px;
  }

`;


export const Purchase = styled.footer`
  display: flex;
  justify-content: space-between;
  align-content: center;

  margin-top: 30px;

  button {
    padding: 12px 20px;
    border-radius: 5px;

    font-weight: bold;
    color: #fff;
    background: ${darken(0.03, '#7159c1')};

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#7159c1')}
    }
  }

  strong {
    font-size: 28px;

    span {
      margin-right: 4px;

      font-size: 12px;
      color: #999;
    }

  }

`;
