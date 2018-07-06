import request from "superagent";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INIT_QUANTITY = "INIT_QUANTITY";
export const INIT_QUANTITY_PRICE = "INIT_QUANTITY_PRICE";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_QUANTITY_PRICE = "UPDATE_QUANTITY_PRICE";
export const DISABLE_BUTTON = "DISABLE_BUTTON";
export const ENABLE_BUTTON = "ENABLE_BUTTON";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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

export function removeFromCart(bookId) {
  return {
    type: REMOVE_FROM_CART,
    payload: bookId
  };
}

export function initQuantity(id) {
  return {
    type: INIT_QUANTITY,
    payload: id
  };
}

export function updateQuantity(id, qty) {
  return {
    type: UPDATE_QUANTITY,
    payload: { id: id, qty: qty }
  };
}

export function initQuantityPrice(id, price) {
  return {
    type: INIT_QUANTITY_PRICE,
    payload: { id: id, price: price }
  };
}

export function updateQuantityPrice(id, qty, price) {
  return {
    type: UPDATE_QUANTITY_PRICE,
    payload: { id: id, qty: qty, price: price }
  };
}

export function disableButton(id) {
  return {
    type: DISABLE_BUTTON,
    payload: id
  };
}

export function enableButton(id) {
  return {
    type: ENABLE_BUTTON,
    payload: id
  };
}

//   return {
//     type: REQUEST_BOOKS,
//     payload: fetch("/api/books", {
//       cache: "reload",
//       method: "GET"
//     }).then(response => response.json())
//   };
