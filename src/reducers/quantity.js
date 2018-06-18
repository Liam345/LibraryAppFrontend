import { INIT_QUANTITY } from "../actions";
import { UPDATE_QUANTITY } from "../actions";

const initialState = {
  //data: []
};

export default function quantity(state = initialState, action) {
  switch (action.type) {
    case INIT_QUANTITY:
      return { ...state, [action.payload]: 1 };
    case UPDATE_QUANTITY:
      return { ...state, [action.payload.id]: action.payload.qty };
    default:
      return state;
  }
}

// export default function quantity(state = initialState, action) {
//   switch (action.type) {
//     case INIT_QUANTITY:
//       return [...state, { id: action.payload, qty: 1 }];
//     case UPDATE_QUANTITY:
//       return [...state, { id: action.payload.id, qty: action.payload.qty }];
//     //return [...state, { [action.payload.id]: action.payload.qty }];
//     default:
//       return state;
//   }
// }
