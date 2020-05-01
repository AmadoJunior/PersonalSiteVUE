<template>
  <div id="projectCmp">
    <div id="container">
      <h4>{{title}}</h4>
      <img :src="file" id="imgIcon" @click="goto(liveLink)">
      <p>{{description}}</p>
    </div>
    <div id="links">
      <img :src="githubIcon" class="links" @click="goto(githubLink)">
      <img :src="playIcon" class="links" @click="goto(liveLink)">
    </div>
  </div>
</template>

<script>
import github from '@/assets/github.png';
import play from '@/assets/play.png';

export default {
  name: 'projectCmp',
  props:{
      title: String,
      description: String,
      githubLink: String,
      liveLink: String,
      file: String
  },
  data() {
    return {
      githubIcon: github,
      playIcon: play,
    }
  },
  created(){
    console.log(this.file);
  },
  methods:{
    goto(url){
      window.location = url;
    }
  }

}
</script>

<style scoped>
  img{
    cursor:pointer;
  }
  #projectCmp{
    display:flex;
    flex-direction: row;
    width: 275px;
    padding: 15px;
  }
  #container{
    padding: 10px;
    text-align: center;
  }
  #container p{
    font-size: 13px;
    margin: 5px;
  }
  #container h4{
    margin: 5px;
  }
  #imgIcon{
    height: 125px;
    width: 200px;
  }
  .links{
    width:35px;
    height:35px;
    padding: 10px;
  }
  #links{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
</style>