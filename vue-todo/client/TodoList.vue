<template>
	<ul>
		<Todo v-for="todo in todos" :key="todo.id" :completed="todo.completed" :text="todo.text" :onClick="onTodoClick(todo.id)" />
	</ul>
</template>
<<script>
import { toggleTodo } from "./actions";
import Todo from "./Todo.vue"

const getVisibleTodos = (todos = [], filter = "SHOW_ALL") => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed);
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed);
	}
};

export default {
	props: ["state"],
	gstate: {
		query: {
			todos: {
				_: 1
			},
			filter: 1
		},
		data: {
		}
	},
	computed: {
		todos(){
			const data = this.$query.data;
			return getVisibleTodos(data.todos, data.filter)
		},
		
	},
	methods: {
		onTodoClick(id){
			return () => {
				toggleTodo(this.state, id);
			}
		}
	},
	components: {
		Todo
	}
  
}
</script>

