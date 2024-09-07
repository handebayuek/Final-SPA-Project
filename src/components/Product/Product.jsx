import { useAddToCart } from "../../hooks/useAddToCart";
import { CartContext } from "../../contexts/CartContext";
import React, { useContext } from "react";

export default function Product() {
  const { state } = useContext(CartContext);
  const addToCart = useAddToCart();

  return (
    <>
      <ul className="product-cart">
        {state.map((product) => (
          <li key={product.id}>
            <div className="description">
              <h2>{product.product_name}</h2>
              <h6>{product.bulk}</h6>
              <p>{product.description}</p>
              <p>{product.price}€</p>
              <button onClick={() => addToCart(product)}>Add to Bag</button>
            </div>
            <div className="description-img">
              <img src={product.image} alt={product.product_name} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
