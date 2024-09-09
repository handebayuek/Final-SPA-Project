import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { removeFromCart } from '../contexts/actions';

export function useRemoveFromCart() {
    const {
        dispatch
    } = useContext(CartContext);
    return product => {
        dispatch(removeFromCart(product));
    };

} 




