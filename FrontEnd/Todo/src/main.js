import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import tasks  from './components/tasks.vue' 
import done from './components/done.vue'
import notdone from './components/notdone.vue'





import axios from 'axios'; 

import Login from './components/login.vue'
import Register from './components/register.vue'
import logout from './components/logout.vue'
import Home from './components/Home.vue'

import Auth from '../Auth.js' 
import Task from '../Task.js'
import VueSweetalert2 from 'vue-sweetalert2'



Vue.use(VueRouter);
Vue.use(Auth);
Vue.use(VueSweetalert2);
Vue.use(Task);

 


if(Vue.auth.isAuthenticataUser()){
  axios.defaults.headers.common['Authorization'] = "Bearer " + Vue.auth.getAccessToken();
  axios.defaults.headers.common['Accept'] = 'application/json' ;
}



const routes = [
       {path: '/tasks'  , component: tasks , name : 'tasks'} ,
       {path: '/done'  , component: done  , name : 'done'},
       {path: '/notdone'  , component: notdone , name : 'notdone'},
     
       
       { path: '/', name: 'home',component: Home    ,     meta: {auth: false} },
       { path: '/register', name: 'register', component: Register  ,  meta: {auth: false}},  
       { path: '/login',name: 'login',component: Login ,       meta: {auth: false}} , 
       { path: '/logout',name: 'logout',component: logout ,       meta: {auth: false}}

      ];
  



const router = new VueRouter(
  { routes }
) ; 





export const bus = new Vue();

new Vue({
  render: h => h(App) , 
  router 
  
}).$mount('#app')


