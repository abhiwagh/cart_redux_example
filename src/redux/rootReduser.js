import { combineReducers } from "redux";
import cartReduser from "./Reducers/cartReduser";

const rootReduser = combineReducers({
  cart: cartReduser,
});

export default rootReduser;
