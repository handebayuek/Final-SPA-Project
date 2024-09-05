export default function reducer(state, action) {
    switch (action.type) {
      case "CLEAR_CART":
        return [];
      case "ADD_TO_CART":
        return [...state, action.payload];
      case "REMOVE_FROM_CART":
        return state.filter(
          (_, filteredIndex) => action.payload !== filteredIndex
        );
      default:
        return state;
    }
  }