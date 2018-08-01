import { combineReducers } from "redux";
import BooksReducer from "./books";
import CartsReducer from "./cart";
import QuantityReducer from "./quantity";
//import QuantityPriceReducer from "./quantityprice";
import ButtonsReducer from "./button";
import LoginReducer from "./login";
import UserReducer from "./user";
import { reducer as formReducer } from "redux-form";
import { USER_LOGOUT } from "../actions/user";

//import IsAddedReducer from "./isAdded";

const appReducer = combineReducers({
  bookList: BooksReducer,
  cartItems: CartsReducer,
  bookQuantity: QuantityReducer,
  //bookQuantityPrice: QuantityPriceReducer,
  isButtonDisabled: ButtonsReducer,
  form: formReducer,
  isLoggedIn: LoginReducer,
  user: UserReducer

  //isAdded: IsAddedReducer
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
