<template>
    <div class="page">
        <div>
            <h1>Admin Login</h1>
            <div>
                <input type="text" placeholder="User" class="inputField" v-model.lazy="userName">
                <input type="text" placeholder="Password" class="inputField" v-model.lazy="password">
            </div>
            <button class="redBtn" @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"loginCmp",
    data: function(){
        return {
            userName: "",
            password: "",
        }
    },
    methods: {
        login(){
            if(this.userName === "" && this.password === ""){
                this.$emit("loggedIn");
            }
            console.log(this.userName, this.password);
        }
    }
}
</script>

<style scoped>
  
</style>