<script setup>

import q from '@/data/quizes.json'
import { ref, watch } from 'vue'
import TheQuizCard from '@/components/TheQuizCard.vue'
import {gsap} from 'gsap'

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

const beforeEnter = (el) => {
    // card-enter-from
    el.style.opacity = 0
    el.style.transform = 'translateY(-100px)'     
}

const enter = (el) => {
    // card-enter-to
    gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.42 ,
        delay: el.dataset.index * 0.29,
    })  
    
    // card-enter-active

}

const afterEnter = () => {
     
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
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <TheQuizCard 
                    v-for="(quiz, index) in quizes" 
                    :key="quiz.id" 
                    :quiz="quiz" 
                    :data-index="index"
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

</style>
