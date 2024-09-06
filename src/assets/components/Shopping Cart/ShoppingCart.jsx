import React, { useState, useEffect, useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { useFetch } from "../../hooks/useFetch";

function ShoppingCart() {
  const { data } = useFetch("./data.json");
  const [product, setProducts] = useState([]); // keep the products in the state
  const removeFromCart = useRemoveFromCart();
  // const clearCart = useClearCart();

  // when the data comes, update the state
  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data); // Verileri state'e ata
    }
    console.log("Fetched data:", data);
  }, []);

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10); // convert the value to a number
    const updatedCartArr = product.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: numericValue }; // if the product id matches, update the quantity
      }
      return item;
    });
    setProducts(updatedCartArr);
  };

  const totalPrices = product.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0), // add the price of each product to the accumulator
    0
  );

  return (
    <>
      <div className="shopping-card">
        {product.length === 0 ? (
          <h2>Shopping Cart is Empty</h2> // if it is empty
        ) : (
          product.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.product_name}
                className="shopping-image"
              />
              <div className="shopping-details">
                <h2>{product.product_name}</h2>
                <p>{product.bulk}</p>
                <input
                  min="0"
                  type="number"
                  value={product.quantity || 0}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
                <p>{(product.price || 0).toFixed(2)}</p>
                <p>
                  {((product.price || 0) * (product.quantity || 0)).toFixed(2)}
                </p>
                {/* NaN'ı önlemek için */}
                <button onClick={() => removeFromCart(product.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                {/*  <button onClick={clearCart}>Clear Shoppin Cart</button> */}
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h4>
          Total Price: <span>{totalPrices.toFixed(2)}</span>
        </h4>
      </div>
    </>
  );
}

export default ShoppingCart;
