<template>

    <div class="page">
        <h1>Project Manager</h1>
        <div>
            <button id="submit" @click="addF()">Add Project</button>
            <button id="submit" @click="removeF()">Remove Project</button>
        </div>
        <addProjectCmp v-if="add"></addProjectCmp>
        <removeProjectCmp v-if="remove" />
    </div>

</template>

<script>
import addProjectCmp from "./addProjectCmp.vue";
import removeProjectCmp from "./removeProjectCmp.vue";

export default {
    name: "projectManagerCmp",
    components:{
        addProjectCmp,
        removeProjectCmp
    },
    data: function(){
        return {
            add: false,
            remove: false,
        }
    },
    methods:{
        addF(){
            this.remove=false;
            this.add=true;
        },
        removeF(){
            this.add=false;
            this.remove=true;
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
    width: 200px;
    border-radius: 3px;
    margin:20px 30px 30px 30px;
    transition: .3s;
  }
  #submit:hover{
    background-color:#bb2a39;
  }
</style>