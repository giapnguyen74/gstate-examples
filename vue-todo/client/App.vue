<template>
<div>
	<AddTodo :state="state" />
	<TodoList :state="state"/>
  	<Footer :state="state"  />
</div>

</template>
<script>
import Footer from "./Footer.vue";
import TodoList from "./TodoList.vue";
import AddTodo from "./AddTodo.vue";
export default {
	props: ["state"],
	components: {
		Footer,
		TodoList,
		AddTodo
	}
};
</script>
