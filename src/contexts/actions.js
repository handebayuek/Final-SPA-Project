export function addToCart(product) {
    return {
      type: "ADD_TO_CART",
      payload: product,
    };
  }
  
  export function clearCart() {
    return {
      type: "CLEAR_CART",
    };
  }
  
  export function removeFromCart(index) {
    return {
      type: "REMOVE_FROM_CART",
      payload: index,
    };
  }
  