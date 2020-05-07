<template>

    <div class="page">
        <h1>Project Manager</h1>
        <div>
            <button class="redBtn option" :class="{active: addSelected}" @click="addProject()">Add Project</button>
            <button class="redBtn option" :class="{active: rmSelected}" @click="rmProject()">Remove Project</button>
        </div>
        <component :is="selectedCmp" />
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
            selectedCmp: "",
            addSelected: false,
            rmSelected: false
        }
    },
    methods:{
        addProject(){
            this.selectedCmp = addProjectCmp;
            this.rmSelected = false;
            this.addSelected = true;
        },
        rmProject(){
            this.selectedCmp = removeProjectCmp;
            this.addSelected = false;
            this.rmSelected = true;
        }
    }
    
}
</script>

<style scoped>
.option{
    margin: 20px 20px 20px 20px;
    width: 200px;
}
.active{
    background-color:#bb2a39;
    cursor: auto;
}
</style>