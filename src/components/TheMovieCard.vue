
<script setup>

const {character} = defineProps(['character'])


</script>

<template>
    <n-card >
        <template #cover>
            <img :src="character.img">
        </template>

        <h3>{{character.name}}</h3>
       
        <slot>

        </slot>

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


</style>