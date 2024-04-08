<template>
  <div>
    <waterFall />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" />
  <!-- <Demo /> -->
  <!-- <br />
  <PassProps :num="20" :tag= "label" @update="getChildValue"  ref="childRef" /> -->
 
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// // import Demo from './components/Demo.vue'
// import PassProps from './components/PassProps.vue'

import waterFall from './components/waterfall.vue'

// let label = 'w'


// const getChildValue = (value: number) => {
//   console.log("num is",  value)
// }


//注意这儿的typeof里面放的是组件名字(PassProps)不是ref的名字 ref的名字对应开头的变量名(refMenu)
// const childRef = ref<InstanceType<typeof PassProps>>()
// console.log("%c Line:17 🧀 childRef", "color:#b03734", childRef.value?.open());
// const res = childRef.value?.name
// console.log("%c Line:19 🍋 res", "color:#ea7e5c", res);

// onMounted(() => {
//   console.log(childRef.value?.open(), childRef.value?.name, "%c Line:22 ");
// });

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
