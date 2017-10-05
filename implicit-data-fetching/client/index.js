import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import page from "page";
import GState from "../../../gstate/src";

import { stories, NotFound } from "./Pages";
import { fetchStories } from "./data1";
const state = new GState();

state.set({
	pages: {}
});

state.reader("pages", function(node, paths = []) {
	if (paths.length > 0) {
		const notLoaded = node[paths[0]] === undefined;
		if (notLoaded) {
			state.set({ loading: true });
			fetchStories(state, paths[0]).then(
				() => state.set({ loading: false }),
				err => state.set({ loading: err })
			);
		}
	}
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
