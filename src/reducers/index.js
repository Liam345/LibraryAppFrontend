import { combineReducers } from "redux";
import BooksReducer from "./books";
import CartsReducer from "./cart";
import QuantityReducer from "./quantity";
import QuantityPriceReducer from "./quantityprice";
import ButtonsReducer from "./button";
import { reducer as formReducer } from "redux-form";

//import IsAddedReducer from "./isAdded";

const rootReducer = combineReducers({
  bookList: BooksReducer,
  cartItems: CartsReducer,
  bookQuantity: QuantityReducer,
  bookQuantityPrice: QuantityPriceReducer,
  isButtonDisabled: ButtonsReducer,
  form: formReducer

  //isAdded: IsAddedReducer
});

export default rootReducer;
