import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/confingStore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
