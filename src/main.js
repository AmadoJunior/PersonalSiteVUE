//Tools
import Vue from 'vue';
import VueRouter from "vue-router";
//Routes
import App from './App.vue';
import Home from "./Home.vue"
import Portfolio from "./Portfolio.vue"
import AboutMe from "./AboutMe.vue"
import ContactMe from "./ContactMe.vue"
import Login from "./Login.vue"
//Global Components
import projectCmp from "./components/projectCmp.vue"
import addProjectCmp from "./components/addProjectCmp.vue"
import removeProjectCmp from "./components/removeProjectCmp.vue"

Vue.component("projectCmp", projectCmp);
Vue.component("addProjectCmp", addProjectCmp);
Vue.component("removeProjectCmp", removeProjectCmp);

//Token class for store
import Token from "./tools/tokenService";

//Store State Manager
export var store = {
  state: {
    loggedIn: false,
    token: null,
    userData: {

    },
    error: false
  },
  async getToken(email, password){
    try{
      const data = await Token.getToken(email, password);
      this.state.error = false;
      this.state.userData = data.userData;
      this.state.token = data.token;
      this.state.loggedIn = true;
      setTimeout(()=>{
        this.state.loggedIn = false;
        this.state.token = null;
        this.state.userData = null;
      }, 1800000)
    }catch(err){
      this.state.error = true;
      console.log(err);
    }
    
  },
  getState(){
    return this.state.loggedIn;
  }
};

//Set up router middleware
Vue.use(VueRouter);

//Routes Array
const routes = [
  {path: "/", component: Home},
  {path: "/portfolio", component: Portfolio},
  {path: "/aboutme", component: AboutMe},
  {path: "/contactme", component: ContactMe},
  {path: "/login", component: Login}
];

//Creating instanse using routes array
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  router,//Adding router to vue instance
  render: h => h(App),
}).$mount('#app')
