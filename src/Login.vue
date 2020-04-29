<template>
        <div class="page" v-if="!logedIn">
            <div>
                <h1>Admin Login</h1>
                <div>
                    <input type="text" placeholder="User" class="input" v-model.lazy="userName">
                    <input type="text" placeholder="Password" class="input" v-model.lazy="password">
                </div>
                <button id="submit" @click="login()">Enter</button>
            </div>
        </div>
        <projectManager v-else></projectManager>
</template>

<script>
import projectManager from "./components/projectManagerCmp.vue";
export default {
    name:"login",
    components:{
        projectManager,
    },
    data: function() {
        return {
            userName: "",
            password: "",
            logedIn: false
        }
    },
    methods:{
        login(){
            if(this.userName === "Test" && this.password === "Test"){
                this.logedIn = true;
            }
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