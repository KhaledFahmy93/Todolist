<template >
		<tbody>
				<tr  v-for="(list, index) in lists" v-bind:key="list.id" v-bind:id="list.id" 
							v-bind:task="list.task" v-bind:done="list.done">
							<th scope="row">{{  index+1 }}</th>
							<td>{{ list.task }}</td>
							<td> <input type="checkbox" class="form-check-input"   :checked="list.done"> </td>
							<td> <input type="checkbox" class="form-check-input"   :checked="!list.done"> </td>
							<td> <button type="submit" class="btn btn-danger" @click='deleteitem(list)'>Delete</button>
                   <button type="submit" class="btn btn-primary" @click='ChangeTaskStatus(list)'> {{ (list.done)?"UnDone":"done" }}  </button></td>
				</tr>
		</tbody>	
    
</template>

<script lang="js"> 
import {bus} from '../main';
import axios from 'axios'; 
  export default{
	name: 'tasks',    
    data() {
      return {
		lists : [], 
      }
	},

    mounted() {

          if(this.$auth.isAuthenticataUser()){
             var x =this ;
        axios.get(this.$auth.Api + "api/tasks" )
        .then(function (response) {
          var  data =JSON.parse(response.request.response) ;
          x.lists= data.data;
          
        })
        .catch(function(error){
          console.log(error)
        });

          }
        
    },
    
	methods:{
    ChangeTaskStatus(list){
        var x =this ;
        axios.post(this.$auth.Api + "api/tasks/" + list.id +"/edit" ,  )
        .then(function (response) {
        
          var  data =JSON.parse(response.request.response) ;
          console.log(response);
          if(list.done){
            list.done= false 
          }else{
            list.done= true
          }
          
        })
        .catch(function(error){
          console.log(error)
        });
     
    },
		 deleteitem(list){
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                  this.$auth.deleteTask(list);
                  let  index = this.lists.indexOf(list);
                  this.lists.splice(index,1);
                    if (result.value) {
                      this.$swal(
                        'Deleted!',
                        'successfully deleted',
                        'success'
                      )
                    }
          });         
		 }
	},
 
  
    
    created() {
		bus.$on('new_task', data => {
			let	task = { 'task' : data , 'done' : 0}
         this.lists.push(task);

		});
	},
    

  }
</script>

<style scoped >

</style>
