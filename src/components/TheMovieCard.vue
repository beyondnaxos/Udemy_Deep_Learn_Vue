
<script setup>

import axios from "axios"
// Allow to fix the number of characters to display
const limit = "limit=4"
// Allow to skip the first 4 characters
const offset = "offset=4"
const baseUrl = `http://localhost:8080/api/characters?${limit}&${offset}`

const response = await axios.get(baseUrl)
console.log(response.data)

</script>


<template>
    <div>
        <h1>Breaking Bad Card</h1>
    </div>
</template>