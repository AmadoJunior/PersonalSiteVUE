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
  margin: 30px;
}
  #aboutme{
    align-self:center;
    min-width: 400px;
    max-width: 1000px;
    
  }
  #resume{
    margin-bottom: 30px;
    display:inline-block;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    outline: none;
    color:#343a40;
    transition: .3s;
    backface-visibility: hidden;
  }
  #resume p {
    margin:10px 0 0 0;
  }
  #resume:hover{
    transform: scale(1.03);
  }
  #resume img{
    transition: .3s;
  }
  #resume:hover img{
    transform: translateY(5px);
  }
</style>