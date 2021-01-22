<template>
    <p>
        {{ content }}
    </p>
</template>

<script>
export default {
    props: {
        content: String('')
    }
}
</script>

<style scoped>
p {
    padding: 1em;
    border: 1px solid gray;
    border-radius: 1em;
}
</style>
