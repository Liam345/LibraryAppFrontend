import { REQUEST_BOOKS } from "../actions";

const initialState = {
  data: []
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        data: action.payload.body
      };
    default:
      return state;
  }
}

// export default function() {
//   return [
//     {
//       id: 1,
//       title: "Tribe of Mentors",
//       author: "Tim Ferriss"
//     },
//     {
//       id: 2,
//       title: "Purple Cow",
//       author: "Seth Godin"
//     },
//     {
//       id: 3,
//       title: "Atlas Shrugged",
//       author: "Ayn Rand"
//     }
//   ];
// }
