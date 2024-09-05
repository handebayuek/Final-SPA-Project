import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage/HomePage";
import About from "./assets/components/About/About";
import Login from "./assets/components/Login/Login";
import ProductDetails from "./assets/components/Product Details/ProductDetails";
import ShoppingBag from "./assets/components/Shopping Bag/ShoppingBag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shoppingbag" element={<ShoppingBag />} />
      </Routes>
    </>
  );
}

export default App;
