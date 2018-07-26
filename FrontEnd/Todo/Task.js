export default  function(Vue) {
    Vue.task ={
      deleteTask(){
          alert("ssssssss")
        }
              
    }

        Object.defineProperties(Vue.prototype,{
            $task : {
              get:() => {
                return Vue.task 
              }
            }
          })
  }

  