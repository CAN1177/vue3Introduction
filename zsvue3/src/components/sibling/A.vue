<!--
 * new page
 * @author: 21silva
 * @since: 2024-04-16
 * A.vue
-->
<template>
  <div>
    <div>A组件</div>
    <button @click="emitHandler">启动</button>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance();

const emitHandler = () => {
  instance?.proxy?.$Bus.emit("on-click", "mitt");
};
</script>

<style scoped></style>

