<template>
  <div class="page" id="container">
    <div id="portfolio">
      <h1>Portfolio</h1>
    </div>
    <div id="projects">
      <projectCmp v-for="project in projects" :key="project.title"
      :name="project.title" :description="project.description"/>
    </div>
  </div>
</template>

<script>
  import projectCmp from "./components/projectCmp.vue"
  import Project from "./tools/projectMgrService";

  export default {
  name: 'Portfolio',
  component:{
    projectCmp,
  },
  data() {
    return {
      projects: []
    }
  },
  async created(){
    try{
      const data = await Project.getProject();
      console.log(data);
      this.projects = await Project.getProject();
    }catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>
h1{
  margin: 30px;
}

  #portfolio{
    align-self:center;
    text-align: center;
  }
  #projects{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
  }
</style>