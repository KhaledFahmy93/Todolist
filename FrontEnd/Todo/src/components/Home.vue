<template>
    <div>
        
        <h1 v-if="this.$auth.isAuthenticataUser()">hello {{ this.$auth.getUserName() }} You are logged In pro!</h1>

    </div>
    
</template>

<script lang="js"> 

import {bus} from '../main';
import addtask from './addtask.vue'
import tasks from './tasks.vue'
import axios from 'axios'; 
  export default{
    name: 'home',
    components: {
    addtask  , 
    tasks
  },
    
    data() {
      return {
		lists : [], 
      }
	},

    mounted() {
       
    },
    
	methods:{
		
	},
 
  
    
    created() {
		bus.$on('new_task', data => {
				console.log(this.lists)
			let	task = { 'task' : data , 'done' : 0}
         this.lists.push(task);

		});
	},
    

  }
</script>

