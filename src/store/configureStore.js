import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import ReduxPromise from "redux-promise";

export default function configureStore() {
  let initState = {};
  const persistedState = localStorage.getItem("reduxState");

  if (persistedState) {
    initState = JSON.parse(persistedState);
  }

  const store = createStore(
    rootReducer,
    initState,
    compose(
      applyMiddleware(ReduxPromise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  //add lodash throttle for performance optimization
  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
