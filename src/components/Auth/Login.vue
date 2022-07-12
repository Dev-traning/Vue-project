<template>
   <div>
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0 mont-font">
         <div class="container">
            <div class="card login-card rounded">
               <div class="row no-gutters">
                  <div class="col-md-5"> <img src="../../assets/logo-5.png" alt="login" class="login-card-img"/> </div>
                  <div class="col-md-7">
                     <div class="card-body">
                        <div class="brand-wrapper text-center">
                           <b class="logo" ><span style="color: #004898">Restro</span ><span style="color: #c41e16">world</span></b > 
                           <p style=" color: rgb(0, 72, 152); font-size: 12px; margin-left: 4px; margin-top: -8px; font-weight: bold; " >Restaurant Industry Is Here</p>
                           <p style=" color: #a7a7a7; font-size: 12px; margin-left: 4px; margin-top: -8px; margin-bottom: 3rem !important; " > Billions of Restaurants, Vendors, Chefs, Captains <br/>are waiting for you at Restroworld. </p>
                        </div>

                    
                        <form @submit.prevent="handleSubmit">
                           <!-- <error v-if="error" :error="error" class="p-1"/> -->
                            <div id="emailHelp" :class="['input-text text-danger', { 'mb-0'  : error }]" v-if="error">{{error}}</div> 
                             <div id="emailHelp"  :class="['input-text text-warning', { 'mb-0'  : notVery }]" v-else-if="notVery">Account is not varified <a href="#" @click="accountVerify"><u>Please Verify</u></a></div> 
                             <div id="emailHelp" :class="['input-text text-success', { 'mb-0'  : veriSu }]" v-else-if="veriSu">{{veriSu}}</div> 

                            
                           <div class="form-group"> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="form-control" placeholder="Email address" v-model="email"/> </div>
                           <div class="form-group mb-4">
                              <label for="password" class="sr-only">Password</label> 
                              <input type="password" name="password" id="password" class="form-control mb-1" placeholder="Password" v-model="password"/> 
             
                              <div class="d-flex">
      <div>
         

             <!-- <b-form-checkbox class="p-0 m-0 " v-model="remember_me"    value="1"  unchecked-value="0" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remember me </b-form-checkbox> -->

             <input type="checkbox" name="terms" id="terms" v-model="check"/> Remember me


      </div>
      <div class="ml-auto">
        <router-link to="forgot" class="forgot-password-link text-left" >Forgot password?</router-link >
      </div>
 </div>

 
                             
                           </div>

      

                           <!-- <button class="btn btn-block login-btn mb-4" type="submit">{{loading ? "Loading..." : "Sign In"}}</button>  -->
                           <button type="submit" class="btn shadow-none btn-primary fw-500 font-xss text-primary-500 w-100 mb-2">{{loading ? "Loading..." : "Sign In"}}</button>
                        </form>
                        <p class="login-card-footer-text">
                           Don't have an account? 
                           <router-link to="/register" class="text-reset font-xsss w-100 fw-500 " >Register here</router-link >
                        </p>
                     </div>
                  </div>
               </div>
            </div>       
         </div>
      </main>

      
                        <b-modal no-close-on-backdrop  scrollable show-close="ftrue" hide-footer id="modal-centerd" centered ref="modal" size="60">
            <button @click="$refs['modal'].hide()" type="button" class="closee" right='22' top='1' data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true ">&times;</span>
        </button>
      <div>
 


         <div class="mont-font">
          
<b-alert class="p-1 text-center" v-if="failMsg" :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0"  @dismiss-count-down="countDownChanged" >{{failMsg}}</b-alert>
      <img src="../../assets/1622832_documents_email_envelope_feed_letter_icon.svg" width="170px" class="mx-auto rounded d-block" alt="" style="margin:auto;">
      <h2 class="p-2 text-center login_heading text-uppercase fw-500">OTP Verification</h2>
      <p class="pl-4 m-auto ml-4 text-center form_content font-xssss">Please enter your registered email and we will send your password reset instruction to this email.</p>
      <form  class="p-1 m-4 mb-0 text-center d-block form-group" >
   
        
         <input id="partitioned" type="number"  autocomplete="off" v-model="email_otp" />
         <div class="justify-content-center align-items-center mt-4">
           
            <button type="button" class="btn shadow-none btn-primary fw-500 font-xss text-light-500  p-1" @click="verifyEemail" >Verify</button>
             <!-- <button @click="$refs['modal'].hide()" type="button" class="btn shadow-none btn-dark fw-500 font-xss text-dark-500  p-1 ml-3">Cancel</button> -->
         </div>
      </form>
       <p class="mt-0 text-center">Don't receive OTP? <button v-on:click="resend()"  class=" btn p-0 m-0 text-reset fw-bolder"
                  >Resend  </button>
            </p>
   </div>


         
      </div>
      </b-modal>
      
   </div>
</template>

<script>
import axios from "axios";
 
// import Error from "../Error.vue";
export default {
  name: "Login",
  components: {
   //  Error,
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      email: '',
      password: '',
      remember_me: '',
      error: "",
      loading:'',
      notVery:'',
      email_otp:'',
      veriSu:'',
      check:''

    };
  },
  methods: {
     countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

     accountVerify(){
   const response =  axios.post('resend-email-otp', {
              email: this.email, 
             
           }).then(() => {
          this.$refs['modal'].show()
    
      // this.email_otp =res.data.data.email_otp
 
        }).catch((error) => {
           this.failMsg = error.response.data.message
           this.loading = false;

        })
           console.log(response);


    
     },

     verifyEemail(){
          const response =  axios.post('verify-email', {
              email: this.email, 
              email_otp:this.email_otp
             
           }).then(() => {
       this.notVery=''
       this.veriSu='Email is varified successfully'
    this.$refs['modal'].hide()
      // this.email_otp =res.data.data.email_otp
 
        }).catch((error) => {
         
           this.failMsg = error.response.data.message
           this.loading = false;
            this.dismissCountDown = this.dismissSecs

        })
           console.log(response);
     },

     resend(){
       axios.post('resend-email-otp', {
              email: this.email, 
             
             
           }).then(() => {
       
    
               // this.email_otp =res.data.data.email_otp
 
        }).catch((error) => {
           this.failMsg = error.response.data.message
           this.loading = false;

        })

     },

  
    async handleSubmit() {

           if(this.check==true){
       this.valuCo='1'
    }else if(this.check==false){
       this.valuCo='0'
    }

   this.veriSu=''
 this.error=''
 this.notVery=''
      try {
     this.loading = true;
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
          remember_me:this.valuCo
        }) 
         this.loading=false;

        localStorage.setItem("token", response.data.data.authorization);
        localStorage.setItem('user_id', response.data.data['id']);
        localStorage.setItem("UserDetails", JSON.stringify(response.data.data));
        this.$store.dispatch("user", response.data.user);

             if (localStorage.getItem('useremail')) {
                                 this.$router.push("/home");
                                  location.reload()
                         localStorage.removeItem('useremail');
                          localStorage.removeItem('password');
                          localStorage.removeItem('email_otp');
            } else {
               this.$router.push("/home");
                location.reload()  }
      
        
      } catch (e) {
         if(e.response.data.status_code=='405'){
            this.notVery = e.response.data.message +'url'
         }else if(e.response.data.status_code=='422'){
                this.error = e.response.data.message
         }
      
      
        setTimeout(function(scope) {
             scope.loading = false;
        }, 1000, this);
       
      }
    },
  },

  mounted(){

     
        this.email = localStorage.getItem('useremail');
        this.password = localStorage.getItem('password');
     

 
if(localStorage.getItem('token')) 
{
 this.$router.push("/home");
} 
  },
 
};
</script>

 <style scoped>
 
 
#partitioned {
   padding-left: 9px;
    letter-spacing: 37px;
    border: 0;
    background-image: linear-gradient(to left, #36353530 70%, rgba(255, 255, 255, 0) 0%);
    background-position: bottom;
    background-size: 46px 1px;
    background-repeat: round;
    background-position-x: 78px;
    width: 270px;
}
 
 
 

 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
 </style>