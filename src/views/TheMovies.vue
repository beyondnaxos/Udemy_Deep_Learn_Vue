<script setup>
import TheMovieCards from '@/components/TheMovieCards.vue';
import TheRickCards from '@/components/TheRickCards.vue';
import axios from "axios"
const baseUrl = "http://localhost:8080/api/characters"







</script>

<template>
    <div class="hero">
        Hello Movies !
    </div>
    <div class="container">
        <div class="cards">
            <Suspense>
                <template #default>
                    <TheMovieCards />
                </template>
                <template #fallback>
                    <div class="">
                        <p>Loading </p>
                    </div>
                </template>
            </Suspense>
            <TheRickCards />
            
            
        </div>
    </div>  
</template>

<style scoped>
/* Hero Styles */
.hero {
    height : 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 100px;
    font-weight: bold;
}
.hero p {
    cursor: pointer;
}



/* Rick and Morty */
/*
.container {
    background-color: rgb(48, 47, 47);
    padding: 30px
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}

/* Card Styles */
/*
.n-card {
    width: 200px;
    margin:10px 20px;

}
.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
} */
</style>