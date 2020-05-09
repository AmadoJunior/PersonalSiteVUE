<template>
    <div class="page">
        <div>
            <h1>Admin Login</h1>
            <div>
                <input type="text" placeholder="User" class="inputField" v-model="userName">
                <input type="password" placeholder="Password" class="inputField" v-model="password">
            </div>
            <p v-show="incompleteError">{{incompleteErrorMessage}}</p>
            <p v-show="failedAuthError">{{failedAuthErrorMessage}}</p>
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
            userName: "",
            password: "",
            incompleteErrorMessage: "Incomplete fields",
            incompleteError: false,
            failedAuthErrorMessage: "Failed Authentication",
        }
    },
    methods: {
        login(){
            if((this.userName.length && this.password.length) > 0){
                this.incompleteError = false;
                store.getToken(this.userName, this.password);
                this.userName = "";
                this.password = "";
            } else {
                this.incompleteError = true;
                store.state.error = false;
            }
        }
    },
    computed: {
        failedAuthError(){
            return store.state.error;
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