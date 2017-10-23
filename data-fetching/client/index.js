import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import page from "page";
import GState from "gstate";

import { stories, NotFound } from "./Pages";
import { fetchStories } from "./data3";

const state = new GState();
if (window._INITIAL_GSTATE_) {
	const initial = JSON.parse(decodeURIComponent(window._INITIAL_GSTATE_));
	if (initial) {
		window._INITIAL_GSTATE_ = true;
		state.load(initial);
	} else {
		window._INITIAL_GSTATE_ = false;
	}
}

page("/", () => {
	const type = "topstories";
	const data = fetchStories(state, type);
	browserRender(stories(type), { state, data });
});

page("/new", () => {
	const type = "newstories";
	const data = window._INITIAL_GSTATE_ ? null : fetchStories(state, type);
	window._INITIAL_GSTATE_ = false;
	browserRender(stories(type), { state, data });
});

page("/show", () => {
	const type = "showstories";
	const data = fetchStories(state, type);
	browserRender(stories(type), { state, data });
});

page("/ask", () => {
	const type = "askstories";
	const data = fetchStories(state, type);
	browserRender(stories(type), { state, data });
});
page("*", () => {
	browserRender(NotFound);
});

page({ click: false });

function browserRender(View, props = {}) {
	const rootEl = document.getElementById("root");
	if (props.data && props.data.then) {
		props.data
			.then()
			.then(
				() =>
					ReactDOM.render(
						<View {...props} loading={false} />,
						rootEl
					),
				error =>
					ReactDOM.render(<View {...props} loading={error} />, rootEl)
			);
		ReactDOM.render(<View {...props} loading={true} />, rootEl);
	} else {
		ReactDOM.render(<View {...props} />, rootEl);
	}
}
