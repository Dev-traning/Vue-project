<template>
    <div>

         <Nav />
        <div style="  margin-top: 100px;">
 
  {{wallet.total_amount}} Rs


            </div>
    </div>
</template>

 

<script>
import {mapGetters} from 'vuex'
import Nav from '../components/Nav.vue'
    import axios from "axios";
export default {
    name: 'Wallet',
     components: {  Nav,  } ,
      data() {
       return {wallet:undefined,
         };
     },
      mounted(){
       axios.get('my-wallet')
           
           .then((resp)=>{
               // this.wallet=resp.data.data;
               this.wallet=resp.data.data;
              
               console.warn(resp.data.data)
           })
       },
 computed: {
       ...mapGetters(['user'])
     }
 
}
</script> 
