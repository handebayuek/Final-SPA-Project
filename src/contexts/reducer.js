/* export default function reducer(state, action) {
    switch (action.type) {
      case "CLEAR_CART":
        return [];
      case "ADD_TO_CART":
        const updatedCartArr = state.map((item) => {
          if (item.id === action.payload.id) {
            if(item.quantity) {
              return { ...item, quantity: item.quantity + 1 }; // if the product id matches, update the quantity
            }else{
              return { ...item, quantity: 1 }; // if the product id matches, update the quantity
            }
          }
        });
        // return updatedCartArr;
        return [...state, updatedCartArr];
      case "REMOVE_FROM_CART":
        return state.filter(
          product => product.id !== action.payload
        );
      default:
        return state;
    }
  } */

    export default function reducer(state, action) {
      switch (action.type) {
        case "CLEAR_CART":
          return [];
          
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
          return state.filter((product) => product.id !== action.payload);
    
        default:
          return state;
      }
    }