<template>
  <div class="page" id="container">
    <div id="home">
      <h1>Hello, I'm Amado Dominguez, web designer and full-stack developer based in Miami Florida.</h1>
      <div class="button">
        <router-link to="/portfolio" id="works" >
        <p>Check out my work!</p>
        <img src="./assets/arrow.png">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Home',
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
  #container{
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    height:100%;
  }

  #home{
    display:flex;
    flex-direction: column;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }

  #works{
    display:inline-block;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    outline: none;
    color:#343a40;
  }

  .button {
    display:inline-block;
  }

</style>