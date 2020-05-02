<template>
  <div class="page">
    <div id="contactme">
        <h1>Contact Me</h1>
        <div class="fieldContainer">
          <label for="email">Email:</label>
          <input v-model="email" placeholder="Email" id="email" class="inputField">  
        </div>
        <div class="fieldContainer">
          <label for="name">Name:</label>
          <input v-model="name" placeholder="Name" id="name" class="inputField">
        </div>
        <div class="fieldContainer">
          <label for="subject" id="subjectLabel" >Subject:</label>
          <input v-model="subject" placeholder="Subject" id="subject" class="inputField">
        </div>
        <div class="fieldContainer">
          <textarea v-model="message" placeholder="Message" class="inputField"></textarea>
        </div>
        <button class="redBtn" @click="submit()">Submit</button>
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
textarea{
    height: 100px;
    width: 400px;
    resize:none;
}
#subjectLabel{
  padding-left: 0px;
}
</style>