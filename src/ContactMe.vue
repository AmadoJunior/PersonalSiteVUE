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
  margin: 30px;
}
  #form input{
    box-sizing: border-box;
    margin: 5px;
  }
  #details input{
    margin: 5px;
  }
  #form textarea{
    width:99%;
    height: 300px;
    resize:none;
    box-sizing: border-box;
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
    margin: 0 30px 0px 30px;
  }
  .input{
    appearance: none;
    background-color: lightgray;
    border: none;
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
    width:99%;
  }
  #submit{
    background-color:#dc3545;
    color: white;
    border: none;
    cursor: pointer;
    padding: 8px;
    width: 100px;
    border-radius: 3px;
    margin:30px 0 35px 0;
    transition: .3s;
  }
  #submit:hover{
    background-color:#bb2a39;
  }
  #details{
    padding:2px;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    width:100%;
  }
</style>