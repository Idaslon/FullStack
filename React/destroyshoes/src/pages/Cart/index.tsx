import React from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';


import {
  Container, Product, Info, ProductDescription, ProductAmount, ProductPrice, Purchase,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
          alt="Tênis"
        />
        <Info>
          <h4>PRODUTO</h4>
          <ProductDescription>
            <strong>Tênis muito massa</strong>
            <span>129.90</span>
          </ProductDescription>
        </Info>
        <Info>
          <h4>QUANTIDADE</h4>
          <ProductAmount>
            <MdRemoveCircleOutline color="#7f2ed0" size={20} />
            <input type="text" value={2} />
            <MdAddCircleOutline color="#7f2ed0" size={20} />
          </ProductAmount>
        </Info>
        <Info>
          <h4>SUBTOTAL</h4>
          <ProductPrice>
            <span>R$222,99</span>
            <MdDelete color="#7f2ed0" size={20} />
          </ProductPrice>
        </Info>
      </Product>

      <Purchase>
        <button type="button">FINALIZAR PEDIDO</button>
        <strong>
          <span>TOTAL</span>
          R$2456,00
        </strong>
      </Purchase>
    </Container>
  );
}
