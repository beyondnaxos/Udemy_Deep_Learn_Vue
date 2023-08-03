<script setup >
import { RouterLink } from 'vue-router'

</script>

<template>
    <div>
        <RouterLink active-class="active" class='link' to="/">Quiz</RouterLink>    
        <RouterLink active-class="active"  class='link' to="/Note">Note</RouterLink>
        <RouterLink active-class="active"  class='link' to="/Counter">Counter</RouterLink>  
    
    </div>
</template>

<style scoped>  
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100vw;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
}
.link {
    text-decoration: none;
    color: black;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.link:hover {
    color: #f1356d;
}

.active {
    color: #f1356d;
}
</style>
