import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import QuoteMachine from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QuoteMachine />
  </StrictMode>,
  rootElement
);
