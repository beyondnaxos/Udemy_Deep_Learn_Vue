<script setup>

import q from '@/data/quizes.json'
import { ref, watch } from 'vue'
import TheQuizCard from '@/components/TheQuizCard.vue'

// handle quizes and search
const quizes = ref(q)
const search = ref('')

//watch permet de surveiller une variable et de faire une action quand elle change
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name
    .toLowerCase()
    .includes(search.value.toLowerCase())
  )
})

const beforeEnter = () => {
    console.log('beforeEnter')      
}

const enter = () => {
    console.log('enter')      
}

const afterEnter = () => {
    console.log('afterEnter')      
}

</script>

<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input 
                v-model.trim="search" 
                type="text" 
                placeholder="Search..." 
            />
        </header>
        <div class="options-container">
            <TransitionGroup 
                name="card" 
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <TheQuizCard 
                    v-for="quiz in quizes" 
                    :key="quiz.id" 
                    :quiz="quiz" 
                />
            </TransitionGroup>
        </div>
    </div>
</template>


<style scoped>
.container {
    max-width: 1000px; 
    margin: 0 auto;
    padding: 50px;
}

header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

/* card */
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}

.card img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h2 {
    font-weight: bold;
}

.card-enter-from {
    transform: translateY(-50px);
    opacity: 0;
}

.card-enter-to {
    transform: translateY(0);
    opacity: 1; 
}

.card-enter-active { 
    transition: all 0.3s ease;
}
</style>
