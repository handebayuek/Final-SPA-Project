import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
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
            <NavLink to="/productdetails">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingbag">Shopping Bag</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
