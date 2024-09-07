import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { data } from "./data.js";

const CartContext = createContext();

/* const initialState = [
  {
    product_name: "Cleanser",
    bulk: "100 ml",
    price: 25,
    id: 1,
    brand: "BotaniPure",
    description:
      "Our washing gel is a gentle, daily cleanser that effectively removes impurities, excess oil, and makeup without stripping your skin's natural moisture. It leaves your skin feeling clean, refreshed, and balanced, making it ideal for all skin types, including sensitive skin.",
    image: "/image/cleanser.jpg",
  },

  {
    product_name: "Tonic",
    bulk: "100 ml",
    price: 15,
    id: 2,
    brand: "BotaniPure",
    description:
      "This refreshing tonic helps to restore your skin's natural pH balance after cleansing. Infused with soothing botanical extracts, it tightens pores, removes any remaining impurities, and prepares your skin to absorb the benefits of subsequent skincare products.",
    image: "/image/tonik.jpg",
  },
]; */
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
