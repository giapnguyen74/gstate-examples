import React from "react";
import ReactDOM from "react-dom";
import SvgApp from "./SvgApp";
import "./index.css";
import GState from "gstate";

const rootEl = document.getElementById("root");
const state = new GState();
ReactDOM.render(<SvgApp state={state} />, rootEl);
