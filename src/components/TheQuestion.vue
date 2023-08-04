<script setup>

</script>


<template>
  
        <div class="question-container">
            <h1 class="question">What is bl blabnla bla ?</h1>
        </div>
        <div class="options-container">
            <div class="option">
                <p class="option-label">A</p>
                <div class="option-value">
                    <p>Res</p>
                </div>
            </div>
        </div>
   
</template>

<style scoped>

.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    
}

.option-label {
    width: 50px;
    height: 50px;
    background-color: bisque;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: rgb(244,239,239);
    width: 100%;
    font-size: 30px;
    padding: 0 ;
    padding-left: 20px;
    display: flex;
    align-items: center;
}
</style>