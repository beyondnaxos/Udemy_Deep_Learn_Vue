<script setup> 
import {useRoute} from 'vue-router'
import { ref , watch, computed} from 'vue'
import quizes from '@/data/quizes.json'
import TheQuizHeader from '@/components/TheQuizHeader.vue'
import TheQuestion from '@/components/TheQuestion.vue'

// handle the route params
const route = useRoute()
const quizId = parseInt(route.params.id) 

// get the quiz from the quizes array       
const quiz = quizes.find(q => q.id === quizId )

// handle the current question index
const currentQuestionIndex = ref(0)

// handle the question status with computed
const questionStatus = computed(() =>  `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%` )


 
</script>

<template>
    <div>
        <TheQuizHeader 
        :questionStatus="questionStatus"  
        :barPercentage="barPercentage"
        />
            <div class="container">
                <TheQuestion 
                :question="quiz.questions[currentQuestionIndex]" 
                />
            </div>
    </div>
    <button @click="currentQuestionIndex++">NEXT</button>
</template>

<style scoped>
.container {
    margin: 20px;
}
</style>