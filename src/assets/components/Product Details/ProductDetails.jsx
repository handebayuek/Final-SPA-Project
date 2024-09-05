import { useFetch } from "../../hooks/useFetch";
import { useAddToCart } from "../../hooks/useAddToCart";
import React from "react";

export default function ProductDetails() {
  const { data } = useFetch("./data.json");
  const addToCart = useAddToCart();

  return (
    <>
      <ul className="product-cart">
        {data.map((product) => (
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
