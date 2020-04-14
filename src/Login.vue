<template>
    <div class="page">
        <h1>Admin Login</h1>
        <div>
            <input type="text" placeholder="User" class="input" v-model.lazy="userName">
            <input type="text" placeholder="Password" class="input" v-model.lazy="password">
        </div>
        <button id="submit" @click="login()">Enter</button>
    </div>
</template>

<script>
export default {
    name:"login",
    data: function() {
        return {
            userName: "",
            password: ""
        }
    },
    methods:{
        login(){
            console.log(this.userName, this.password);
        }
    }
}
</script>

<style scoped>
    #submit{
    background-color:#dc3545;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 100px;
    border-radius: 3px;
    margin:30px 0 35px 0;
    transition: .3s;
  }
  #submit:hover{
    background-color:#bb2a39;
  }
  .input{
    appearance: none;
    background-color: lightgray;
    border: none;
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
  }
</style>