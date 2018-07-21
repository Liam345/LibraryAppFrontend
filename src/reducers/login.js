import { LOG_IN } from "../actions";
import { LOG_OUT } from "../actions";

const initialState = false;

export default function button(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, isLoggedIn: true };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
