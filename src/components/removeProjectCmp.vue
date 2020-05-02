<template>
    <div id="container">
        <h2>Remove Project</h2>
        <div class="fieldContainer">
        <label for="name">Remove by Title:</label>
        <input 
        type="text" 
        name="title" 
        class="inputField" 
        placeholder="Title"
        v-model="title"
        >
        </div>
        <button class="redBtn" @click="remove()">Remove</button>
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
#container{
    margin: 10px;
}
</style>