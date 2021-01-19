<template>
	<div class="component">
		<button class="increase" @click="increase"> Öka värde </button>
		<button class="decrease" @click="decrease"> Minska värde </button>
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
		},
		decrease() {
			this.value--
		}
	}
}
</script>

<style scoped>
.component {
	margin: 1em;
}
.component button {
	margin-right: 1em;
}
</style>
