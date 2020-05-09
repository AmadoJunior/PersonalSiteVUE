<template>
        <loginCmp v-if="!isLoggedIn" />
        <projectManager v-else></projectManager>
</template>

<script>
import projectManager from "./components/projectManagerCmp.vue";
import loginCmp from "./components/loginCmp.vue";
import {eventBus} from "./main";

export default {
    name:"login",
    components:{
        projectManager,
        loginCmp
    },
    created(){
        if(localStorage.isLoggedIn === "true"){
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }

        let vm = this;
        eventBus.$on("addedToken", ()=>{
            vm.isLoggedIn = true;
        });
        eventBus.$on("removedToken", ()=>{
            vm.isLoggedIn = false;
        })

    },
    data(){
        return{
            isLoggedIn: false
        }
    }
}
</script>

<style scoped>
    
</style>