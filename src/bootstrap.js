import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  console.log("DOM ready, looking for #root element");
  const container = document.querySelector("#root");
  console.log("Container found:", container);
  
  if (!container) {
    console.error("No #root element found in DOM");
    return;
  }
  
  // Set the app element for react-modal accessibility
  ReactModal.setAppElement(container);
  
  const root = createRoot(container);
  root.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

document.addEventListener("DOMContentLoaded", main);
