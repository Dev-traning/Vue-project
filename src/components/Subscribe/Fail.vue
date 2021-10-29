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
            <div class="content">
               <div v-if="errormas" class="alert alert-danger mt-2 mb-0" role="alert">{{errormas}}</div>
               <h1>Opps ! Something Went Wrong</h1>
               <p class="pl-5 pr-5"> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
               <a v-bind:href="'/home'">Go to Home</a>

               <!-- <router-link to="/home">Go to Home</router-link> -->
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

                   
                  <!-- <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                     
                     <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 ml-3">
                         sdfdsfdsfdsfds
                     </div>
                  </div> -->
                 
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
        errormas:'',
        coupon_code:'',
        errormasss:''
    }},
      methods: {

      },

        mounted() {
           
            this.subscribe = JSON.parse(localStorage.getItem("copondetails"))
            if(this.subscribe){
               this.coupon_code=this.subscribe.applied_coupon
              
            }else{
               this.coupon_code=''
              
            }
  
          if(localStorage.getItem("hash")){
                 
               axios.post("/subscription", { plan_id: "1", coupon_code: this.coupon_code })
               .then((result) => { if (result.data.status_code == 201) {
                 axios.post('payment/'+result.data.data.id,{payment_status:'2'})
                 .catch((error) => { 
                           if(error.response.data.status_code == '422'){
                              localStorage.removeItem('hash');
                              localStorage.removeItem('copondetails');
                              this.$router.go(this.$router.currentRoute)
                           }})}})}

            if(localStorage.getItem('expireSession')){
                    setTimeout(() => {localStorage.removeItem('expireSession')}, 10000);
             }else if(!localStorage.getItem('expireSession')){
                 this.$router.push("/home");
             }
         
         
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