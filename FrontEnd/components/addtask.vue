<template lang="html">

   <div class=''>
      
       <input class="new-todo"
                    autocomplete="off" 
                    placeholder="What needs to be"  v-model="newtask">
                      <button @click="submit" type='submit' id="submit"> submit</button>
                   
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
            
            let x= this ;
            let obj =   {'task':this.newtask ,'done' : 0} ;
            axios.post('http://127.0.0.1:8000/api/tasks/new',obj) 
                .then(function (response) {
                    console.log(x.newtask );
                     console.log("success");
                })
                .catch(function (error) {
                    console.log('failed');
                });
               
                bus.$emit('new_task',this.newtask); 
                 this.newtask ='';   
        }
        

    },

      mounted() {
        


    },
   
}
</script>

<style scoped>
 #submit {
    width:49px;
    height:33px;
    margin-left: 485px;
    background-color: beige;
}

  
</style>
