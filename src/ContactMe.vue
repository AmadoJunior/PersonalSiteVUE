<template>
  <div class="page" id="container">
    <div id="contactme">
      <h1>Contact Me</h1>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'ContactMe',
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
  #contactme{
    margin:20px 75px 20px 75px;
    flex:1;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
</style>