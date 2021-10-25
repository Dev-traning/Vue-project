<template>
  <div id="app" v-cloak>
   
     

      <!-- Begin page content -->
    <main  >
     
  <router-view/>
    </main>
  </div>
</template>

<script>
 
 import axios from 'axios'
 

export default {
  name: 'App',
  components: {
    
    
  } , 
  async created() {
        // var toakne = "Bearer "
        const response = await axios.get('user');
      //  this.users = response.data;
      this.$store.dispatch('user', response.data)
    }
}
</script>
 
 
 


