import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/App.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
