<template>
  <div class="page" id="container">
    <div id="home">
      <div id="topContainer">
        <div  id="profile" />
        <div id="social">
          <div class="container">
            <img class="socialItem" src="./assets/email2.png">
          </div>
          <div class="container">
            <img class="socialItem" src="./assets/github2.png">
          </div>
          <div class="container">
            <img class="socialItem" src="./assets/linkedin2.png">
          </div>
        </div>
      </div>
      <h1>Hello, I'm Amado Dominguez, web designer and full-stack developer based in Miami Florida.</h1>
      <div class="button">
        <router-link to="/portfolio" id="works" >
        <p>Check out my work!</p>
        <img src="./assets/arrow.png" width="20px">
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
  margin: 0px 30px 30px 30px;
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
  height:160px;
  width:160px;
  margin-right: 10px;
  background-image: url("./assets/profile2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  }
#social{
  display:flex;
  flex-direction: column;
  padding:5px;
  justify-content: space-evenly;
  backface-visibility: hidden;
}
.socialItem {
  margin:0;
  cursor:pointer;
  padding:5px;
  width: 40px;
  height: 40px;
  transition: .3s ease-in-out;
}
.socialItem:hover{
  transform: scale(1.1);
}
#topContainer{
  display:flex;
  margin:35px 0px 15px 0px;
  align-items: center;
}
</style>