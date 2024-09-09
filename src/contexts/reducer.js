
export default function reducer(state, action) {
  switch (action.type) {
    case "CLEAR_CART":
      return state.map((product) => {
        const newProduct = {...product};
        delete newProduct.quantity;
        return newProduct;
      });
      
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      const productInCart = state.find((item) => item.id === action.payload.id);

      if (productInCart) {
        // If product is already in the cart, update the quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        // If product is not in the cart, add it with a quantity of 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
    
    case "REMOVE_FROM_CART":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: 0}
          : item
      );
   

    case "UPDATE_QUANTITY":
      // Update the quantity of a specific product in the cart
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
}