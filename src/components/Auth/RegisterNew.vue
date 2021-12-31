 <template>
    <div class="mont-font">
       
 

  
   <form @submit.prevent="handalSubmit">
                        <!-- <error v-if="error" :error="error"/> -->
                        <div class="form-group">
                            <small id="emailHelp" :class="['form-text text-danger', { 'mb-0'  : failMsg }]" v-if="failMsg">{{failMsg}}</small>     
                             <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select " aria-required="true" aria-invalid="false" v-model="user_type" required>
                              <option value="" disabled>Select Bussiness Type?</option>
                              <option value="6">Restaurant/Restaurant Owner</option>
                              <option value="7">Vendor (Supplier of Restaurant materials and services)</option>
                              <option value="8">Restaurant Professional (Chef, Captain, Manager, etc.)</option>
                           </select>
                        </div>
                        <div class="form-group" v-if="user_type !='8'"> <label for="email" class="sr-only">Email</label> <input type="Business" name="Business" class="form-control" v-show="user_type" v-model="business_name" placeholder='Business Name'> </div>
                        <div class="form-row">
                           <div class="form-group col-md-6"> <input type="text" class="form-control" placeholder="First Name" v-model="first_name" required> </div>
                           <div class="form-group col-md-6"> <input type="Text" class="form-control" placeholder="Last Name" v-model="last_name" required> </div>
                        </div>
                        <div class="form-row">
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="country_id" @change="getState()" required>
                                 <option value="" disabled selected>Country</option>
                                 <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="state_id" @change="getCity()" required>
                                 <option value="" disabled selected>State </option>
                                 <option v-for="item in state" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="city_id" required>
                                 <option value="" disabled selected>City</option>
                                 <option v-for="item in city" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                        </div>
                        <div class="form-group"> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="form-control" placeholder="Email address" v-model="email" required/> </div>
                        <div class="form-group "> <label for="password" class="sr-only">Password</label> <input type="password" name="password" id="password" class="form-control mb-0" placeholder="Password" v-model="password" required/> </div>
                        <div class="form-group mb-0"> <label for="password" class="sr-only">Confirm Password</label> <input type="password" name="password" id="password" class="form-control mb-1" placeholder="Confirm Password" v-model="password_confirmation" required/> 
                        <checkbox-accept @terms-accepted-event="processCheckboxAccept" />
                        
                           <small  v-if="displayWarning"  class="form-text text-danger">Please accept Terms & Privacy</small>
                        
                        </div>
                

                         <button type="submit" class="btn shadow-none btn-primary fw-500 font-xss text-primary-500 w-100 mb-2">{{loadingAc ? "Verify..." : "Sign Up"}}</button>
                     </form>
 <p class="login-card-footer-text">
                        Have an account? 
                        <router-link to="/" class="text-reset">Login</router-link>
                     </p>


                        <b-modal no-close-on-backdrop  scrollable show-close="ftrue" hide-footer id="modal-centerd" centered ref="modal" size="60">
            <button @click="$refs['modal'].hide()" type="button" class="closee" right='22' top='1' data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true ">&times;</span>
        </button>
      <div>
 


         <div class="mont-font">
          
<b-alert class="p-1 text-center" v-if="otpFail" :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0"  @dismiss-count-down="countDownChanged" >{{otpFail}}</b-alert>
      <img src="../../assets/1622832_documents_email_envelope_feed_letter_icon.svg" width="170px" class="mx-auto rounded d-block" alt="" style="margin:auto;">
      <h4 class="p-2 text-center login_heading text-uppercase fw-500">Verify Your E-mail - Please Enter the OTP</h4>
      <p class="pl-4 m-auto ml-4 text-center form_content font-xssss">Please enter the OTP that we have sent to your registered E-Mail Id to verify your account.</p>
      <form  class="p-1 m-4 mb-0 text-center d-block form-group" @submit.prevent="handalSubmit">
   
        
         <input id="partitioned" type="text" maxlength="6" autocomplete="off" v-model="email_otp" />
         <div class="justify-content-center align-items-center mt-4">
           
            <button type="button" class="btn shadow-none btn-primary fw-500 font-xss text-light-500  p-1" @click="oTpVerify">{{loading ? "Processing..." : "Verify"}}</button>
             <!-- <button @click="$refs['modal'].hide()" type="button" class="btn shadow-none btn-dark fw-500 font-xss text-dark-500  p-1 ml-3">Cancel</button> -->
         </div>
      </form>
       <p class="mt-0 text-center">Don't receive OTP? <button v-on:click="resend()"  class=" btn p-0 m-0 text-reset fw-bolder">
          Resend</button>
            </p>
   </div>


         
      </div>
      </b-modal>
    </div>
</template>
<script>
   import axios from "axios";
 import CheckboxAccept from './CheckboxAccept';
//    import Error from "../Error.vue";
   export default {
     name: "Register",
     components: {
         CheckboxAccept
    //    Error,
     },
     data() {
       return {
           termsAccepted: false,
        displayWarning: false,
        displaySuccess: false,
          check:'',
          dismissSecs: 5,
          resOTPMsf:'',
        dismissCountDown: 0,
          email_otp:'',
          otpFail:'',
          failMsg:'',
           loading:'',
           loadingAc:'',
          selected:'',
         business_name: '',
         first_name: '',
         last_name: '',
         email: '',
         password: '',
         password_confirmation: '',
         user_type: '',
         error: '', 
         country_id:'101',
         state_id:'',
          city_id:'',
            list:[],
            state:[],
            city:[]
       };
     },
     methods: {
            async resend(){
           
               const respodnse = await axios.post('resend-email-otp', {email:this.email })
               .then(() => {
                  this.resOTPMsf='Otp resend to your email successfully.'
               })
               
                console.log(respodnse)
          },

    oTpVerify(){
             this.loading = true;
            const response =  axios.post('verify-email', {
              email: this.email, 
              email_otp:this.email_otp
           }).then(() => {

                 this.$refs['modal'].hide()
                 this.email_otp=''
                this.verySucc ='Email Verify Plz select SignUp or Elite Account!!!'
                localStorage.setItem("token", this.tokenData);
                                 this.$router.push("/home");
                                location.reload()

 
        }).catch((error) => {
           this.otpFail = error.response.data.message
           this.loading = false;
           this.email_otp=''
           this.dismissCountDown = this.dismissSecs
           this.loading = false;

        })
           console.log(response);

        },
          processCheckboxAccept(accepted) {
        this.termsAccepted = accepted;
        this.displayWarning = false;
      },
       async handalSubmit() {
 if (!this.termsAccepted) {
          this.displayWarning = true;
        }
        else {
          this.loadingAc = true;
    
           const response = await axios.post("users", {
           
             business_name: this.business_name,
             first_name: this.first_name,
             last_name: this.last_name,
             email: this.email,
             password: this.password,
             password_confirmation: this.password_confirmation,
             user_type: this.user_type,
             country_id: this.country_id,
             state_id: this.state_id,
             city_id: this.city_id
           }).then((res) => {
               this.failMsg=''
        this.tokenData = res.data.data.authorization
      
             localStorage.setItem("UserDetails", JSON.stringify(res.data.data));
        this.$store.dispatch("user", res.data.user);
         this.$refs['modal'].show()
         this.loadingAc = false;
           
        }).catch((error) => {
           this.failMsg = error.response.data.message
           this.loadingAc = false;
         
     
        })

         
              
              
           console.log(response);
        }
          
        
  
          
       },
       
   
   
             getData(){
                     axios.get('countries?is_light=true')
                     .then((result)=>{
                         this.list=result.data.data;
                         if(this.country_id){
                           this.getState()
                       }
                       
                  
                       })},
   
                    getState(){
                  
                     axios.get('states_of_country?is_light=1' +this.country_id, {
                    params: {  country_id: this.country_id  }  })
                     .then((result)=>{
                        this.state=result.data.data;
                         if(this.state_id){
                           this.getCity()
                       }
                           
                      })},
                   getCity(){
                     axios.get('cities_of_state?is_light=1'+this.state_id, {
                    params: {  state_id: this.state_id  }  })
                     .then((result)=>{
                        this.city=result.data.data;
                      })}},
    

                   mounted(){
                      this.getData()

                       
 
// let user = localStorage.getItem('token');
// if(user)
// {
    
//  this.$router.push("/home");
// }
  },
  
   };
</script>
<style scoped>
   .login-card .form-control {
   padding: 0.375rem 1.75rem 0.375rem 0.75rem;
   font-size: 1rem;
   }
   .text-reset {
   color: #0048a5 !important;
   }
   hr {
   margin-top: 0rem;
   margin-bottom: 1rem;
   border: 0;
   border-top: 1px solid rgb(0 72 165);
   }
   .active{
 background-color: #0048a5;
     padding: 6px!important;
}
a.active  {
    text-decoration: none;
    outline: 0;
    color: #ffffff!important;
}

a{
  color: #0048a5!important; 
}


.modal .modal-content .closee { 
    right: 7px!important; 
    top: 7px!important; }
 

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
 
/* #partitioned {
     padding-left: 11px;
    letter-spacing: 41px;
        border: 0;
        background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
        background-position: bottom;
        background-size: 50px 1px;
        background-repeat: repeat-x;
        background-position-x: 35px;
        width: 291px;
} */
 
 
 

 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 
 
   /*# sourceMappingURL=login.css.map */
</style>
