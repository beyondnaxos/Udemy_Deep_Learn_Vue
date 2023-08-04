<script setup>

const {note} = defineProps(['note'])    

</script>

<template lang="">
    <div 
            :key="note.id" 
            class="card"
            :style="{backgroundColor: note.backgroundColor}"    
            >
                <p class="main-text">{{note.text}}</p>
                <p class="date">{{note.date}}</p>
            </div>
</template>

<style scoped>
.card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    margin-bottom: 20px;
    font-family: 'roboto';
}

.date {
    font-size: 12px;
    font-weight: bold;
}
</style>