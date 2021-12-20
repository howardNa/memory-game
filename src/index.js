import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import gameReducer from "./redux/gameSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

