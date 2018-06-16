import request from "superagent";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const ADD_TO_CART = "ADD_TO_CART";

export function requestBooks() {
  const data = request.get("/api/books");
  return {
    type: REQUEST_BOOKS,
    payload: data
  };
}

export function addToCart(book) {
  return {
    type: ADD_TO_CART,
    payload: book
  };
}

//   return {
//     type: REQUEST_BOOKS,
//     payload: fetch("/api/books", {
//       cache: "reload",
//       method: "GET"
//     }).then(response => response.json())
//   };
