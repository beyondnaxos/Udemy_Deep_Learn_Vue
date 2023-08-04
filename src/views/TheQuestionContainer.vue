<script setup> 
import {useRoute} from 'vue-router'
import { ref , watch, computed} from 'vue'
import quizes from '@/data/quizes.json'
import TheQuizHeader from '@/components/TheQuizHeader.vue'
import TheQuestion from '@/components/TheQuestion.vue'
import TheResult from '@/components/TheResult.vue'

// handle the route params
const route = useRoute()
const quizId = parseInt(route.params.id) 

// get the quiz from the quizes array       
const quiz = quizes.find(q => q.id === quizId )

// handle the current question index
const currentQuestionIndex = ref(0)

// handle correct answers
const numberOfCorrectAnswers = ref(0)   

// handle show result state
const showResult = ref(false)

// handle the question status with computed
const questionStatus = computed(() =>  `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%` )

// handle the received option   
const onOptionSelected = (isCorrect) => {
    if(isCorrect) {
        numberOfCorrectAnswers.value++
    }

    if(quiz.questions.length -1 === currentQuestionIndex.value ) {
        showResult.value = true
    } 
    currentQuestionIndex.value++
}

/** 
 * @selectOption="onOptionSelected"
 * Permet de recevoir l'option sélectionnée 
 * et de la passer à la fonction onOptionSelected
*/
 
</script>

<template>
    <div>
        <TheQuizHeader 
        :questionStatus="questionStatus"  
        :barPercentage="barPercentage"
        />
            <div class="container">
                <TheQuestion 
                    v-if="!showResult"
                    :question="quiz.questions[currentQuestionIndex]" 
                    @selectOption="onOptionSelected"
                />
                <TheResult 
                    v-else 
                    :quizQuestionLength="quiz.questions.length" 
                    :numberOfCorrectAnswers="numberOfCorrectAnswers"   
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