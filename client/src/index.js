import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import configStore from "./store/configStore";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

const store = configStore();

if (process.env.NODE_ENV !== "production") {
  Set.prototype.toJSON = function() {
    var obj = {};
    this.forEach((value, key) => (obj[key] = value));
    return obj;
  };
}

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/"><App /></Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
