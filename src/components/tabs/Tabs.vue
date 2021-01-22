<template>
    <div class="tabs">
		<div class="header">
            <button
                v-for="item in changeableContent"
                :key="item.heading"
                @click="changeContent(item.heading)"
                > {{ item.heading }} </button>
		</div>
		<TabContent content="wrapper.find(selektor) letar upp ett HTML element med hjälp av en CSS-selektor"></TabContent>
    </div>
</template>

<script>
import TabContent from './TabContent';
export default {
    props: {},
	components: { TabContent },
    data: () => ({
        selectedContent: '',
        changeableContent: [
            {
                heading: 'find()',
                content: 'wrapper.find(selektor) letar upp ett HTML element med hjälp av en CSS-selektor'
            },
            {
                heading: 'exists()',
                content: 'wrapper.exists() returnerar true om wrappern innehåller ett element'
            },
            {
                heading: 'element',
                content: 'wrapper.element är DOM elementet som wrappern representerar'
            }
        ] // changeableContent
    }),
    methods: {
        changeContent(heading) {

        }
    }
}
</script>

<style scoped>
.component {

}
</style>
