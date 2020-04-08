<template>
  <div id="container">
    <div id="home">
      <h1>Home</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda quasi rem harum accusamus? In error, laudantium illum placeat sint autem quae ipsam, numquam itaque quam nesciunt at reprehenderit voluptatem sunt harum similique facere. Reiciendis totam quas ab rem eaque eos vitae quasi eum. Earum sunt nesciunt molestiae quis dicta.</p>
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
  }
  #home{
    margin:20px 75px 20px 75px;
    flex:1;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
</style>