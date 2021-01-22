<template>
    <section>
        <button @click="handleClick"> Be entertained </button>
		<p>
			{{ jokeText }}
		</p>
    </section>
</template>

<script>
export default {
    data: () => ({
        jokeText: 'Click the button to get a new joke!'
    }),
    methods: {
        async handleClick() {
            try {
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const json = await response.json();
                this.jokeText = json.value;
            }
            catch {
                this.jokeText = 'Could not fetch joke, please try again.';
            }
        }
    }
}
</script>

<style scoped>

</style>
