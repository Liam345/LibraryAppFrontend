import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { StripeProvider } from "react-stripe-elements";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_ldBWnxC07s8qs3tOGylPcZq8">
      <App />
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);
