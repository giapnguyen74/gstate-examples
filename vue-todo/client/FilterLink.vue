<template>
  	<Link :active="active" :onClick="onClick">
		<slot />  
	</Link>
</template>
<script>
import { setVisibilityFilter } from "./actions";
import Link from "./Link.vue";

export default {
	props: ["state", "filter"],
	gstate: {
		query: {
			filter: 1
		},
		data: {}
	},
	computed: {
		active() {
			return this.filter == this.$query.data.filter;
		}
	},
	methods: {
		onClick() {
			return setVisibilityFilter(this.state, this.filter);
		}
	},
	components: {
		Link
	}
};
</script>
