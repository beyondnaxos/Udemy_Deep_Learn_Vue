<script setup>
import {ref} from 'vue'

const count = ref(0)

const addToCount = () => {
  count.value = count.value + 1
}

const substractToCount = () => {
  count.value = count.value -1
}

</script>

<template>
 <main>
  <div class="counter-group">
    <h4>The current count is ...</h4>
    <h1 >{{ count }}</h1>
    <div class="btn-group">
      <button @click="substractToCount">-</button>
      <button @click="addToCount">+</button>
    </div>
  </div>
 </main>
</template>

<style scoped>

main  {

  display: flex;
  justify-content: center;

}

.counter-group {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;
}

h4 {
  font-size: 30px;
  margin: 0;
}

.btn-group {
  width: 100%;
  display: flex;
  column-gap: 10px;
}

button {
  width: 50%;
  height: 50px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  border-radius: 50px;
}


</style>
