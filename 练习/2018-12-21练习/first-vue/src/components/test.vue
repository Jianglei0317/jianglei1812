<template>
    <div>
        <h1>{{user}}</h1>
        <h2>{{users}}</h2>
        <input type="text" v-focus="text"/>
        <test2></test2>
    </div>
</template>

<script>
    import test2 from './test2.vue'
    import common from '@/mixin/common' 
    export default {
        mixins:[common],
        data(){
            return{
                text:100
            }
        },
        components:{
            test2
        }
    }
</script>

<style scoped>

</style>