<template>
    <div id="container">
        <h2>Add Project</h2>
        <div class="fieldContainer">
        <label for="title">Project Title:</label>
        <input type="text" id="title" placeholder="Title" class="inputField" v-model.lazy="title">
        </div>
        <div class="fieldContainer">
        <label for="live">Hosted Link:</label>
        <input type="text" id="live" placeholder="Link" class="inputField" v-model.lazy="liveLink">
        </div>
        <div class="fieldContainer">
        <label for="code">Github Link:</label>
        <input type="text" id="code" placeholder="Link" class="inputField" v-model.lazy="githubLink">
        </div>
        <div class="fieldContainer">
        <textarea name="description" class="inputField" placeholder="Description" v-model.lazy="description"></textarea>
        <input type="file" name="file" ref="file" id="import" accept="image/*" @change="handleFileUpload()">
        </div>
        
        <button class="redBtn" @click="addProject()">Add</button>
    </div>
</template>
<script>
import Project from "./../tools/projectMgrService.js";

export default {
    name: "addProjectCmp",
    data: function(){
        return{
            title: "",
            description: "",
            liveLink: null,
            githubLink: null,
            file: ""
        }
    },
    methods:{
        addProject(){
            if(this.liveLink.length <= 1){
                this.liveLink = null;
            }
            if(this.githubLink.length <= 1){
                this.githubLink = null;
            }
            let formData = new FormData();
            formData.append("title", this.title);
            formData.append("liveLink", encodeURI(this.liveLink));
            formData.append("githubLink", encodeURI(this.githubLink));
            formData.append("description", this.description);
            formData.append("file", this.file);

            Project.postProject(formData);

            this.title = "";
            this.description = "";
            this.liveLink = "";
            this.githubLink = "";
            this.file = "";

        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>
<style scoped>
textarea{
    height: 100px;
    width: 400px;
    resize:none;
    margin-bottom: 30px;
}
#import{
    background-color:#2c3e50;
    color: white;
    cursor: pointer;
    padding: 5px;
    width: 250px;
    border-radius: 3px;
}
#container{
    margin: 10px;
}
</style>