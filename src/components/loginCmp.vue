<template>
    <div class="page">
        <div>
            <h1>Admin Login</h1>
            <div>
                <input type="text" placeholder="User" class="inputField" v-model="userName">
                <input type="text" placeholder="Password" class="inputField" v-model="password">
            </div>
            <button class="redBtn" @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import {store} from "./../main";

export default {
    name:"loginCmp",
    data: function(){
        return {
            userName: null,
            password: null,
        }
    },
    methods: {
        login(){
                store.getToken(this.userName, this.password);
                console.log("got here");
        }
    }
}
</script>

<style scoped>
  
</style>