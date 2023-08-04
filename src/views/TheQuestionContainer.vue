<script setup> 
import {useRoute} from 'vue-router'
import { ref } from 'vue'
import quizes from '@/data/quizes.json'
import TheQuizHeader from '@/components/TheQuizHeader.vue'
import TheQuestion from '@/components/TheQuestion.vue'

const route = useRoute()
const quizId = parseInt(route.params.id) 

const quiz = quizes.find(q => q.id === quizId )

const currentQuestionIndex = ref(0)

</script>

<template>
    <div>
        <TheQuizHeader />
        <div class="container">
            <TheQuestion  :question="quiz.questions[currentQuestionIndex]"/>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 20px;
}

</style>