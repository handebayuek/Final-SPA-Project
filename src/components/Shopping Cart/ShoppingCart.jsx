import React, { useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { CartContext } from "../../contexts/CartContext";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { state } = useContext(CartContext);
  console.log("state:", state);
  const removeFromCart = useRemoveFromCart();

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10); // değeri sayıya çevir
    const updatedCartArr = state.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: numericValue }; // ürün id eşleşirse, miktarı güncelle
      }
      return item;
    });
    // Burada setProducts fonksiyonu eksik, güncelleme işlemi yapılmalı
  };

  const totalPrices = state.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0), // her ürünün fiyatını topla
    0
  );

  const productList = state
    .filter((aa) => aa.quantity > 0)
    .map((state) => (
      <div key={state.id}>
        <div className="shopping-container">
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
            <button onClick={() => removeFromCart(state.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            {/* <p>{(state.price || 0).toFixed(2)}</p> */}
            <p>{(state.price || 0) * (state.quantity || 0)}€</p>
          </div>
        </div>
      </div>
    ));

  console.log("productList:", productList);

  return (
    <>
      <div className="shopping-card">
        <div>
          {productList.length === 0 ? (
            <h1 className="empty-h1">Shopping Cart is Empty</h1>
          ) : (
            <>
              <h1>Your Bag</h1>
              {productList}
              <div className="total-price">
                <h4>
                  Total Price: <span>{totalPrices}€</span>
                </h4>
              </div>
            </>
          )}
        </div>

        {productList.length > 0 && (
          <>
            <div className="payment-step">
              <p>Proceed to payment step</p>
              <i class="fa-solid fa-circle-arrow-right fa-2xl"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
