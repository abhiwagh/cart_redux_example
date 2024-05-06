export const cartActions = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeCartProduct = (index) => ({
  type: "REMOVE_PRODUCT",
  payload: index,
});

export const decQuantity = (product) => ({
    type: "REMOVE_PRODUCT_QUANTITY",
    payload: product,
  });
