<template>
    <div class="page">
        <div>
            <h1>Admin Login</h1>
            <div>
                <input type="text" placeholder="User" class="inputField" v-model="userName">
                <input type="password" placeholder="Password" class="inputField" v-model="password">
            </div>
            <p v-show="incompleteError">{{incompleteErrorMessage}}</p>
            <button class="redBtn" @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import {eventBus} from "./../main";

export default {
    name:"loginCmp",
    data: function(){
        return {
            userName: "",
            password: "",
            incompleteErrorMessage: "Incomplete fields",
            incompleteError: false
        }
    },
    methods: {
        login(){
            if((this.userName.length && this.password.length) > 1){
                this.incompleteError = false;
                eventBus.authenticate(this.userName, this.password);
            } else {
                this.incompleteError = true;
            }
        }
    }
}
</script>

<style scoped>
    p{
        margin-bottom: 0px;
        color: red;
    }
</style>