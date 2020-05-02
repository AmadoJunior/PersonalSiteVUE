<template>

    <div class="page">
        <h1>Project Manager</h1>
        <div>
            <button class="redBtn option" @click="addF()">Add Project</button>
            <button class="redBtn option" @click="removeF()">Remove Project</button>
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
.option{
    margin: 20px 20px 20px 20px;
    width: 200px;
}
</style>