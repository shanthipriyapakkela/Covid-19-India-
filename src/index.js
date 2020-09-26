import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Reducer from "./Store/reducer";

const store = createStore(Reducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
