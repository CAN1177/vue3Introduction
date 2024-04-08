<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

// const arr = ["1", "2", "3"];
</script>

<template>
  <div class="mj-test">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <!-- <div v-for="(item, index) in arr" :key="index">{{ item }}</div> -->
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
@include b(test) {
  button {
    color: pink;
  }
}
</style>
