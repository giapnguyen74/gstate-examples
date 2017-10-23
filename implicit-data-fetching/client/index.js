import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import page from "page";
import GState from "gstate";

import { stories, NotFound } from "./Pages";
import { fetchStories } from "./data1";
const state = new GState();

state.set({
	pages: {}
});

state.onWatchCallback("pages", function(query) {
	state.set({ loading: true });

	const type = Object.keys(query)[0];

	fetchStories(state, type).then(
		() => state.set({ loading: false }),
		err => state.set({ loading: err })
	);
});

page("/", () => {
	const type = "topstories";
	browserRender(stories(type), { state });
});

page("/new", () => {
	const type = "newstories";
	browserRender(stories(type), { state });
});

page("/show", () => {
	const type = "showstories";
	browserRender(stories(type), { state });
});

page("/ask", () => {
	const type = "askstories";
	browserRender(stories(type), { state });
});
page("*", () => {
	browserRender(NotFound);
});

page({ click: false });

function browserRender(View, props = {}) {
	const rootEl = document.getElementById("root");
	ReactDOM.render(<View {...props} />, rootEl);
}
