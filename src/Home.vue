<template>
  <div class="page" id="container">
    <div id="home">
      <div  id="profile">
      </div>
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
h1{
  margin: 30px;
}

  #home{
    display:flex;
    flex-direction: column;
    align-items: center;
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
    transition: .3s;
    backface-visibility: hidden;
    margin-bottom: 30px;
  }
  .button p{
    margin: 5px 0 0 0;
  }
  .button:hover{
    transform: scale(1.03);
  }
  .button img{
    transition: .3s;
  }
  .button:hover img{
    transform: translateY(5px);
  }

  #profile{
    height:150px;
    width:150px;
    margin-top:35px;
    background-image: url("./assets/profile2.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }

</style>