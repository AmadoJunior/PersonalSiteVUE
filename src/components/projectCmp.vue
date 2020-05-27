<template>
  <div id="projectCmp">

    <img src="./../assets/arrow2.png" 
    id="optionsBtn" 
    :class="{optionsBtnSelected: isActive}" 
    @click="toggle()"
    v-show="userLoggedIn">

    <div id="optionsContainer" 
    :class="{optionsActive: isActive}">

      <span class="option" @click="remove()">Remove</span>

    </div>
    <div id="container">
      <h4>{{title}}</h4>
      <img :src="file" id="imgIcon">
      <p>{{description}}</p>
    </div>
    <div id="linksContainer">
      <a :href="githubLink" target="_new">
        <img :src="githubIcon" class="links" :class="{nullLink: isNullLink1, activeLink: isActiveLink1}">
      </a>
      <a :href="liveLink" target="_new">
      <img :src="playIcon" class="links" :class="{nullLink: isNullLink2, activeLink: isActiveLink2}">
      </a>
    </div>
  </div>
</template>

<script>
import github from '@/assets/github2.png';
import play from '@/assets/play2.png';
import Project from "./../tools/projectMgrService";
import {eventBus} from "./../main";

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

        if(localStorage.token !== undefined){
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }

    eventBus.$on("tokenAdded", () => {
      this.userLoggedIn = true;
    })
    eventBus.$on("tokenRemoved", () => {
      this.userLoggedIn = false;
    })
  },
  props:{
      _id: String,
      title: String,
      description: String,
      githubLink: String,
      liveLink: String,
      file: String
  },
  data() {
    return {
      userLoggedIn: false,
      githubIcon: github,
      playIcon: play,
      isNullLink1: false,
      isActiveLink1: true,
      isNullLink2: false,
      isActiveLink2: true,
      isActive: false
    }
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    },
    remove(){
      Project.deleteProject(this._id);
      this.isActive = false;
      eventBus.$emit("projectRemoved");
    }
  }

}
</script>

<style scoped>
  #projectCmp{
    position: relative;
    display:flex;
    flex-direction: row;
    width: 275px;
    padding: 15px;
    transition: .2s linear;
  }
  #projectCmp:hover{
    transform: scale(1.04);
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
  #optionsBtn{
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    right: 17px;
    top: 32px;
    height: 22px;
    width: 22px;
  }
  #optionsBtn:hover{
    background-color: lightgray;
  }
  .optionsBtnSelected{
    background-color: lightgray !important;
  }
  #optionsContainer{
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: white;
    position: absolute;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.05);
    border-radius: 5px;
    right: 18px;
    top: 54px;
    z-index: 50;
    opacity: 0;
    visibility: hidden;
  }
  .optionsActive{
    opacity: 1 !important;
    visibility: visible !important;
  }
  .option{
    padding: 5px;
  }
  .option:hover{
    background-color: lightgray;
    border-radius: 5px;
  }
</style>