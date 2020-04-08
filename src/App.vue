<template>
  <div id="app">
    <menuCmp/>
    <router-view></router-view>
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
  color:#343a40;
}

#app {
  display:flex;
}

</style>
