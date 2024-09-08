import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import { CartProvider } from "./contexts/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/Shopping Cart/ShoppingCart";
import Footer from "./components/Footer/Footer";
import GuidePage from "./components/Guide Page/GuidePage";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <>
      <div className="app-container">
        <CartProvider>
          <NavBar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/guidepage" element={<GuidePage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />

              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
