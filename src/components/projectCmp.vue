<template>
  <div id="projectCmp">
    <div id="container">
      <h4>{{title}}</h4>
      <img :src="file" id="imgIcon">
      <p>{{description}}</p>
    </div>
    <div id="linksContainer">
      <img :src="githubIcon" class="links" :class="{nullLink: isNullLink1, activeLink: isActiveLink1}" @click="goto(githubLink)">
      <img :src="playIcon" class="links" :class="{nullLink: isNullLink2, activeLink: isActiveLink2}" @click="goto(liveLink)">
    </div>
  </div>
</template>

<script>
import github from '@/assets/github2.png';
import play from '@/assets/play2.png';

export default {
  name: 'projectCmp',
  created(){
    if(this.githubLink != null){
      this.isActiveLink1 = true;
      this.isNullLink1 = false;
    } else {
      this.isActiveLink1 = false;
      this.isNullLink1 = true;
    }
    if(this.liveLink != null){
      this.isActiveLink2 = true;
      this.isNullLink2 = false;
    } else {
      this.isActiveLink2 = false;
      this.isNullLink2 = true;
    }
  },
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
      isNullLink1: false,
      isActiveLink1: true,
      isNullLink2: false,
      isActiveLink2: true
    }
  },
  methods:{
    goto(url){
    if(url != null){
      window.location = url;
    }
    }
  }

}
</script>

<style scoped>
  #projectCmp{
    display:flex;
    flex-direction: row;
    width: 275px;
    padding: 15px;
    transition: .2s linear;
  }
  #projectCmp:hover{
    transform: scale(1.05);
  }
  #container{
    padding: 10px;
    text-align: center;
  }
  p{
    font-size: 13px;
    margin: 5px;
  }
  h4{
    margin: 5px;
  }
  #imgIcon{
    height: 125px;
    width: 200px;
    margin: 5px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.05);
  }
  .links{
    width:45px;
    height:45px;
    padding: 10px;
  }
  .nullLink{
    opacity: .60;
    transform: scale(.9);
  }
  .activeLink{
    cursor:pointer;
    transition: .2s;
    transform: scale(.9);
  }
  .activeLink:hover{
    transform: scale(1);
  }
  #linksContainer{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
</style>