import React, { useCallback, useMemo } from 'react';
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';


import { useSafeSelector } from '@store/hooks';
import { useDispatch } from 'react-redux';
import { updateProductAmount, removeFromCart } from '@store/ducks/products/actions';
import { formatPrice } from '@utils/format';
import {
  Container, Product, Info, ProductDescription, ProductAmount, ProductPrice, Purchase,
} from './styles';

export default function Cart() {
  const products = useSafeSelector((state) => state.products.data);
  const dispatch = useDispatch();

  const incrementAmount = useCallback((id: number) => {
    dispatch(updateProductAmount({ id, amount: 1 }));
  }, [dispatch]);

  const decrementAmount = useCallback((id: number) => {
    dispatch(updateProductAmount({ id, amount: -1 }));
  }, [dispatch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const productIndex = products.findIndex((p) => p.id === id);
    const product = products[productIndex];

    const amount = Number(e.target.value);
    const amountToUpdate = amount - product.amount;

    dispatch(updateProductAmount({ id, amount: amountToUpdate }));
  }, [products, dispatch]);

  const totalPrice = useMemo(() => {
    const total = products.reduce((total, product) => total + product.subtotal, 0);

    return formatPrice(total);
  }, [products]);

  const removeProduct = useCallback((id: number) => {
    dispatch(removeFromCart(id));
  }, [dispatch]);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id}>
          <img
            src={product.image}
            alt={product.title}
          />
          <Info>
            <h4>PRODUTO</h4>
            <ProductDescription>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </ProductDescription>
          </Info>
          <Info>
            <h4>QUANTIDADE</h4>
            <ProductAmount>
              <MdRemoveCircleOutline
                color="#7f2ed0"
                size={20}
                onClick={() => decrementAmount(product.id)}
              />
              <input
                type="text"
                value={product.amount}
                onChange={(e) => handleInputChange(e, product.id)}
              />
              <MdAddCircleOutline
                color="#7f2ed0"
                size={20}
                onClick={() => incrementAmount(product.id)}
              />
            </ProductAmount>
          </Info>
          <Info>
            <h4>SUBTOTAL</h4>
            <ProductPrice>
              <span>{product.subtotalFormatted}</span>
              <MdDelete
                color="#7f2ed0"
                size={20}
                onClick={() => removeProduct(product.id)}
              />
            </ProductPrice>
          </Info>
        </Product>
      ))}

      <Purchase>
        <button type="button">FINALIZAR PEDIDO</button>
        <strong>
          <span>TOTAL</span>
          {totalPrice}
        </strong>
      </Purchase>
    </Container>
  );
}
