import { useDispatch } from "react-redux";
import { cartActions } from "../redux/action";

const AddToCart = () => {
  const dispatch = useDispatch();
  const Products = [
    {
      id: 1,
      name: "Pencil",
      price: 10,
      stock: true,
      num_of_stock: 30,
      count: 0,
    },
    { id: 2, name: "Pen", price: 20, stock: true, num_of_stock: 20, count: 0 },
    {
      id: 3,
      name: "Eraser",
      price: 5,
      stock: true,
      num_of_stock: 16,
      count: 0,
    },
    {
      id: 4,
      name: "Sharpner",
      price: 5,
      stock: true,
      num_of_stock: 35,
      count: 0,
    },
  ];
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Products</h3>
      <div>
        <ul>
          {Products.map((product) => (
            <li key={product.id} className="product_container">
              <div className="product_info">
                <h5 style={{ margin: 0 }}>{product.name}</h5>
                <h5 style={{ margin: 0 }}>{product.price}rs.</h5>
              </div>
              {product.stock ? (
                <h6 style={{ margin: 0, paddingBottom: "10px" }}>
                  Number of Stock : {product.num_of_stock}
                </h6>
              ) : (
                <h6 style={{ margin: 0, paddingBottom: "10px", color: "red" }}>
                  Out of Stock!
                </h6>
              )}
              {product.stock && (
                <button
                  className="add_to_cart_btn"
                  onClick={() => {
                    dispatch(cartActions(product));
                  }}
                >
                  Add to Cart
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const mapDispatchProps = (dispatch) => ({
//   addProduct: (product) => dispatch(cartActions(product)),
// });

// export default connect(null, mapDispatchProps)(AddToCart);
export default AddToCart;
