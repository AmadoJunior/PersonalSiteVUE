<template>
    <div id="form">
        <h2>Add Project</h2>
        <div class="field">
        <label for="title">Project Title:</label>
        <input type="text" id="title" placeholder="Title" class="input" v-model.lazy="title">
        </div>
        <div class="field">
        <label for="live">Hosted Link:</label>
        <input type="text" id="live" placeholder="Link" class="input" v-model.lazy="liveLink">
        </div>
        <div class="field">
        <label for="code">Github Link:</label>
        <input type="text" id="code" placeholder="Link" class="input" v-model.lazy="githubLink">
        </div>
        <div class="field">
        <p>Description:</p>
        <textarea name="description" class="input" placeholder="Description" v-model.lazy="description"></textarea>
        <input type="file" name="file" ref="file" id="import" accept="image/*" @change="handleFileUpload()">
        </div>
        
        <button id="submit" @click="addProject()">Add</button>
    </div>
</template>
<script>
import projectMgrService from "./../tools/projectMgrService.js";
export default {
    name: "addProjectCmp",
    data: function(){
        return{
            title: "",
            description: "",
            liveLink: "",
            githubLink: "",
            file: ""
        }
    },
    methods:{
        addProject(){
            let formData = new FormData();
            formData.append("title", this.title);
            formData.append("liveLink", encodeURI(this.liveLink));
            formData.append("githubLink", encodeURI(this.githubLink));
            formData.append("description", this.description);
            formData.append("file", this.file);

            projectMgrService.postProject(formData);
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        }
    }
}
</script>
<style scoped>
p{
    display:inline-block;
    padding: 10px;
    position: relative;
    top:-100px;
    cursor:default;
}
label{
    padding: 10px;
}
textarea{
    height: 100px;
    resize:none;

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
    margin:25px 0 35px 0;
    transition: .3s;
  }
#import{
    background-color:#2c3e50;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 250px;
    border-radius: 3px;
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