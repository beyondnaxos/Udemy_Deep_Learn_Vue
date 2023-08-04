<script setup>
import { RouterLink } from 'vue-router';

const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  'quizQuestionLength',
  'numberOfCorrectAnswers',
]);


</script>


<template>
    <div class="result">
        <p>Your result ...</p>
        <h1>
            {{numberOfCorrectAnswers}}/{{ quizQuestionLength }}
        </h1>
        <RouterLink to="/" class="btn">Try again</RouterLink>
    </div>
</template>



<style scoped>
.result {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

h1 {
    font-size: 80px;
}
</style>