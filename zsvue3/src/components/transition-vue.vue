<!--
 * new page
 * @author: 21silva
 * @since: 2024-04-09
 * tarnsition-vue.vue
-->
<template>
  <button @click="show = !show">触发动画</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const show = ref(true);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
