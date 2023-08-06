
<script setup>

import axios from "axios"
import { ref, watch, onMounted } from "vue"
import TheMovieCard from "./TheMovieCard.vue";


const characters = ref(null)
const page = ref(0)

onMounted(async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/character")
    characters.value = response.data.results
})

watch(page , async() => {
    const response = await axios.get("https://rickandmortyapi.com/api/character" + `?page=${page.value}`)
          characters.value = response.data
})



</script>


<template>
    <div class="container">
        <div class="cards">
            <TheMovieCard v-for="character in characters" :key="character.id" :character="character">
            <p>{{character.location.name}}</p>

            </TheMovieCard>
        </div>
        <div class="button-container">
            <button @click="page--" :disabled="page == 0">&lt</button>
            <button @click="page++">&gt</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 50px;
    background-color: rgb(41, 41, 41);
    padding: 30px ;
    min-height: 100vh;
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
 
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>