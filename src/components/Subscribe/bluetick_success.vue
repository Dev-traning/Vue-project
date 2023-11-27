<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        
        
        return{

          

        }
    },
    mounted(){

        axios.post('payment-bluetick/'+localStorage.getItem('bluetick_user_id'), {
                payment_status:"1",
             blue_tick:"1"

        }).then(()=>{

            this.$router.push('/Home/User')


        }).catch(()=>{
            this.$router.push('/Home/User')


        });
        
    }
}
</script>