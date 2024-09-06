export default function reducer(state, action) {
    switch (action.type) {
      case "CLEAR_CART":
        return [];
      case "ADD_TO_CART":
        return [...state, action.payload];
      case "REMOVE_FROM_CART":
        return state.filter(
          product => product.id !== action.payload
        );
      default:
        return state;
    }
  }