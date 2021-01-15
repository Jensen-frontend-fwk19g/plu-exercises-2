<template>
    <button @click="handleToggle()">
        {{ isOn ? 'On' : 'Off' }}
    </button>
</template>

<script>
export default {
    data: () => ({
        isOn: true
    }),
    methods: {
        handleToggle() {
            this.isOn = !this.isOn
        }
    }
}
</script>

<style scoped>
.component {

}
</style>
