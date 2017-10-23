<<template>
  <p>
		Show:{{" "}}
		<FilterLink :state="state" filter="SHOW_ALL">
			All
		</FilterLink>
		{{", "}}
		<FilterLink :state="state" filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{{", "}}
		<FilterLink :state="state" filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</p>
</template>
<<script>
import FilterLink from "./FilterLink.vue"
export default {
  props: ["state"],
  
  components: {
	  FilterLink
  }
}
</script>
