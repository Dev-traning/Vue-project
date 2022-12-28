<template>
    <div class="mont-font">
       
 

  
   <form @submit.prevent="handalSubmit">
                        <!-- <error v-if="error" :error="error"/> -->
                        <div class="form-group mb-2">
                            <div id="emailHelp" :class="['input-text text-danger', { 'mb-0'  : failMsg }]" v-if="failMsg">{{failMsg}}</div>     
                             <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select " aria-required="true" aria-invalid="false" v-model="user_type" required>
                              <option value="" disabled>Select Bussiness Type?</option>
                              <option value="6">Restaurant/Restaurant Owner</option>
                              <option value="7">Vendor (Supplier of Restaurant materials and services)</option>
                              <option value="8">Restaurant Professional (Chef, Captain, Manager, etc.)</option>
                           </select>
                        </div>
                        <div class="form-group mb-2" v-if="user_type !='8'"> <label for="email" class="sr-only">Email</label> <input type="Business" name="Business" class="form-control" v-show="user_type" v-model="business_name" placeholder='Business Name'> </div>
                        <div class="form-row">
                           <div class="form-group col-md-6 mb-2"> <input type="text" class="form-control" placeholder="First Name" v-model="first_name"> </div>
                           <div class="form-group col-md-6 mb-2"> <input type="Text" class="form-control" placeholder="Last Name" v-model="last_name"> </div>
                        </div>
                        <div class="form-row">
                           <div class="form-group col-md-4 mb-2">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="country_id" @change="getState()">
                                 <option value="" disabled selected>Country</option>
                                 <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4 mb-2">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="state_id" @change="getCity()" >
                                 <option value="" disabled selected>State </option>
                                 <option v-for="item in state" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4 mb-2">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="city_id" >
                                 <option value="" disabled selected>City</option>
                                 <option v-for="item in city" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                        </div>
                        <div class="form-group mb-2"> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="form-control" placeholder="Email address" v-model="email"/> </div>

                          <div class="form-row ">
                           <div class="form-group col-md-6 mb-2">
                              
                       <input type="password" name="password" id="password" class="form-control mb-0" placeholder="Password" v-model="password"/>
                           </div>
                           <div class="form-group col-md-6 mb-2">
                            <label for="text" class="sr-only">Confirm text</label> 
                     <input type="password" name="password" id="password" class="form-control mb-1" placeholder="Confirm Password" v-model="password_confirmation"/> 
                           </div>
                         
                        </div>
  


                           <div class="form-row ">
                           <div class="form-group col-md-6 mb-2">
                              
                        <input type="text" name="text" id="text" class="form-control mb-1" placeholder="GST No. Optional" v-model="gst_no" />
                           </div>
                           <div class="form-group col-md-6 mb-2">
                       
                        <input type="number" name="text" id="text" class="form-control mb-1" placeholder="Mobile No." v-model="mobile_no"  />
                           </div>
                         
                        </div>
 <div id="emailHelp" class="input-text text-success" v-if="couponSuMsg">{{couponSuMsg}}</div> 
   <div id="emailHelp" class="input-text text-danger" v-if="coponerr">{{coponerr}}</div> 
                  <!-- <div class="input-group mb-2"> 
                      
          <input v-model="coupon_code" type="text" class="form-control " style="top: 0px;" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" >
          <div class="input-group-append">
            <button class="btn shadow-none btn-primary fw-500 font-xss text-primary-500" type="button" id="button-addon2" @click="couponApply" >apply</button>
          </div>
        </div>   -->


 

        
                           <div class="row ">

                               <div class="  col-md-3 mb-0  col-sm-3">
                              
                   <p class="p-1 mb-0 fw-600 font-xss">Use Coupon:  </p>
                           </div>

                           <div class="  col-md-4 mb-0 col-sm-4 pr-1 pl-0">
                              
                   <p class=" border-dotted rounded p-1 mb-1 fw-600 font-xss">{{plansData[0].coupon_code}}<span type="button" class="border rounded float-right fw-400 pl-1 pr-1  btn-primary text-light" @click="cuponCopy"> Copy </span></p>
                           </div>
                           <div class="  col-md-5 mb-0 col-sm-5 pl-0">
                       
                        <div class="input-group mb-2"> 
                      
          <input v-model="coupon_code" type="text" class="form-control " style="top: 0px;" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" >
          <div class="input-group-append">
            <button class="btn shadow-none btn-primary fw-500 font-xss text-primary-500" type="button" id="button-addon2" @click="couponApply" >Apply</button>
          </div>
        </div> 
                           </div>
                         
                        </div>

                        

           <div class="form-group "> 
                       
              

                            <!-- <p class="border p-1 rounded" v-if="plansData[0].countries ">{{plansData[0].countries.currency_symbol}}&nbsp;{{plansData[0].countries.pivot.amount}}</p>
                            
                              <p class="border p-1 rounded" v-else-if="couponData.amount_pay ">{{plansData[0].countries.currency_symbol}}&nbsp;{{couponData.amount_pay}}.00</p>

 -->

                            <p class="border p-1 rounded" >{{symbol}} {{amount_payPrint}}</p>
                           
                          </div>
                

<!-- <input type="checkbox" name="terms" id="terms" onchange="activateButton(this)"/> By creating an account you agree to our <a href="#" class="text-reset">Terms & Privacy</a>.  -->
                        <button type="submit" class="btn shadow-none btn-primary fw-500 font-xss text-primary-500 w-100 mb-2">{{paynowbtn ? "Processing..." : "Pay Now"}}</button>
                        <!-- <button class="btn btn-block login-btn mb-4 font-xxss" type="submit" > Sign Up </button>  -->
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
      <h2 class="p-2 text-center login_heading text-uppercase fw-500">OTP Verification</h2>
      <p class="pl-4 m-auto ml-4 text-center form_content font-xssss">Please enter your registered email and we will send your password reset instruction to this email.</p>
      <form  class="p-1 m-4 mb-0 text-center d-block form-group" @submit.prevent="handalSubmit">
   
        
         <input id="partitioned" type="number" maxlength="6" autocomplete="off" v-model="email_otp" />
         <div class="justify-content-center align-items-center mt-4">
           
            <button type="button" class="btn shadow-none btn-primary fw-500 font-xss text-light-500  p-1" @click="oTpVerify">{{loading ? "Processing..." : "Verify"}} </button>
             <!-- <button @click="$refs['modal'].hide()" type="button" class="btn shadow-none btn-dark fw-500 font-xss text-dark-500  p-1 ml-3">Cancel</button> -->
         </div>
      </form>
       <p class="mt-0 text-center">Don't receive OTP? <button v-on:click="resend()"  class=" btn p-0 m-0 text-reset fw-bolder"
                  >Resend</button>
            </p>
   </div>


         
      </div>
      </b-modal>



       <form method='POST' class="pl-5 pr-5" id="paymentForm" :action='payuUrl'>
               <input type="hidden" name="key" v-model="mkey"  size="64" />
               <input type="hidden" name="txnid"  v-model="txnid" size="64" />
               <input type="hidden" name="amount" v-model="amount_pay" size="64" />
               <input type="hidden" name="productinfo"  v-model="productInfo"  size="64" />
               <input type="hidden" name="firstname"  v-model="first_name"   size="64"/>
               <input type="hidden" name="service_provider" value="payu_paisa" size="64" /> 
               <input type="hidden" name="email" v-model="email"  size="64"/>
               <input type="hidden" name="phone" v-model="mobile_no"   size="64"/>
               <input type="hidden" name="lastname"  v-model="last_name"  size="64"/>
               <input type="hidden" name="surl" v-model="surl" />
               <input type="hidden" name="furl" v-model="furl"  />
               <input type="hidden" name="hash" id="hash" v-model="hash" size="64">
          </form>

          
    </div>
</template>
<script>
   import axios from "axios";
 
//    import Error from "../Error.vue";
   export default {
     name: "Register",
     components: {
         
    //    Error,
     },
     data() {
       return {


// testing Mode

      //  payuUrl:'https://test.payu.in/_payment',
      //  mkey: "rjQUPktU",
      //  saltKey:'e5iIg1jwi8',
      //  surl: window.location.origin + "/home/User/Success",
      //  furl: window.location.origin + "/home/User/Fail",

// secure Mode

       payuUrl:'https://secure.payu.in/_payment',
       mkey: "nxpvv9VZ",
       saltKey:'3oFxUMtWG2', 
       surl: "https://restroworld.com/Home/User/SuccessElitePage",
       furl: window.location.origin + "/home/User/Fail",


      plan: { name: "Plan 3" },
      rate: "1",
      amount_payPrint:'',
      symbol:'',
    
      key: '',
      isHidden: false,
      users: '',
      usersid:'',
      bussines: "",
      fullName: "",
   
      productInfo: "1 Year Plan",
     
      gst: '',
      coupon_code: '',
      coponerr:'',
      couponSuMsg:'',
      couponData:'',
      coupon: '',
      amount_pay: '',
      couponerr: '',
      subscribest: [],
      message: "Everyone come and see how good I look!",
      
      txnid: this.makeid(),
    
      hash: this.hash,
     


          dismissSecs: 5,
        dismissCountDown: 0,
        plansData:[{coupon_code:''}],
      
          email_otp:'',
          otpFail:'',
          paynowbtn:'',
          failMsg:'',
           loading:'',
           mobile_no:'',
          selected:'',
         business_name: '',
         first_name: '',
         last_name: '',
         email: '',
         password: '',
         password_confirmation: '',
         user_type: '',
         error: '', 
         gst_no:'',
         country_id:'101',
         state_id:'',
          city_id:'',
            list:[],
            state:[],
            city:[]
       };
     },
     methods: {
        cuponCopy(){
  var copyDat = this.plansData[0].coupon_code
  navigator.clipboard.writeText(copyDat)
 
 if(copyDat){
    const Toast = this.$swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', this.$swal.stopTimer)
    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Copied ' + this.plansData[0].coupon_code
})

 }else{
    alert('Something went Wrong')
 }

        },

 
couponApply(){
     
      axios.get('apply-coupon/1', {
         params:{
            country_id:this.country_id,
              coupon_code: this.coupon_code, 
         }
           
             
             
           }).then((res) => {
            // console.log("heloooo",res.data.payable_amount);
            // console.log(res.data);
            // console.log(this.amount_payPrint);
              this.coponerr=''
              this.couponSuMsg= 'Coupon Apply successfully'
          
               this.couponData=res.data.data;
               // this.amount_pay=res.data.data.amount_pay
               localStorage.setItem("copondetails", JSON.stringify(res.data.data));
               this.amount_payPrint = res.data.payable_amount;
               this.amount_pay = this.amount_payPrint;





               // this.amount_payPrint = 2;


               // alert("lock",this.couponSuMsg);
               // this.calculate=this.amount_payPrint/100*90

               //    var remov= parseFloat(this.calculate).toFixed(0)
               //    this.amount_payPrint= remov+'.00'
               

             
 
        }).catch((error) => {
           this.couponSuMsg=''
           this.coupon_code=''
           
          
           this.coponerr = error.response.data.message
           this.loading = false;

        })
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

    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

   signInButtonPressed() {

      
      
      var data = this.mkey + "|" + this.txnid + "|" + this.amount_pay + "|" + this.productInfo + "|" + this.first_name + "|" + this.email + "|||||||||||";
      var sha512 = require("js-sha512");
      var salt = this.saltKey;
      var hash = sha512(data + salt);
      
      if (hash) {
        
         localStorage.setItem("hash", hash);
         localStorage.setItem("expireSession", 'sesion12dgtdb');
      }
      console.log(hash);
      console.log(data);

      document.getElementById("hash").value = hash;
     
      document.getElementById("paymentForm").submit();
    },


             planfor(){
               
                     axios.get('user/plan', {
                    params: {  country_id: this.country_id  }  })
                     .then((result)=>{
                        this.coupon_code=''
                        this.couponSuMsg=''
                        this.plansData=result.data.data;
                        this.symbol= result.data.data[0].countries.currency_symbol
                        this.amount_payPrint=result.data.data[0].countries.pivot.amount
                        localStorage.setItem("copondetails", JSON.stringify(result.data.data));

                        // // this.amount_pay =result.data.data[0].countries.pivot.amount
                        // this.amount_pay = 1
                        // this.symbol= result.data.data[0].countries.currency_symbol
                        // // this.amount_payPrint=result.data.data[0].countries.pivot.amount
                        // this.amount_payPrint=20000
                     
                            })},

    oTpVerify(){
          this.loading = true;
            axios.post('verify-email', {
              email: this.email, 
              email_otp:this.email_otp
           }).then((result) => {
          this.verySucc ='Email Verify Plz select SignUp or Elite Account!!!'
            localStorage.setItem("token", this.tokenData);

if(result.data.status_code=='200'){
   console.log();
   this.signInButtonPressed()
}
                              //    this.$router.push("/home");
                              //   location.reload()

 
        }).catch((error) => {
           this.otpFail = error.response.data.message
           this.loading = false;
           this.email_otp=''
           this.dismissCountDown = this.dismissSecs

        })
         //   console.log(response);

        },


       async handalSubmit() {
        
            this.paynowbtn = true;
            await axios.post('users/elight-signup', {
            business_name: this.business_name,
            mobile_no: this.mobile_no,
            first_name: this.first_name,
            last_name: this.last_name,
            gst_no:this.gst_no,
            email: this.email,
            plan_id:'1',
            password: this.password,
            password_confirmation: this.password_confirmation,
            user_type: this.user_type,
            country_id: this.country_id,
            state_id: this.state_id,
            city_id: this.city_id,
            coupon_code:this.coupon_code
           }).then((res) => {
               this.failMsg=''
               
        this.tokenData = res.data.data.authorization
      //   this.email_otp = res.data.data.email_otp
            //  localStorage.setItem("token", res.data.data.authorization);
            //  localStorage.setItem("UserDetails", JSON.stringify(res.data.data));
             localStorage.setItem("token", res.data.data.authorization);
        localStorage.setItem('user_id', res.data.data['id']);
        localStorage.setItem("UserDetails", JSON.stringify(res.data.data));

        
            //  this.usersid = this.users.subscription.id;  


            //  console.log(res.data.data);

        this.$store.dispatch("user", res.data.user);
         this.$refs['modal'].show()
         this.paynowbtn = false;
            //  if (localStorage.getItem('oldMAil')) {
            //                      this.$router.push("/home");
            //                       location.reload()
            //              localStorage.removeItem('oldMAil');
            //               localStorage.removeItem('password');
            //               localStorage.removeItem('email_otp');
            // } else {

            //    this.$router.push("/home");
            //   location.reload()  }
 
        }).catch((error) => {
           
           this.failMsg = error.response.data.message
           this.paynowbtn = false;
         
     
        })},
       
   
   
             getData(){
                     axios.get('countries?is_light=true')
                     .then((result)=>{
                       
                        this.list=result.data.data;
                      
                          if(this.country_id){
                            
                            
                           this.getState()
                       }
                   
                       })
                       },
   
                    getState(){
                              this.planfor()
                     axios.get('states_of_country?is_light=1' +this.country_id, {
                    params: {  country_id: this.country_id  }  })
                     .then((result)=>{
                         var amount =this.amount_payPrint
                              this.amount_payPrint=amount
                              this.couponSuMsg=''
                              
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
               
                       
                       })},
   
   
     },
    

                   mounted(){
                     //  this.surl=window.location.origin + "/home/User/Success",
                     //  alert(this.surl)
                      this.getData()
                      
                     
                       
 
if(localStorage.getItem('token')) 
{
 this.$router.push("/home");
} 
  },
  
   };
</script>
<style scoped>
   .login-card .form-control {
   padding: 0.375rem 1.75rem 0.375rem 0.75rem;
   font-size: 1rem;
   min-height: 38px!important;
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
 
 
 

 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 
 .border-dotted{
    border: 1px dashed #b1bdcd;
    background-color: #c41e1621;
}
   /*# sourceMappingURL=login.css.map */
</style>
