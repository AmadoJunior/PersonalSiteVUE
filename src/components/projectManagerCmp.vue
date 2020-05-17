<template>

    <div class="page">
        <h1>Project Manager</h1>
        <component :is="selectedCmp" />
    </div>

</template>

<script>
import addProjectCmp from "./addProjectCmp.vue";

export default {
    name: "projectManagerCmp",
    components:{
        addProjectCmp
    },
    data: function(){
        return {
            selectedCmp: "addProjectCmp",
        }
    },
    methods:{
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