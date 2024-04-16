<!--
 * new page
 * @author: 21silva
 * @since: 2024-04-16
 * B.vue
-->
<template>
	<div>

		B组件
	</div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

// import { ref, reactive } from 'vue'

// defineProps<{ info: string }>()

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('on-click', (data: string) => {
	console.log('B组件', data)
})



</script>

<style scoped></style>
