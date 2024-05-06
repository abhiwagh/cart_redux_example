import { useDispatch, useSelector } from "react-redux";
import { cartActions, decQuantity, removeCartProduct } from "../redux/action";

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    cart.forEach(product => {
        total += product.count * product.price;
    });
    return total;
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart Items</h3>
      {cart && cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="product_container">
                <div className="product_info">
                  <h5 style={{ margin: 0 }}>{product.name}</h5>
                  <p style={{ margin: 0 }} className="product_quantity">
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(decQuantity(product));
                      }}
                    >
                      -
                    </span>
                    {product.count}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(cartActions(product));
                      }}
                    >
                      +
                    </span>
                  </p>
                </div>
                {product.stock && (
                  <button
                    className="add_to_cart_btn"
                    onClick={() => dispatch(removeCartProduct(index))}
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="product_info" style={{ margin: "0 20px" }}>
            <h4>Total :</h4>
            <h4>{getTotal()}rs.</h4>
          </div>
        </div>
      ) : (
        <p>No Items in your Cart</p>
      )}
    </div>
  );
};

export default Cart;
