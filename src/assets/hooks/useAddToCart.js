import { useContext } from 'react';
import { addToCart } from '../contexts/actions';
import {CartContext} from '../contexts/CartContext';

export function useAddToCart() {
  const { dispatch } = useContext(CartContext);

  return (product) => {
    console.log('Product added to cart:', product);
    dispatch(addToCart(product));
  };
}