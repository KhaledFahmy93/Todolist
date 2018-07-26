Vue.component('to-do-lists', {
  props: ['task' , 'done'  ],
  template: `<div  class="view">
                <input class="toggle"   type="checkbox">
                <label>{{ task }}</label>
                <button class="destroy">delete</button>
            </div>
    `
})


new Vue({
    el: '.todoapp',
    data: {
      lists: [],
    },

    methods: {
      newItem(event){
        console.log(this.val)
       
      },


      tasks(){
        var vm = this
        // Fetch our array of posts from an API
        axios.get("http://127.0.0.1:8000/api/tasks")
        .then(function (response) {
          var data =JSON.parse(response.request.response) ;
          console.log(data.data)
          vm.lists = data.data

        })
        .catch(function(error){
          console.log(error)
        });
      },
      notdone(){
            var vm = this
              axios.get("http://127.0.0.1:8000/api/tasks/notdone")
            .then(function (response) {
              var data =JSON.parse(response.request.response) ;
              console.log(data.data)
              vm.lists = data.data
            })
            .catch(function(error){
              console.log(error)
            });
      },
        

      done(){
        var vm = this
        axios.get("http://127.0.0.1:8000/api/tasks/done")
      .then(function (response) {
        var data =JSON.parse(response.request.response) ;
        console.log(data.data)
        vm.lists = data.data
      })
      .catch(function(error){
        console.log(error)
      });

      }
      
    },
    
  })