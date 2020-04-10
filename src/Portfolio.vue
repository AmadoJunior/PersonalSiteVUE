<template>
  <div class="page" id="container">
    <div id="portfolio">
      <h1>Portfolio</h1>
    </div>
    <div id="projects">
      <projectCmp :name="projects[0].name" :description="projects[0].description"/>
      <projectCmp :name="projects[1].name" :description="projects[1].description" />
      <projectCmp :name="projects[2].name" :description="projects[2].description" />
      <projectCmp :name="projects[3].name" :description="projects[3].description" />
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
  #container{
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
  }
  #portfolio{
    margin:20px 75px 20px 75px;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
  #projects{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>