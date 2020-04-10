<template>
  <div class="page" id="container">
    <div id="portfolio">
      <h1>Portfolio</h1>
    </div>
    <div id="projects">
      <projectCmp v-for="project in projects" :key="project.name"
      :name="project.name" :description="project.description"/>
    </div>
  </div>
</template>

<script>
  import projectCmp from "./components/projectCmp.vue"
  export default {
  name: 'Portfolio',
  component:{
    projectCmp,
  },
  data() {
    return {
      projects: [
        {
        name:"Weather App",
        description:"Weather app that fetches the weather given a string.",
        githubLink: "qwer",
        liveLink: "qwer"
        },
        {
        name:"PDF Scanner",
        description:"Mobile web app that scans text given an image.",
        githubLink: "qwer",
        liveLink: "qwer"
        },
        {
        name:"Post Board",
        description:"Sample social network app. Allows users to create/delete posts.",
        githubLink: "qwer",
        liveLink: "qwer"
        },
        {
        name:"Matrix Solver",
        description:"Systems of equations solver built on Java Swing using TesseractOCR.",
        githubLink: "qwer",
        liveLink: "qwer"
        },
      ]
    }
  },
  props: {
    
  },
  methods: {
    
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