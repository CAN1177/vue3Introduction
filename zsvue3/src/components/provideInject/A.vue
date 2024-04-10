<template>
	<div class="App">
			<button>我是App</button>
			<B></B>
	</div>
</template>
	
<script setup lang='ts'>
import { provide, ref } from 'vue'
import B from './B.vue'
let flag = ref<number>(1)
provide('flag', flag)
</script>
	
<style>
.App {
	background: blue;
	color: #fff;
}
</style>