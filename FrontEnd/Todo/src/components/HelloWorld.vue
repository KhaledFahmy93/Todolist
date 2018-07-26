<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios'; 
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name : "khaled",
      age : '23',
      lists :[]
    }
  },

  mounted() {
     console.log(this.name) 
       axios.get("http://127.0.0.1:8000/api/tasks/done")
        .then(function (response) {

          let data =JSON.parse(response.request.response) ;
        console.log(this.name)
          this.lists= data.data;
          
        })
        .catch(function(e){
          console.log(e)

    });
  },

  created() {
    // console.log(this.name)
  }
  
}
</script>


<style scoped>

</style>
