import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import "./NavBar.css";

function NavBar() {
  const { state } = useContext(CartContext);
  const showQuantity = state.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Our Products</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingcart">
              Shopping Cart {showQuantity > 0 ? "(" + showQuantity + ")" : ""}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
