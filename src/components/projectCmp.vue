<template>
  <div id="projectCmp">
    <div id="container">
      <h4>{{name}}</h4>
      <a :href="liveLink"><img :src="imgIcon" id="imgIcon"></a>
      <p>{{description}}</p>
    </div>
    <div id="links">
      <a :href="githubLink"><img :src="githubIcon" class="links"></a>
      <a :href="liveLink"><img :src="playIcon" class="links"></a>
    </div>
  </div>
</template>

<script>
import sample from '@/assets/rect.png'
import github from '@/assets/github.png'
import play from '@/assets/play.png'
export default {
    name: 'projectCmp',
    props:{
      name: String,
      description: String,
      githubLink: String,
      liveLink: String,
    },
    data() {
    return {
      imgIcon: sample,
      githubIcon: github,
      playIcon: play,
    }
  },
}
</script>

<style scoped>
  a{
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

  }
  .links{
    width:35px;
    height:35px;
    padding: 10px;
  }
  #links{
    margin-top: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
</style>