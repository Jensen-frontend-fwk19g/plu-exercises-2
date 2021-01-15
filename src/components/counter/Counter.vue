<template>
	<div>
		<button @click="increase"> Öka värde </button>
		<span class="result"> {{ value }} </span>
	</div>
</template>

<script>
export default {
	data: () => ({
		value: 1
	}),
	methods: {
		increase() {
			this.value++
		}
	}
}
</script>

<style scoped>
.component {

}
</style>
