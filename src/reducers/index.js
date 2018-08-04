import { combineReducers } from "redux";
import BooksReducer from "./books";
import CartsReducer from "./cart";
import QuantityReducer from "./quantity";
import ButtonsReducer from "./button";
import UserReducer from "./user";
import { reducer as formReducer } from "redux-form";
import { USER_LOGOUT } from "../actions/user";

const appReducer = combineReducers({
  bookList: BooksReducer,
  cartItems: CartsReducer,
  bookQuantity: QuantityReducer,
  isButtonDisabled: ButtonsReducer,
  form: formReducer,
  user: UserReducer
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
