<template>
    <div class="mont-font">
         <div  > 
<h1 class="font-xl"> <b   ><span style="color: #004898">Restro</span ><span style="color: #c41e16">world</span></b ></h1>
                  
                     </div>


                        <div class="row mb-3">
                         <div class="btn-group " role="group" aria-label="Basic example">
  <router-link active-class="active" to="/RegisterNew" type="button" class="btn   shadow-none fw-500  font-xss  btn-outline-primary">SignUp</router-link>
  <router-link active-class="active" to="/EliteUser" type="button" class="btn shadow-none fw-500 font-xss text-primary-500 btn-outline-primary">Elite Account</router-link>
   
</div>
                      </div> 

    <router-view></router-view>


   <form>

 



                   

 
                     </form>
 
    </div>
</template>
<script>
   // import axios from "axios";
//    import Error from "../Error.vue";
   export default {
     name: "Register",
     components: {
    //    Error,
     },
     data() {
       return {
 
            dismissSecs: 5,
        dismissCountDown: 0,
          failMsg:'',
          verySucc:'',
          email_otp:'',
          searchQuery: '',
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
         state_id:'4030',
          city_id:'134096',
            list:[{}],
            state:[],
            city:[]
       };
     },

//  created() {
//   // Simple GET request using fetch
 
// fetch('https://api.ipify.org?format=json')
// .then(x => x.json())
// .then(({ ip }) => {
//     this.term = ip;
//     alert(this.term )
// });
// },
//      methods: {

// countDownChanged(dismissCountDown) {
//         this.dismissCountDown = dismissCountDown
//       },
    
//         veryMail(){
//            this.failMsg =''
//                   // this.$refs['modal'].show()
//               axios.post("users/email", {
//               email: this.email, 
//              country_id: this.country_id,
//              state_id: this.state_id,
//              city_id: this.city_id
//            }).then((res) => {
//           this.$refs['modal'].show()
//       this.email_otp =res.data.data.email_otp
 
//         }).catch((error) => {
//            this.failMsg = error.response.data.message
//            this.loading = false;

//         })
          

//         },

//            oTpVerify(){
          
//   axios.post('verify-email', {
//               email: this.email, 
//               email_otp:this.email_otp
//            }).then(() => {
//                localStorage.removeItem('email_otp');
//               localStorage.setItem("oldMAil", this.email);
//                  this.$refs['modal'].hide()
//                  this.email_otp=''
//                 this.verySucc ='Email Verify Plz select SignUp or Elite Account!!!'
 
//         }).catch((error) => {
//            this.failMsg = error.response.data.message
//            this.loading = false;
//            this.email_otp=''
//            this.dismissCountDown = this.dismissSecs

//         })
       

//         },
    
       
//        async handalSubmit() {
//            localStorage.setItem("useremail", this.email);
//             localStorage.setItem("password", this.password_confirmation);
          
//         //  try {
//            const response = await axios.post("users", {
//              business_name: this.business_name,
//              first_name: this.first_name,
//              last_name: this.last_name,
//              email: this.email,
//              password: this.password,
//              password_confirmation: this.password_confirmation,
//              user_type: this.user_type,
//              country_id: this.country_id,
//              state_id: this.state_id,
//              city_id: this.city_id
//            });
//          //   console.log(response);
            
//              localStorage.setItem("email_otp", response.data.data.email_otp);
//            this.$router.push("/MailVerify");
//         //  } catch (e) {
//         //    this.error = "Error occurred!";
//         //  }
//        },
       
   
   
//              getData(){
//                      axios.get('countries?is_light=true')
//                      .then((result)=>{
                       
//                         this.list=result.data.data;
                       
//                         this.getState()
                
//                        })},
   
//                     getState(){
                       
//                      axios.get('states_of_country?is_light=1' +this.country_id, {
//                     params: {  country_id: this.country_id  }  })
//                      .then((result)=>{
//                         this.state=result.data.data;
                   
//                            this.getCity()
//                           })},
//                    getCity(){
//                      axios.get('cities_of_state?is_light=1'+this.state_id, {
//                     params: {  state_id: this.state_id  }  })
//                      .then((result)=>{
//                         this.city=result.data.data;
                        
//                        })},
   
   
//      },
 

 

                   mounted(){

                    
                        // this.email_otp = localStorage.getItem('email_otp');
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
        letter-spacing: 36px;
        border: 0;
        background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
        background-position: bottom;
        background-size: 50px 1px;
        background-repeat: repeat-x;
        background-position-x: 35px;
        width: 291px;
}
 
 
 

 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):active, .show>.btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #0048a5;
    border-color: #007bff;
}
 
   /*# sourceMappingURL=login.css.map */
</style>
