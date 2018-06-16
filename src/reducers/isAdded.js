import { ADD_TO_CART } from "../actions";

const initialState = {
  data: false
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: !state.data
      };
    default:
      return state;
  }
}
