const sumItems = (cartItems) =>
  cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        sumItems: sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "INCREASE_ITEM": {
      const increasedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: +item.quantity + 1 }
          : item
      );

      return {
        ...state,
        sumItems: sumItems(increasedItems),
        cartItems: [...increasedItems],
      };
    }

    case "DECREASE_ITEM": {
      const decresedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: +item.quantity - 1 }
          : item
      );

      return {
        ...state,
        sumItems: sumItems(decresedItems),
        cartItems: [...decresedItems],
      };
    }

    case "REMOVE_ITEM": {
      const removedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        sumItems: sumItems(removedItems),
        cartItems: [...removedItems],
      };
    }

    default:
      return state;
  }
};

export default reducer;
