
<script setup>
import { defineProps } from 'vue'
import {RouterLink} from 'vue-router'   

const props = defineProps({
    quiz: {
        type: Object,
        required: true,
    }
})

// const {quiz} = defineProps(['quiz'])

</script>
<template>
    <RouterLink  :to="`/${quiz.id}`" class="card">
        <img :src='quiz.img' alt="">
        <div class="card-text">
            <h2>{{quiz.name}}</h2>
            <p>{{quiz.questions.length}} Questions</p>
        </div> 
     </RouterLink>
</template>


<style scoped >
    .card {
        width: 310px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px  rgba(0, 0, 0, 0.1)  ;
        margin-bottom: 35px;
        margin-right: 20px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        font-family: 'Poppins', sans-serif;
    }

    .card img {
        width: 100%;
        height:190px;
        object-fit: cover;
        margin: 0;
    }

    .card .card-text {
        padding: 0 5px;
    }

    .card .card-text h2 {
       font-weight: bold;
    }
</style>