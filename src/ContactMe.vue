<template>
  <div class="page" id="container">
    <div id="contactme">
      <div id="popup">
        <h1>Contact Me</h1>
        <div id="form">
          <input v-model="email" placeholder="Email" class="input">
          <div id="details">  
            <input v-model="name" placeholder="Name" class="input">
            <input v-model="subject" placeholder="Subject" class="input">
          </div>
          <textarea v-model="message" placeholder="Message" class="input"></textarea>
          <button id="submit" @click="submit()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'ContactMe',
  data() {
    return {
      email: null,
      name: null,
      subject: null,
      message: null
    }
  },
  props: {
    
  },
  methods: {
    submit(){
      console.log(this.email, this.name, this.subject, this.message)
    }
  }
}
</script>

<style scoped>
  h1{
  margin: 50px;
}
  #form input{
    box-sizing: border-box;
  }
  #details input{
    margin: 0;
    width: 220px;
  }
  #form textarea{
    width:100%;
    resize:none;
    box-sizing: border-box;
  }
  #container{
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
  }
  #contactme{
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    min-width: 400px;
    max-width: 1000px;
    text-align: center;
  }
  #form{
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 20px;
  }
  .input{
    appearance: none;
    border: solid black 1px;
    padding: 2px;
    margin: 4px;
    width:100%;
  }
  #submit{
    border: solid black 1px;
    cursor: pointer;
    padding: 5px;
    width: 100px;
    border-radius: 2px;
    margin:5px;
  }
  #details{
    padding:2px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
  }
</style>