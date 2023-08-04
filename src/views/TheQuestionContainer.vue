<script setup> 
import {useRoute} from 'vue-router'
import { ref , watch} from 'vue'
import quizes from '@/data/quizes.json'
import TheQuizHeader from '@/components/TheQuizHeader.vue'
import TheQuestion from '@/components/TheQuestion.vue'

const route = useRoute()
const quizId = parseInt(route.params.id) 

const quiz = quizes.find(q => q.id === quizId )

const currentQuestionIndex = ref(0)

const questionStatus = ref(`${currentQuestionIndex.value + 1} / ${quiz.questions.length}`)


watch(() => currentQuestionIndex.value , () => {
    questionStatus.value = `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
})

</script>

<template>
    <div>
        <TheQuizHeader :questionStatus="questionStatus" />
        <div class="container">
            <TheQuestion :question="quiz.questions[currentQuestionIndex]" />
        </div>
    </div>
    <button @click="currentQuestionIndex++">NEXT</button>
</template>

<style scoped>
.container {
    margin: 20px;
}
</style>