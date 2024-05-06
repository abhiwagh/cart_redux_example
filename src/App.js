import logo from "./logo.svg";
import "./App.css";
import AddToCart from "./components/AddToCart";
// import { useState } from "react";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  // const [cart, setCart] = useState([]);

  // const addToCartProduct = (product) => {
  //   setCart([...cart, product]);
  // };
  return (
    <Provider store={store}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <AddToCart></AddToCart>
        <Cart></Cart>
      </div>
    </Provider>
  );
}

export default App;
