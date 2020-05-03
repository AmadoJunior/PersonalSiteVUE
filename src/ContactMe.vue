<template>
  <div class="page">
    <div id="contactme">
        <h1>Contact Me</h1>
        <div class="fieldContainer">
          <label for="email">Email:</label>
          <input v-model="email" placeholder="Email" id="email" name="email" class="inputField">  
        </div>
        <div class="fieldContainer">
          <label for="name">Name:</label>
          <input v-model="name" placeholder="Name" id="name" name="name" class="inputField">
        </div>
        <div class="fieldContainer">
          <label for="subject" id="subjectLabel" >Subject:</label>
          <input v-model="subject" placeholder="Subject" id="subject" name="subject" class="inputField">
        </div>
        <div class="fieldContainer">
          <textarea v-model="message" placeholder="Message" name="message" class="inputField"></textarea>
        </div>
        <button class="redBtn" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script>
import Email from "./tools/emailsService.js";

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
      let emailData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      }
      Email.sendEmail(emailData);
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