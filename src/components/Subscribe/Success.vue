<template>
   <div >
      <div class="main-wrapper" style="">
         <div class="main-content right-chat-active">
            <div class="middle-sidebar-bottom">
               <div class="middle-sidebar-left">
                  <div class="row">
                     <div  >
                        <div class="row">
                           <div class="col-sm-2">
                           </div>
                           <div class="col-sm-8 text-center">
                              <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 ml-3"  >
                                 <div >
                                    <div class="row">
                                       <div class=" p-4 pt-0">
                                          <div class="payment">
                                             <div class="payment_header">
                                                <div class="check"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>
                                             </div>
                                             <div class="content p-4 pb-0">
                                          

                                                 <div v-if="errormas" class="alert alert-danger" role="alert">{{errormas}}</div>

                                                <img src="../../assets/Thankyou.svg" class="w-100 rounded-3" height="250" width="100"  />
                                                <h1 class="text-danger fw-600 text-danger-600 font-xl" >Thank you..!</h1>
                                                <p class="pl-5 pr-5 fw-500 text-danger-500 font-xs lh-1" >Thank You For Subscription, <br/>Now you are eligible to view all offers.</p>
                                                <!-- <a href="#">Go to Home</a> -->
                                                <a v-bind:href="'/home'">Go to Home</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-sm-2">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";
export default {
    Name:'Success',
    data() {
    return {
        errormas:''
    }},
      methods: {

      },

        mounted() {
             this.subscribe = JSON.parse(localStorage.getItem("subscribe"));
         
              const response = axios.post('payment/'+this.subscribe.id,{
                  payment_status:'1'
              })
                .catch(error =>{
                              if(error){this.errormas=error.response.data.message} 

                              console.log(error)
                           })

                             if (response.data.status_code == '200') {
                               this.$router.go(this.$router.currentRoute)
                                localStorage.removeItem('subscribe');
    }

                            
              console.log(response)
                
         
     },



}
</script>


<style scoped>
    .content 
        {
            text-align:center;
        }

        .content  h1
        {
            font-size:25px;
            padding-top:25px;
        }

        .content a
        {
            width:200px;
            height:35px;
            color:#fff;
            border-radius:30px;
            padding:5px 10px;
            background:#f01b1b;
            transition:all ease-in-out 0.3s;
        }

        .content a:hover
        {
            text-decoration:none;
            background:#000;
        }
</style>