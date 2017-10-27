import Vue from "vue";
import App from "./App.vue";

Vue.use(require("../../bindings/vue-gstate"));

import GState from "gstate";
const state = new GState();

new Vue({
	el: "#root",
	render(h) {
		return h(App, {
			props: {
				state
			}
		});
	}
});
