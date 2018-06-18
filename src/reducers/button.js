import { DISABLE_BUTTON } from "../actions";

const initialState = {
  //data: []
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BUTTON:
      return { ...state, [action.payload]: true };
    //array of ids
    default:
      return state;
  }
}
