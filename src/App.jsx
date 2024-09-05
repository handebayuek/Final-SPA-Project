import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage/HomePage";
import About from "./assets/components/About/About";
import Login from "./assets/components/Login/Login";
import ProductDetails from "./assets/components/Product Details/ProductDetails";
import { CartProvider } from "./assets/contexts/CartContext";
import NavBar from "./assets/components/NavBar/NavBar";
import ShoppingCart from "./assets/components/Shopping Cart/ShoppingCart";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
