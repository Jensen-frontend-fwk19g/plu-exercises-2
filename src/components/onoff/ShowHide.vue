<template>
    <div class="">
        <button @click="toggleVisible"> Visa/dölj alternativ </button>
        <p class="content" v-show="isVisible">
            Ett mycket spännande men något långrandigt innehåll, som man kan vilja dölja så att man inte ser det hela tiden.
        </p>
    </div>
</template>

<script>
export default {
    data: () => ({
        isVisible: true
    }),
    methods: {
        toggleVisible() {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<style scoped>

</style>
