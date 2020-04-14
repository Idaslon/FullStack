import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '@services/api';
import { formatPrice } from '@utils/format';

import {
  ProductsList, ProductItem, ProductInfo, AddButton,
} from './styles';


interface ProductApiResponse {
  id: number
  title: string
  price: number
  image: string
}

interface Product extends ProductApiResponse{
  priceFormatted: string
}


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<ProductApiResponse[]>('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }
      ));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <ProductsList>

      {products.map((product) => (
        <ProductItem>
          <ProductInfo>
            <img
              src={product.image}
              alt={product.title}
            />
            <p>{product.title}</p>
            <strong>{product.priceFormatted}</strong>
          </ProductInfo>
          <AddButton>
            <div>
              <MdAddShoppingCart size={14} color="#FFF" />
              <span>3</span>
            </div>
            <strong>ADICIONAR AO CARRINHO</strong>
          </AddButton>
        </ProductItem>
      ))}

    </ProductsList>
  );
}
