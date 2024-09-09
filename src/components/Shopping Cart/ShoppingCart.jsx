import React, { useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { CartContext } from "../../contexts/CartContext";
import "./ShoppingCart.css";
import { useClearCart } from "../../hooks/useClearCart";

function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  console.log("state:", state);
  const removeFromCart = useRemoveFromCart();
  const clearCart = useClearCart();

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10); // değeri sayıya çevir

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: numericValue },
    });
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
            <button onClick={() => removeFromCart(state)}>
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
            <div className="empty-card-page">
              <div className="empty-p">
                <p>
                  Please add a product to your shopping bag in order to
                  checkout.
                </p>
              </div>
              <div className="img-container">
                {state.map((product) => (
                  <div className="img-item-shopping" key={product.id}>
                    <img src={product.image} alt={product.product_name} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h1>Your Bag</h1>
              <div className="product-list">{productList}</div>
              <div className="total-price">
                <h4>
                  Total Price: <span>{totalPrices}€</span>
                </h4>
                <button className="clear-btn" onClick={clearCart}>
                  Clear Bag
                </button>
              </div>
            </>
          )}
        </div>

        {productList.length > 0 && (
          <>
            <div className="payment-step">
              <p>Proceed to payment step</p>
              <i className="fa-solid fa-circle-arrow-right fa-2xl"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
