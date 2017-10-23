<template>
  <li @click="onClick" :style="{textDecoration: textDecoration}">
		{{text}}
  </li>
</template>
<<script>
export default {	
	props: ["onClick", "completed", "text"],
	
	computed: {
		textDecoration(){
			
			return this.completed ? "line-through" : "none"
		}
	}
  
}
</script>
