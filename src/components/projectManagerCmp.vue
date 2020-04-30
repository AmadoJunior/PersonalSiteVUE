<template>
    <div class="page">
    <h1>Project Manager</h1>
    <button id="submit">Add Project</button>
    <button id="submit">Remove Project</button>
    </div>
</template>

<script>
export default {
    name: "projectManagerCmp",
    
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
    margin:20px 30px 50px 30px;
    transition: .3s;
  }
  #submit:hover{
    background-color:#bb2a39;
  }
</style>