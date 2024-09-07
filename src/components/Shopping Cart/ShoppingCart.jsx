import React, { useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { CartContext } from "../../contexts/CartContext";
// import { useClearCart } from "../../hooks/useClearCart";

function ShoppingCart() {
  const { state } = useContext(CartContext);
  console.log("state:", state);
  const removeFromCart = useRemoveFromCart();
  //  const clearCart = useClearCart();

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10); // convert the value to a number
    const updatedCartArr = state.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: numericValue }; // if the product id matches, update the quantity
      }
      return item;
    });
    setProducts(updatedCartArr);
  };

  const totalPrices = state.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0), // add the price of each product to the accumulator
    0
  );

  const productList = state
    .filter((aa) => aa.quantity > 0)
    .map((state) => (
      <div key={state.id}>
        <img
          src={state.image}
          alt={state.product_name}
          className="shopping-image"
        />
        <div className="shopping-details">
          <h2>{state.product_name}</h2>
          <p>{state.bulk}</p>
          <input
            min="0"
            type="number"
            value={state.quantity || 0}
            onChange={(e) => handleQuantityChange(state.id, e.target.value)}
          />
          <p>{(state.price || 0).toFixed(2)}</p>
          <p>{((state.price || 0) * (state.quantity || 0)).toFixed(2)}</p>

          <button onClick={() => removeFromCart(state.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    ));
  console.log("productList:", productList);
  return (
    <>
      <div className="shopping-card">
        {productList.length === 0 ? (
          <h2>Shopping Cart is Empty</h2> // if it is empty
        ) : (
          productList
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
