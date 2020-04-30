<template>
    <div id="form">
        <h2>Add Project</h2>
        <div class="field">
        <label for="title">Project Title:</label>
        <input type="text" id="title" placeholder="Title" class="input">
        </div>
        <div class="field">
        <label for="live">Hosted Link:</label>
        <input type="text" id="live" placeholder="Link" class="input">
        </div>
        <div class="field">
        <label for="code">Github Link:</label>
        <input type="text" id="code" placeholder="Link" class="input">
        </div>
        <div class="field">
        <p>Description:</p>
        <textarea name="description" class="input" placeholder="Description"></textarea>
        <button id="import">Import Image</button>
        </div>
        
        <button id="submit" @click="addProject()">Add</button>
    </div>
</template>
<script>
export default {
    name: "addProjectCmp",
    data: function(){
        return{

        }
    },
    methods:{
        addProject(){

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
    width: 150px;
    border-radius: 3px;
    transition: .3s;
    position:relative;
    left:-200px;
}
.field{
    padding: 10px;
    margin: 5px;
  }
#form{
    margin: 10px;
  }
</style>