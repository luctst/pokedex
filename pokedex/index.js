import React from "react";
import {render} from "react-dom";
import App from "./container/app";
const app = document.querySelector("#root");
import "./assets/scss/main.scss";
render(<App/>, app);