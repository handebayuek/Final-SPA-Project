import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext as default, CartProvider };
