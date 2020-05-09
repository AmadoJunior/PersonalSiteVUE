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

export const eventBus = new Vue({
  methods:{
    async authenticate(email, password){
      try{
        const data = await Token.getToken(email, password);
        localStorage.token = data.token;
        localStorage.isLoggedIn = true;
        this.$emit("addedToken", data.userData);
      } catch(err){
        console.log(err)
      }
    },
    reset(){
      localStorage.removeItem("token");
      localStorage.isLoggedIn = false;
      this.$emit("removedToken")
    }
  }
})

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
