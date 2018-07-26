import axios from 'axios';
export default  function(Vue) {
  
    Vue.auth ={
              Api : 'http://localhost:8000/' ,
              getAccessToken(){
                return localStorage.getItem('KEY_TOKEN');
              } , 

              isAuthenticataUser(){
                  if(this.getAccessToken()){
                      return true
                  }
                  return false
              },

              Logout(){
                return this.destroyAccessToken();
              },

           setAccessToken(token , expiration ) {
             localStorage.setItem('KEY_TOKEN' , token)
             localStorage.setItem('EXPIRATION' , expiration )
            },

             setDataUser(data){
              localStorage.setItem('name' , data.name);
              localStorage.setItem('email' , data.email);
              localStorage.setItem('id' , data.id);
             },
             getUserName(){
               return localStorage.getItem('name')
             },
             getUserEmail(){
              return localStorage.getItem('email')
            },
            

           destroyAccessToken(){
               localStorage.removeItem('KEY_TOKEN');
               localStorage.removeItem('EXPIRATION');
               localStorage.removeItem('name');
               localStorage.removeItem('email');
               localStorage.removeItem('id');
           },
           deleteTask(list){
            let token  =this.getAccessToken() ;
            var config = {headers: {'Accept' : 'application/json' , 
                              'Authorization': 'Bearer '+ token   },
                          };
            axios.delete(this.Api + "api/tasks/"+list.id+"/delete" , config )
              .then(function (response) {
          if(response.request.response){
           
          } 
              
              })
              .catch(function(error){
                console.log(error)
              });
         
          }
    }

        Object.defineProperties(Vue.prototype,{
            $auth : {
              get:() => {
                return Vue.auth
              }
            }
          })
  }

  
  
    
  
   
  
 