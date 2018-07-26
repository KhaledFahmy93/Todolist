<template lang="html">

    	<tbody>
				<tr  v-for="(list, index) in lists" v-bind:key="list.id" v-bind:id="list.id" 
							v-bind:task="list.task" v-bind:done="list.done">
							<th scope="row">{{  index+1 }}</th>
							<td>{{ list.task }}</td>
							<td> <input type="checkbox" class="form-check-input" id="exampleCheck1"  :checked="list.done"> </td>
							<td> <input type="checkbox" class="form-check-input" id="exampleCheck1" :checked="!list.done"> </td>
							<td> <button type="submit" class="btn btn-danger" @click='deleteitem(list)'>Delete</button></td>
				</tr>
		</tbody>	
</template>

<script lang="js">
  import axios from 'axios'; 
  export default  {
      name: 'done',
    data() {
      return {
        lists : [],
      }
    },
    methods: {
      deleteitem(list){
          this.$auth.deleteTask(list);
        let  index = this.lists.indexOf(list);
        this.lists.splice(index,1);

      }
        

    },

      mounted() {
         if(this.$auth.isAuthenticataUser()){
           var x =this ;
        let token  =this.$auth.getAccessToken() ;
       
        axios.get(this.$auth.Api + "api/tasks/done" ) 
        .then(function (response) {
          var  data =JSON.parse(response.request.response) ;
          x.lists= data.data;
        })
        .catch(function(error){
          console.log(error)
        });
         }
    },
   
}
</script>

<style scoped >
  
</style>
