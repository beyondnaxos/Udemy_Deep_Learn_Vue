<script setup>
import { RouterView} from 'vue-router'
import TheNav from './components/TheNav.vue';



</script>

<template>
  <main>
    <TheNav />

    <RouterView />
     

  </main>

</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  
}

</style>
