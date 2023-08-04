<script setup> 
import {useRoute} from 'vue-router'
import quizes from '@/data/quizes.json'
import TheQuizHeader from '@/components/TheQuizHeader.vue'
import TheQuestion from '@/components/TheQuestion.vue'

const route = useRoute()

const quiz = quizes.find(q => q.id === parseInt(route.params.id))

console.log(quiz)


</script>

<template>
    <div>
        <TheQuizHeader />
        <div class="container">
            <TheQuestion />

        </div>



    </div>
</template>

<style scoped>
.container {
    margin: 20px;
}

</style>