<template>
    <div>
        <div class="option"> Choklad </div>
        <div class="option"> Banan </div>
        <div class="option"> Vanilj </div>
        <div class="option"> Ankägg </div>
        <div class="option"> Päron </div>
    </div>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style scoped>
.option {
    width: 16em;
    border: 1px solid teal;
    border-radius: 0.3em;
    padding: 0.3em;
    margin: 0.1em auto;
}
.option:hover {
    cursor: pointer;
}
.selected {
    background-color: #8FEDEF;
}
</style>
