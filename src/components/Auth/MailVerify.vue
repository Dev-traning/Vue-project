<template>
   <div class="mont-font">
      <img src="../../assets/1622832_documents_email_envelope_feed_letter_icon.svg" width="170px" class="mx-auto rounded d-block" alt="" style="margin:auto;">
      <h2 class="p-2 text-center login_heading text-uppercase fw-500">Verify Your E-mail - Please Enter the OTP</h2>
      <p class="pl-4 m-auto ml-4 text-center form_content font-xssss">Please enter the OTP that we have sent to your registered E-Mail Id to verify your account.</p>
      <form  class="p-1 m-4 mb-0 text-center d-block form-group" @submit.prevent="handalSubmit">
          <error v-if="error" :error="error" />
        
         <input id="partitioned" type="number"   v-model="email_otp" autocomplete="off"  />
         <div class="justify-content-center align-items-center p-4 pb-0">
            <button class="btn btn-block login-btn   p-1 " type="submit" >Verify</button> 
           
         </div>
      </form>
       <p class="mt-0 text-center">
               Don't receive OTP? 
               <button v-on:click="resend()"  class=" btn p-0 m-0 text-reset fw-bolder"
                  >Resend</button>
            </p>
   </div>
</template>

<script>
   import axios from "axios";
   import Error from "../Error.vue";
   export default {
     name: "Register",
     components: {
   Error,
     },
     data() {
       return {
          email_otp:'',
         
        
       };
     },
     methods: {
       async handalSubmit() {

          
          this.getemail = localStorage.getItem('useremail');
           try { 
          const response = await axios.post('verify-email', {email_otp:this.email_otp,email:this.getemail  });
           console.log(response)
           this.$router.push("/");
        } catch (e) {
        this.error = "OTP Verify Fail";
      }
          },
         async resend(){
             var emaill = localStorage.getItem('useremail');
               const respodnse = await axios.post('resend-email-otp', {email:emaill }); 
                console.log(respodnse)
          }
           },
    
       mounted(){
                   
                        this.email_otp = localStorage.getItem('email_otp');
   },
  
   };
</script>



<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

#partitioned {
     padding-left: 9px;
        letter-spacing: 36px;
        border: 0;
        background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
        background-position: bottom;
        background-size: 50px 1px;
        background-repeat: repeat-x;
        background-position-x: 35px;
        width: 291px;
}

.login_bg{
  

    /*height: 100%;*/
    height: 100vh;
     
    background-size: cover;
    background-position: center;
}

.login_card{
    width: 600px;
    margin: auto;
    padding: auto;
}

input {
         
        
        line-height: 50px;
        font-size: 25px;
        align-items: center;
        margin: 10px 5px;
      
   
 
        transition: all .2s ease-in-out;
        border-radius: 3px;

        /*&:focus {
          border-color: purple;
          box-shadow: 0 0 5px purple inset;
        }
        
        &::selection {
          background: transparent;
        }*/
      }
</style>