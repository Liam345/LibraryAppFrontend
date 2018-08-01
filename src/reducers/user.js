import { SAVE_USER_DETAILS } from "../actions/user";
//import { DELETE_USER_DETAILS } from "../actions/user"; //redundant after user logout

const adminEmails = ["testfour@gmail.com"];
const initialState = {
  //data: []
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_DETAILS:
      console.log("Hey here");
      console.log(action.payload);
      if (adminEmails.includes(action.payload.email)) {
        return {
          ...state,
          userData: action.payload,
          isLoggedin: true,
          isAdmin: true
        };
      } else {
        return {
          ...state,
          userData: action.payload,
          isLoggedin: true,
          isAdmin: false
        };
      }
    // case DELETE_USER_DETAILS:
    //   return {
    //     ...state,
    //     userData: {}
    //   };
    default:
      return state;
  }
}
