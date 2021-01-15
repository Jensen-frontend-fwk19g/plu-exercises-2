<template>
    <main>
        <p> The toggle button: </p>
        <OnOff></OnOff>
    </main>
</template>

<script>
import OnOff from './components/onoff/OnOff.vue'

export default {
    name: 'App',
    components: {
        OnOff
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
