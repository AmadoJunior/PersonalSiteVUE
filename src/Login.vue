<template>
        <loginCmp v-if="!loggedIn" @loggedIn="loggedIn=!loggedIn"/>
        <projectManager v-else></projectManager>
</template>

<script>
import projectManager from "./components/projectManagerCmp.vue";
import loginCmp from "./components/loginCmp.vue";
export default {
    name:"login",
    components:{
        projectManager,
        loginCmp
    },
    data: function() {
        return {
            loggedIn: false
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    
</style>