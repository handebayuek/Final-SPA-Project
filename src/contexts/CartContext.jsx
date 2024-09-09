import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { data } from "./data.js";

const CartContext = createContext();

const initialState = data;
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
