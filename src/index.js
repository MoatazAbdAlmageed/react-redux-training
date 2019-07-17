import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeSwitcher } from "react-bootstrap-theme-switcher";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import App from "./components/App.component";
import "bootstrap/dist/css/bootstrap.css";

render(
  <Provider store={store}>
    <ThemeSwitcher
      themePath="/themes"
      defaultTheme="yeti"
      storeThemeKey="theme"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeSwitcher>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
