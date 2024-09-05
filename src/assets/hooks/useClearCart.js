import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import {clearCart} from '../context/CartActions';


export function useClearCart(){
    const {dispatch} = useContext(CartContext);
    return () => {
        dispatch(clearCart());
    }
}