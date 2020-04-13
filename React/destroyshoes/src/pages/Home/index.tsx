import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductsList, ProductItem, AddButton } from './styles';

export default function Home() {
  return (
    <ProductsList>
      <ProductItem>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
          alt="Tênis"
        />
        <p>Tênis muito legal com um titulo grande pra cacente mesmo tipo assm um negocio enomr</p>
        <strong>R$24,99</strong>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>
      <ProductItem>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
            alt="Tênis"
          />
          <p>Tênis muito legal com um titulo grande pra cacente mesmo tipo assm um negocio enomr</p>
          <strong>R$24,99</strong>
        </div>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>
      <ProductItem>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
            alt="Tênis"
          />
          <p> assm um negocio enomr</p>
          <strong>R$24,99</strong>
        </div>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>
      <ProductItem>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
            alt="Tênis"
          />
          <p> assm um negocio enomr</p>
          <strong>R$24,99</strong>
        </div>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>
      <ProductItem>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
            alt="Tênis"
          />
          <p> assm um negocio enomr</p>
          <strong>R$24,99</strong>
        </div>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>
      <ProductItem>
        <div>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/02/D12-9660-002/D12-9660-002_detalhe1.jpg?ts=1580822700?ims=280x280"
            alt="Tênis"
          />
          <p> assm um negocio enomr</p>
          <strong>R$24,99</strong>
        </div>
        <AddButton>
          <div>
            <MdAddShoppingCart size={14} color="#FFF" />
            <span>3</span>
          </div>
          <strong>ADICIONAR AO CARRINHO</strong>
        </AddButton>
      </ProductItem>

    </ProductsList>
  );
}
