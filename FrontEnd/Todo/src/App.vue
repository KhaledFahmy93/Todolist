
<template>
  <div id="app">
	  <div class="panel panel-default" >
        <div class="panel-heading">
            <nav>
                <ul class="list-inline">
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="pull-right"  v-if="!this.$auth.isAuthenticataUser()">
                        <router-link :to="{ name: 'login' }">Login</router-link>
                    </li> 
                    <li class="pull-right"  v-if="!this.$auth.isAuthenticataUser()">
                        <router-link :to="{ name: 'register' }">Register</router-link>
                    </li>
                    <li class="pull-right" v-if="this.$auth.isAuthenticataUser()">
                        <router-link :to="{ name: 'logout' }">Logout</router-link>
                    </li>
                    <li class="pull-right" v-if="this.$auth.isAuthenticataUser()">
                            <div class="dropdown">
                                <a class=" btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset"><b>you are signed with</b> <br>
                                        <span class="dropdown-item-text"> <b>name : </b>    {{ this.$auth.getUserName()  }}</span><br>
                                        <span class="dropdown-item-text"><b>Email : </b>{{  this.$auth.getUserEmail() }}</span><br>
                                </div>
                            </div>
                    </li>
                    
 
    
                </ul> 
            </nav>
        </div>
        <div class="panel-body" >
         
            
            <div class="container-fluid">

                    
            <div class="alert  alert-success" role="alert" v-if="this.$auth.isAuthenticataUser() && this.$route.path!='/' && success" >
                       Successfully added new task
            </div>  
            <form v-if="this.$auth.isAuthenticataUser()  && this.$route.path!='/' ">
                <addtask></addtask>  
                
            </form>
    
            
            <table class="table borderless" >
                    <thead class="thead-dark" v-if="this.$auth.isAuthenticataUser() && this.$route.path!='/'" >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Done</th>
                            <th scope="col"> not Done</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead> 
                             <router-view></router-view> 
            </table>


            <ul class="nav nav-pills nav-fill">
                <li class="nav-item"  v-if="this.$auth.isAuthenticataUser()">
                    <router-link :to="{ name: 'tasks' }">all</router-link>
                </li>
                <li class="nav-item" v-if="this.$auth.isAuthenticataUser()">
                    <router-link :to="{ name: 'done' }">Done Tasks</router-link>
                </li>
                <li class="nav-item" v-if="this.$auth.isAuthenticataUser()">
                    <router-link :to="{ name: 'notdone' }">not Done Tasks</router-link>
                </li>

                
            </ul>

            </div>
        </div>
    </div>
  
        
  </div>
</template>

<script>
import HelloWorld  from  './components/HelloWorld.vue' ;
import done from './components/done.vue' ;
import notdone from './components/notdone.vue' ;
import tasks from './components/tasks.vue' ;
import addtask from './components/addtask.vue' ;


import Register from './components/register.vue';
import Login from './components/login.vue';


import home from './components/Home.vue';

import axios from 'axios'; 
import {bus} from './main';
export default {
  name: 'app',
  components: {
    HelloWorld ,

    tasks ,
    done ,
	notdone , 
    addtask ,
    
    Register , 
    Login , 
    home
  } ,
  
  
  data(){
	  return{
          message : '' ,
          success  : false,  
	  }
  },
	
     created() {
		bus.$on('new_task', data => {
         this.success= true
         var app = this ;
          setTimeout(function(){ 
             app.success= false
             }, 3000);
		});
	}
	
}
</script>

<style>



</style>
