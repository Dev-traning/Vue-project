<template>
    <div>

         <Nav />
        <div style="  margin-top: 100px;">
work pending api==side

            </div>
    </div>
</template>

 

<script>
import {mapGetters} from 'vuex'
import Nav from './Nav.vue'
    import axios from "axios";
export default {
    name: 'Followers',
     components: {  Nav,  } ,
      data() {
       return {followers:undefined,
         };
     },
      mounted(){
       axios.get('users/my-followers')
           
           .then((resp)=>{
               // this.wallet=resp.data.data;
               this.followers=resp.data.data;
              
               console.warn(resp.data.data)
           })
       },
 computed: {
       ...mapGetters(['user'])
     }
 
}
</script> 
