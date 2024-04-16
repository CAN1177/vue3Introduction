<template>
  <div>
    <!-- <waterFall /> -->
    <!-- <transitionVue />
    <A /> -->

    <div>兄弟组件传参</div>
    <A  />
    <B />
  </div>
  
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
// import Demo from './components/Demo.vue'
// import PassProps from './components/PassProps.vue'

// import waterFall from './components/waterfall.vue'
// import A from './components/provideInject/A.vue'

// import transitionVue from './components/transition-vue.vue'


// import { ref } from 'vue';
import A from './components/sibling/A.vue'
import B from './components/sibling/B.vue'


// import { provide } from 'vue'

// provide('name', 'zs')

// import { provideInject } from './components/provideInject/provideInject'

// import { ref } from 'vue'

// const count = ref(0)

// import { refs } from './components/refs/refs'

// import { reactive } from 'vue'

// let info = ref('21')

// const getInfo = (val: string) => {
//   console.log('getInfo')
//   info.value = val
// }


</script>

<style scoped>

</style>
