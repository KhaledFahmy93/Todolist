<template>

</template>

<script>
         export default {
             created(){
                this.$router.push ({name: 'home'})
                this.$auth.Logout()
             }
               

         }
</script>