<template>
  <div id="app">
    <menuCmp/>
    <div id="bg" >
      <routerTransition>

        <router-view></router-view>

      </routerTransition>
    </div>
  </div>
</template>

<script>
import menuCmp from './components/menuCmp.vue'
import routerTransition from './components/routerTransition.vue'

export default {
  name: 'App',
  components: {
    menuCmp,
    routerTransition
  },
  data() {
    return {

    };
  },
  methods:{
    
  }
  
}
</script>

<style>

#app {
  font-family: 'Monda', sans-serif;
  color:#2c3e50;
  display:flex;
}
label{
    padding: 10px;
}
.fieldContainer{
    padding: 5px;
    margin: 2px;
}
.page{
  background-color:white;
  text-align: center;
  position: absolute;
  max-width:1000px;
  min-width: 600px;
  width:60%;
  margin-top: 10vh;
  border-radius: 3px;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.05);
}
#bg{
  background-image: url(./assets/abs.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width:100%;
  display:flex;
  justify-content: space-evenly;
  min-width:650px;
  min-height: 1000px;
}
.redBtn{
    background-color:#dc3545;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 100px;
    border-radius: 3px;
    margin:20px 0 25px 0;
    transition: .3s;
}
.redBtn:hover{
    background-color:#bb2a39;
}
.inputField{
    appearance: none;
    background-color: lightgray;
    border: none;
    border-radius: 3px;
    padding: 10px;
    margin: 5px 20px 5px 20px;
}

</style>
