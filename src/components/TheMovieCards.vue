
<script setup>

import axios from "axios"
import { ref, watch } from "vue"
import TheMovieCard from "./TheMovieCard.vue";

const limit = 4

const baseUrl = `http://localhost:8080/api/characters?limit=${limit}}`
const characters = ref(null)
const page = ref(0)

const response = await axios.get(baseUrl)
      characters.value = response.data


watch(page , async() => {
    const response = await axios.get(baseUrl + `&offset=${page.value * limit}`)
          characters.value = response.data
})

</script>


<template>
    <div class="container">
        <div class="cards">
            <TheMovieCard v-for="character in characters" :key="character.char_id" :character="character">
                <div class="jobs">
                    <p v-for="(job, index) in character.occupation" :key="index">
                        {{ job }} <span v-if="index < character.occupation.length - 1">,&nbsp</span>
                    </p>
                </div>
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
    background-color: rgb(41, 41, 41);
    padding: 30px;
    min-height: 100vh;
}

.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: 700px
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

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
} 
</style>