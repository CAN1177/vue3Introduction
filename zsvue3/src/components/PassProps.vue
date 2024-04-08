<!--
 * new page
 * @author: 21silva
 * @since: 2024-04-08
 * PassProps.vue
-->
<template>
	<div>
		<div>父组件传下来的值： {{ num }}{{ tag }}</div>
		<button @click="handelEmit">传给父组件</button>
	</div>

</template>

<script setup lang="ts">
// import { reactive } from 'vue';

//  import { ref, reactive } from 'vue'
// ts写法
const props = defineProps<{
	num: number,
	tag: string
}>()
// 非ts写法
// const props =  defineProps({
//   num: {
//     type: Number,
//     default: 100,
//   }
// });

// ts 写法
const emit = defineEmits<{
	(e: 'update', value: number): void
}>()

const handelEmit = () => { 
	emit('update', 1000)
}
// 非ts写法
// const emit = defineEmits(['update'])

console.log("%c Line:21 🍣 props", "color:#e41a6a", props);
// const list = reactive<number[]>([4, 5, 6])
 
defineExpose({
	name: "21silva",
		open: () => {
		  console.log("open");
		}
})
</script>

<style scoped></style>
