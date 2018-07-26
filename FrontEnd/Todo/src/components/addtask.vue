<template lang="html">

<div>
   <div class="form">
                <div class="form-group col-md-11">
                <input type="text" class="form-control" id="newtask" placeholder="enter new task" v-model='newtask'>
                </div>
                
                <div class="col-sm-1">
                        <button  class="btn btn-primary" @keydown.enter.prevent='submit'  @click='submit'>Add</button>
                        
                </div>

    </div> 
         
</div>         

    
</template>

<script lang="js">
  import axios from 'axios'; 
  import {bus} from '../main';
  export default  {
      name: 'addtask',
    
    data() {
      return {
        lists : [] , 
        newtask : ''
      }
    },
     
    methods: {
        submit(){
            if(this.newtask  !='' ){
                  let x= this ;
            let token  =this.$auth.getAccessToken() ;
            var config = {
                        headers: {'Accept' : 'application/x-www-form-urlencoded' , 
                        'Authorization': 'Bearer '+ token  , 
                        },
                    };
            let obj =   {'task':this.newtask ,'done' : 0} ;
                axios.post(this.$auth.Api + 'api/tasks/new', obj , config) 
                    .then(function (response) {
                        console.log("success ya khaled");
                        
                    })
                    ;
               
                 bus.$emit('new_task',this.newtask); 
                 this.newtask ='';   
            }
        }
        

    },

      mounted() {
        


    },
   
}
</script>

<style scoped>

  
</style>
