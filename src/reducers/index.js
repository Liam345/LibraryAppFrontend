import { combineReducers } from "redux";
import BooksReducer from "./books";
import CartsReducer from "./cart";
import IsAddedReducer from "./isAdded";

const rootReducer = combineReducers({
  bookList: BooksReducer,
  cartItems: CartsReducer,
  isAdded: IsAddedReducer
});

export default rootReducer;
