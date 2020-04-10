<template>
  <div id="app">
    <menuCmp/>
    <div id="bg">
      <transition name="view">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import menuCmp from './components/menuCmp.vue'

export default {
  name: 'App',
  components: {
    menuCmp,
  },
  data() {
    return {
    };
  },
  
}
</script>

<style>

#app {
  font-family: 'Monda', sans-serif;
  color:#2c3e50;
  display:flex;
}

#bg{
  /*background-image: url();
  background-repeat: no-repeat;
  background-size: cover;*/
  width:100%;
}

.view-enter-active, .view-leave-active {
  transition: 0.5s;
}

.view-enter-active{
  transition-delay: 0.5s;
}

.view-enter, .view-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.view-enter-to, .view-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>
