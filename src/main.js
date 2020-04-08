import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import Home from "./Home.vue"
import Portfolio from "./Portfolio.vue"
import AboutMe from "./AboutMe.vue"
import ContactMe from "./ContactMe.vue"

Vue.use(VueRouter);
const routes = [
  {path: "/", component: Home},
  {path: "/portfolio", component: Portfolio},
  {path: "/aboutme", component: AboutMe},
  {path: "/contactme", component: ContactMe},
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
