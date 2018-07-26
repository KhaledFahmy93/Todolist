<template >
    <div > 
        <div class="alert alert-danger" v-if="error">
            <p>There was an error, unable to sign in with those credentials.</p>
        </div>
        <form autocomplete="off" @submit.prevent="login" method="post" >
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" >
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-default">Sign in</button>
        </form>
    </div>
</template>

<script>
  import axios from 'axios'; 

  export default {
    data(){
      return {
        email: null,
        password: null,
        error: false
      }
    },
    methods: {
      login(){
            if(this.email !== null && this.password !== null){
                let obj =   {
                            'username': this.email,
                            'password' : this.password , 
                            'client_id' : '2' , 
                            'client_secret' : 'BULanQC9uSuj8T10YyIZ9isjLC1MmkPcDBjoLzpn' ,
                            'grant_type' : 'password'
                        } ;
             let app = this ;
            axios.post(app.$auth.Api + 'oauth/token' , obj)
            .then(function(response){
                app.error = false;
                let token = response.data.access_token ;
                let expires = response.data.expires_in ;
                app.$auth.setAccessToken(token ,expires );
                console.log(token)
                 var config = {
                        headers: {'Accept' : 'application/json' , 
                        'Authorization': 'Bearer '+ token  , 
                        },
                    };
              
                axios.post( app.$auth.Api+ 'api/user' , {email : 'zstrosin@example.com'  }  , config ).
                        then(function(res){
                                app.$auth.setDataUser(res.data)    

                    }).catch(function(err){
                                console.log('this is an error 2 ')
                    });

                console.log(app.$auth.isAuthenticataUser())
                app.$router.push ({name: 'home'})



            }).catch(function () {
              app.error = true
            });
                
          

          }else{

             console.log('A username and password must be present')
          }
        
          


      } , 
     
    
    }
  } 
</script>

