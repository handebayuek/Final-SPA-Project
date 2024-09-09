import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';
import {clearCart} from '../contexts/actions';


export function useClearCart(){
    const {dispatch} = useContext(CartContext);
    return () => {
        dispatch(clearCart());
    }
}