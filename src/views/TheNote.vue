<script setup>
 import {ref} from 'vue'

//  modal toggle
 const showModal = ref(false)
 const toggleModal = () => {
   showModal.value = !showModal.value
 }

// Modal handle note
const newNote = ref('')
const notes = ref([])

function getRandomColor () {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  
}

const addNote = () => {
    notes.value.push({
        id : Math.floor(Math.random() * 1000000 ),
        text: newNote.value,
        date: new Date().toLocaleDateString(),
        backgroundColor: getRandomColor(),
    })
    newNote.value = ''
    toggleModal()   
}
 


</script>

<template>
    <div v-if='showModal === true' class="overlay">
        <div class="modal">
            <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
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
            <div class="card">
                <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic ducimus ratione
                    nisi, esse minima?</p>
                <p class="date">12/05/2022</p>
            </div>
            <div class="card">
                <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam hic ducimus ratione
                    nisi, esse minima?</p>
                <p class="date">12/05/2022</p>
            </div>

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
</style>