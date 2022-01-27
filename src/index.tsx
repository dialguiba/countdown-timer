import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { CountdownTimerApp } from "./CountdownTimerApp";

import "./styles/base/_base.scss";
import "./styles/base/_settings.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CountdownTimerApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
