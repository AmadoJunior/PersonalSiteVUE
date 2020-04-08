<template>
  <div class="page" id="container">
    <div id="portfolio">
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores enim porro sunt quaerat doloribus rerum maiores? Ducimus, quidem animi?</p>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'Portfolio',
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
  #portfolio{
    margin:20px 75px 20px 75px;
    flex:1;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
</style>