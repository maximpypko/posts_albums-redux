import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './style.css';
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
  rootElement
);