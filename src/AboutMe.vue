<template>
  <div class="page" id="container">
    <div id="aboutme">
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo voluptas beatae ad magni cum assumenda, odit voluptatum quos? Iusto quam quo ex incidunt asperiores?</p>
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

<style>
  #container{
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
  }
  #aboutme{
    margin:20px 75px 20px 75px;
    flex:1;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
</style>