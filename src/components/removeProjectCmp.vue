<template>
    <div id="form">
        <h2>Remove Project</h2>
        <div class="field">
        <label for="name">Remove by Title:</label>
        <input 
        type="text" 
        name="title" 
        class="input" 
        placeholder="Title"
        v-model="title"
        >
        </div>
        <button id="submit" @click="remove()">Remove</button>
    </div>
</template>
<script>
import projectMgrService from "./../tools/projectMgrService.js";

export default {
    name:"removeProjectCmp",
    data:function(){
        return {
            title: ""
        }
    },
    methods:{
        remove(){
            projectMgrService.deleteProject(this.title);
        }
    }

}
</script>
<style scoped>
label{
    padding: 10px;
}
.input{
    appearance: none;
    background-color: lightgray;
    border: none;
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
    width:70%;
}
#submit{
    background-color:#dc3545;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 100px;
    border-radius: 3px;
    margin:20px 0 35px 0;
    transition: .3s;
}
.field{
    padding: 10px;
    margin: 5px;
}
#form{
    margin: 10px;
  }
</style>