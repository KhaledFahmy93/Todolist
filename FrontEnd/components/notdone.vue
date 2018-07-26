<template lang="html">
   <div class=''>
      <div class='view'  v-for="list in lists" v-bind:key="list.id" v-bind:id="list.id" 
                 v-bind:task="list.task" v-bind:done="list.done">
                  <input class="toggle" :checked='!list.done'   type="checkbox">
                  <label>{{ list.task }}</label>
                      <button class="destroy"  @click='deleteitem(list)' >delete</button>
      </div>
    </div>
</template>

<script lang="js">
  import axios from 'axios'; 
  export default  {
    name: 'notdone',
    props: [],
   
    
    data: function() {
      return {
          lists : []
      }
    },
    created() {
         var x =this ;
        axios.get("http://127.0.0.1:8000/api/tasks/notdone")
        .then(function (response) {
          var  data =JSON.parse(response.request.response) ;
          x.lists= data.data;
        })
        .catch(function(error){
          console.log(error)
        });
    
    }

   

}
</script>

<style scoped >
 
</style>
