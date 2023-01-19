import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
