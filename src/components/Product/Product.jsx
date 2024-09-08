import { useAddToCart } from "../../hooks/useAddToCart";
import { CartContext } from "../../contexts/CartContext";
import React, { useContext } from "react";
import "./Product.css";

export default function Product() {
  const { state } = useContext(CartContext);
  const addToCart = useAddToCart();

  return (
    <>
      <div className="product-cart">
        {state.map((product) =>
          Math.floor((product.id - 1) / 2) % 2 === 0 ? (
            <div className="product-container" key={product.id}>
              <div className="description">
                <h2>{product.product_name}</h2>
                <h6>{product.bulk}</h6>
                <p>{product.description}</p>
                <p>{product.price}€</p>
                <button onClick={() => addToCart(product)} className="btn">
                  Add to Bag
                </button>
              </div>
              <div className="description-img">
                <img src={product.image} alt={product.product_name} />
              </div>
            </div>
          ) : (
            <div className="product-container" key={product.id}>
              <div className="description-img">
                <img src={product.image} alt={product.product_name} />
              </div>
              <div className="description">
                <h2>{product.product_name}</h2>
                <h6>{product.bulk}</h6>
                <p>{product.description}</p>
                <p>{product.price}€</p>
                <button onClick={() => addToCart(product)} className="btn">
                  Add to Bag
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
