import styled from 'styled-components';
import { darken } from 'polished';

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-top: 35px;
`;

export const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  margin: 7px;
  padding: 0px 15px 15px;

  border-radius: 5px;
  background: #fff;


  p {
    max-width: 270px;
    margin-bottom: 6px;

    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }

  strong {
    font-size: 16px;
  }

`;

export const AddButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;

  margin-top: auto;
  margin-bottom: 0px;

  border-radius: 4px;
  background: #462F99;
  color: #fff;

  transition: background 1s;

  &:hover {
    background: ${darken(0.03, '#462F99')};
  }

  div {
    display: flex;
    align-items: center;
    padding: 10px;

    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 2px;
    }
  }

  strong {
    flex: 1;
    padding: 6px;
    font-size: 14px;
  }
`;
