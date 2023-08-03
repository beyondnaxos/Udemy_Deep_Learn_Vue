<script setup>
 import {ref} from 'vue'
import TheCard from '@/components/TheCard.vue'

 const showModal = ref(false)
 const newNote = ref('')
 const notes = ref([])
 const errorMessage = ref('')

 const toggleModal = () => {
   showModal.value = !showModal.value
 }

function getRandomColor () {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
    if ( newNote.value.length < 10) {
        return errorMessage.value 
        = 'Note must be at least 10 characters long'
    }
    notes.value.push({
        id : Math.floor(Math.random() * 1000000 ),
        text: newNote.value,
        date: new Date().toLocaleDateString(),
        backgroundColor: getRandomColor(),
    })

    newNote.value = ''
    toggleModal()   
    errorMessage.value = ''
}

</script>

<template>

    <div v-if='showModal === true' class="overlay">
        <div class="modal">
            <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
            <p v-show="errorMessage" class="error-message">{{errorMessage}}</p> 
            <button @click="addNote">Add Note</button>
            <button @click="toggleModal" class="close">Close</button>
        </div>
    </div>
    <div class="container">
        <header>
            <h1>Notes</h1>
            <button @click="toggleModal">+</button>
        </header> 
        <div class="cards-container">
            <TheCard v-for="note in notes" :key="note.id" :note="note" /> 
        </div>
    </div>

</template>


<style scoped>
.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
    
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-weight: bold;
    margin: 0;
    margin-bottom: 25px;
    font-size: 75px;
    margin-left: 20px;
}

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    color: white;
    font-size: 20px;
    border-radius: 100%;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
}



.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: rgb(58, 58, 58);
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
}

.modal .close {
    background-color: #918f8f;
}

.error-message {
    color: red;
    font-weight: bold;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
}
</style>