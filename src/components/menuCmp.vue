<template>
    <div id="menuCmp">
      <div id="top">
        <div id="logo">
          <h1 class="bracket">&lt;</h1>
          <h1 id="adm">ADM</h1>
          <h1 class="bracket">/&gt;</h1>
        </div>
          <div id="menu">
            <router-link to="/" class="link"><p class="menu" >HOME</p></router-link>
            <hr>
            <router-link to="/portfolio" class="link"><p class="menu" >PORTFOLIO</p></router-link>
            <hr>
            <router-link to="/aboutme" class="link"><p class="menu" >ABOUT ME</p></router-link>
            <hr>
            <p class="link"><p class="menu">RESUME</p>
            <hr>
            <router-link to="/contactme" class="link"><p class="menu" >CONTACT ME</p></router-link>
            <hr>
            <router-link to="/login" class="link"><p class="menu" >PROJECT MANAGER</p></router-link>
            <hr>
        </div>
      </div>
      <div id="footer">
        <div>
        <hr id="foothr">
        <footer>2020 ADM. All rights reserved</footer>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'menuCmp',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  margin:0;
}
#adm{
  transition: .2s;
}
#adm:hover {
  transform: scale(1.05);
  margin-left: 10px;
  margin-right: 10px;
}
#logo {
  cursor:pointer;
  display:flex;
  justify-content: center;
}
.bracket{
  color:#dc3545;
}
#menuCmp {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
}
h1{
  text-align: center;
  font-size: 50px;
}
#menu{
  text-align: center;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.menu{
  color:#2c3e50;
  cursor:pointer;
  padding:10px;
  font-size:13px;
  opacity:0.8;
  transition: .2s ease;
}
.link{
  text-decoration: none;
  outline: none;
}
.menu:hover{
  opacity:1;
  transform: scale(1.05);
}
.socialItem:hover{
  transform: scale(1.2);
}
footer{
  color:gray;
  padding:5px;
  margin:0;
  text-align:center;
  font-size:12px;
}
hr{
  color:lightgray;
  width:80%;
  margin: auto;
}
#foothr{
  width:100%;
}
</style>
