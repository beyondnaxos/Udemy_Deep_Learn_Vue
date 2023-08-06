
<script setup>

const {character} = defineProps(['character'])


</script>

<template>
    <n-card >
        <template #cover>
            <img :src="character.img">
        </template>

        <h3>{{character.name}}</h3>
        <div class="jobs">
            <p 
            v-for="(job, index) in character.occupation" 
            :key="index">
                {{ job }} <span v-if="index < character.occupation.length -1 ">,&nbsp</span>
            </p>
        </div>
    </n-card>
</template>

<style scoped>
.n-card {
    width: 200px;
    margin: 10px 20px;

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
} 
</style>