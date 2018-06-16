import { ADD_TO_CART } from "../actions";

const initialState = {
  data: []
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    //array of ids
    default:
      return state;
  }
}
