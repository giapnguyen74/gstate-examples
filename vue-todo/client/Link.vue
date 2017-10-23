<template>
	<span>
		<span v-if="active">
			<slot />
		</span>
		<a v-if="!active" href="#" @click.prevent="onClick">
			<slot />
		</a>
	</span>
</template>
<<script>
export default {
	props: ["active", "onClick"]
}
</script>
