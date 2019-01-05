<template>
    <div>
        <h2>test2</h2>
        <input type="text" v-sync="value"/>
        <input type="text" v-model="value"/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value:200
            }
        }
    }
</script>

<style scoped>

</style>