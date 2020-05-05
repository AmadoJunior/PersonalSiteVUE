<template>
        <loginCmp v-if="!state.loggedIn" />
        <projectManager v-else></projectManager>
</template>

<script>
import projectManager from "./components/projectManagerCmp.vue";
import loginCmp from "./components/loginCmp.vue";
import {store} from "./main";

export default {
    name:"login",
    components:{
        projectManager,
        loginCmp
    },
    data: function() {
        return {
            state: store.state
        }
        }
}
</script>

<style scoped>
    
</style>