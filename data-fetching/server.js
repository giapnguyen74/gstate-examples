const { renderToString } = require("react-dom/server");
const GState = require("../../gstate/src");
const router = require("express").Router();

import React from "react";
import { stories, NotFound } from "./client/Pages";
import { fetchStories } from "./client/data2";
import page from "page";

const state = new GState();

router.get("/new", (req, res, next) => {
	page.current = "/new";
	const type = "newstories";
	fetchStories(state, type)
		.then(
			() => {
				serverRender(res, stories(type), { state, data: null });
			},
			err => {
				serverRender(res);
			}
		)
		.catch(err => next(err));
});

router.use(function(req, res, next) {
	serverRender(res);
});

function normalizeAssets(assets) {
	return Array.isArray(assets) ? assets : [assets];
}

function serverRender(res, View, props = {}) {
	const assetsByChunkName = res.locals.webpackStats.toJson()
		.assetsByChunkName;
	let content = "";
	let initial_state = encodeURIComponent(JSON.stringify(null));
	if (View) {
		content = renderToString(React.createElement(View, props));
		initial_state = encodeURIComponent(JSON.stringify(state.save()));
	}

	res.send(`
<html>
  <head>
	<title>Data Fetching Sample</title>
		${normalizeAssets(assetsByChunkName.main)
			.filter(path => path.endsWith(".css"))
			.map(path => `<link rel="stylesheet" href="${path}" />`)
			.join("\n")}
			<script>
				window._INITIAL_GSTATE_ = "${initial_state}"
			</script>
  </head>
  <body>
	<div id="root">${content}</div>
		${normalizeAssets(assetsByChunkName.main)
			.filter(path => path.endsWith(".js"))
			.map(path => `<script src="${path}"></script>`)
			.join("\n")}
  </body>
</html>		
	`);
}
module.exports = router;
