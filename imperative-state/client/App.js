import React from "react";
import Form from "./Form";
const GState = require("../../../gstate");
const state = new GState();

export default function App() {
	return <Form state={state} />;
}
