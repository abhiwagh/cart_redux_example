const cartReduser = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingProductIndex] = {
          ...updatedState[existingProductIndex],
          count:
            updatedState[existingProductIndex].num_of_stock >
              updatedState[existingProductIndex].count ?
            updatedState[existingProductIndex].count + 1 : updatedState[existingProductIndex].count,
        };
        return updatedState;
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    case "REMOVE_PRODUCT":
      if (state && action.payload >= 0 && action.payload < state.length) {
        return state.filter((_, index) => index !== action.payload);
      }
      return state;
    case "REMOVE_PRODUCT_QUANTITY":
      const isProductInCart = state.findIndex(
        (item) => item.id === action.payload.id && item.count !== 1
      );
      if (isProductInCart !== -1) {
        const updatedState = [...state];
        updatedState[isProductInCart] = {
          ...updatedState[isProductInCart],
          count: updatedState[isProductInCart].count - 1,
        };
        return updatedState;
      } else {
        if (
          state &&
          action.payload.id >= 0 &&
          action.payload.id < state.length
        ) {
          return state.filter((_, index) => index !== action.payload);
        }
        return state;
      }
    default:
      return state;
  }
};

export default cartReduser;
