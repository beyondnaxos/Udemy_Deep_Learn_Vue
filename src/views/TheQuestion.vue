<script setup> 
import {useRoute} from 'vue-router'
import quizes from '@/data/quizes.json'

const route = useRoute()

const quiz = quizes.find(q => q.id === parseInt(route.params.id))

console.log(quiz)


</script>

<template>
    <div v-if="quiz">
        <h1>{{quiz.questions[0].text}}</h1>
    </div>
    <div v-else>
        <h1>Questions not found</h1>
    </div>
</template>