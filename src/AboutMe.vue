<template>
  <div class="page" id="container">
    <div id="aboutme">
      <h1>About Me</h1>
      <p>Full time student out of Miami, FL. Currently pursuing a Bachelor of Science in Computer Science through a transfer program at Miami-Dade College.</p>
      <h3>Full-stack web developer proficient in HTML/CSS as well as JavaScript technologies such as:</h3>
      <ul>
        <li>VueJS</li>
        <li>NodeJS</li>
        <li>MongoDB</li>
      </ul>
      <h4>Check out my resume to see my other qualifications.</h4>
      <router-link to="/" id="resume" >
        <p>Download Resume</p>
        <img src="./assets/arrow.png">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'AboutMe',
  data() {
    return {
      
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
  margin: 50px;
}
  #container{
    display:flex;
    text-align: center;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
  }
  #aboutme{
    align-self:center;
    min-width: 400px;
    max-width: 1000px;
    height:500px;
    
  }
  #resume{
    display:inline-block;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    outline: none;
    color:#343a40;
  }
</style>