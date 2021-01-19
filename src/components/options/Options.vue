<template>
    <div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 0 }"
            @click="select(0)"> Choklad </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 1 }"
            @click="select(1)"> Banan </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 2 }"
            @click="select(2)"> Vanilj </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 3 }"
            @click="select(3)"> Ankägg </div>
        <div :class="{ 'option': true, 'selected': selectedIndex == 4 }"
            @click="select(4)"> Päron </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedIndex: null,
        items: ['Choklad', 'Banan', 'Vanilj', 'Ankägg', 'Päron']
    }),
    methods: {
        select(index) {
            this.selectedIndex = index;
        }
    }
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
