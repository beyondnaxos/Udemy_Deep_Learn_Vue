
<script setup>

import axios from "axios"
const baseUrl = "http://localhost:8080/api/characters"

const response = await axios.get(baseUrl)
console.log(response.data)

</script>


<template>
    <div>
        <h1>Breaking Bad Card</h1>
    </div>
</template>