<template>
  <div id="app">
    <menuCmp @clicked="this.isActive=popup($event)" />
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
      isActive:false,
    };
  },
  methods:{
    popup(value){
      this.isActive = value;
    }
  }
  
}
</script>

<style>

#app {
  font-family: 'Monda', sans-serif;
  color:#2c3e50;
  display:flex;
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
}
#bg{
  background-image: url(./assets/abs.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width:100%;
  display:flex;
  justify-content: space-evenly;
  min-width:500px;
}


</style>
