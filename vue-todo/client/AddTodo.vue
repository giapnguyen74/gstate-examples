<template>
	<div>
			<form @submit.prevent="onSubmit">
				<input ref="input" />
				<button type="submit">Add Todo</button>
			</form>
		</div>
</template>
<script>
import { addTodo } from "./actions";
export default {
	props: ["state"],
	methods: {
		onSubmit() {
			const input = this.$refs.input;

			if (!input.value.trim()) {
				return;
			}
			addTodo(this.state, input.value);
			input.value = "";
		}
	}
};
</script>
