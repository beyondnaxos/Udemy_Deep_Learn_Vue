
<script setup>

import axios from "axios"
import { ref, watch } from "vue"

const baseUrl = `http://localhost:8080/api/characters?limit=4}`
const characters = ref(null)
const page = ref(0)

const response = await axios.get(baseUrl)
      characters.value = response.data


watch(page , async() => {
    const response = await axios.get(baseUrl + `&offset=${page.value * 4}`)
          characters.value = response.data
})

</script>


<template>
    <div>
        <h1>Breaking Bad Card</h1>
        <h1>{{ characters }}</h1>
        <button @click="page = page - 1">Back</button>
        <button @click="page = page + 1">Next</button>
    </div>
</template>