export const SAVE_USER_DETAILS = "SAVE_USER_DETAILS";
export const DELETE_USER_DETAILS = "DELETE_USER_DETAILS";
export const USER_LOGOUT = "USER_LOGOUT";

export function saveUserName(userData) {
  return {
    type: SAVE_USER_DETAILS,
    payload: userData
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  };
}

// export function deleteUserName() {
//   return {
//     type: DELETE_USER_DETAILS
//   };
// }