import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { reducer } from "./services/reducers";
import { Provider } from "react-redux";
import Counter from "./clases/AppClases";
import { store } from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <Counter />
  </Provider>
);

reportWebVitals();
