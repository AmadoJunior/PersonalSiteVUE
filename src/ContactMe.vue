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
        <p v-show="incompleteError">Incomplete Fields</p>
        <p v-show="emailError">Invalid Email Adress</p>
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
      email: "",
      name: "",
      subject: "",
      message: "",
      incompleteError: false,
      emailError: false,
      emailRegExp: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }
  },
  props: {
    
  },
  methods: {
    submit(){
      if(this.email.length < 1 || 
      this.name.length < 1 || 
      this.subject.length < 1 || 
      this.message.length < 1){
        this.incompleteError = true;
      } else {
        this.incompleteError = false;
        if(this.email.match(this.emailRegExp)){
          this.emailError = false;
          let emailData = {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
          this.name = "";
          this.email = "";
          this.subject = "";
          this.message = "";
          Email.sendEmail(emailData);
        } else {
          this.emailError = true;
        }
      }
      
    }
  }
}
</script>

<style scoped>
p{
  color:red;
}
textarea{
    height: 100px;
    width: 400px;
    resize:none;
}
#subjectLabel{
  padding-left: 0px;
}
</style>