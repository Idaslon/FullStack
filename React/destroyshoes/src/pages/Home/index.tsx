import React, { useState, useEffect, useCallback } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '@services/api';
import { formatPrice } from '@utils/format';

import { ProductApiResponse } from '@store/ducks/products/types';

import { useDispatch } from 'react-redux';
import { addToCart } from '@store/ducks/products/actions';
import {
  ProductsList, ProductItem, ProductInfo, AddButton,
} from './styles';


export default function Home() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<ProductApiResponse[]>([]);

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

  const handleAddToCart = useCallback((product: ProductApiResponse) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  return (
    <ProductsList>

      {products.map((product) => (
        <ProductItem key={product.id}>
          <ProductInfo>
            <img
              src={product.image}
              alt={product.title}
            />
            <p>{product.title}</p>
            <strong>{product.priceFormatted}</strong>
          </ProductInfo>
          <AddButton onClick={() => handleAddToCart(product)}>
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
