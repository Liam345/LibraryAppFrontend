import { INIT_QUANTITY_PRICE } from "../actions";
import { UPDATE_QUANTITY_PRICE } from "../actions";

const initialState = {
  //data: []
};

export default function quantity(state = initialState, action) {
  switch (action.type) {
    case INIT_QUANTITY_PRICE:
      return [
        ...state,
        {
          id: action.payload.id,
          qty: 1,
          price: action.payload.price
        }
      ];
    case UPDATE_QUANTITY_PRICE:
      return [
        ...state,
        {
          id: action.payload.id,
          qty: action.payload.qty,
          price: action.payload.price
        }
      ];
    default:
      return state;
  }
}
