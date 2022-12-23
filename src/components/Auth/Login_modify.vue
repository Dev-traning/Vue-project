<template>
  <div class="mainContainer">
    <div class="form">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 70%; margin-left: 15%;  height: fit-content; padding-top: 1.5rem;  border-radius: 10px;"
      >
        <b-row no-gutters>
          <b-col
            md="6"
            style="text-align: center;display: flex; align-items: center;justify-content: center;"
          >
            <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img> -->
            <b-card-text
              ><b class="logo">
                <span style="color: #004898;font-size: 60px;">Restro</span
                ><span style="color: #c41e16;font-size: 60px;">world</span></b
              >
              <p
                style="
                    color: #a7a7a7;
                    font-size: 20px;
                  "
              >
                Welcome to the First <br />
                Global Resturant Community <br />Join Billions of Resturant &
                Hotel<br />
                Across the globe
              </p>
            </b-card-text>
          </b-col>
          <b-col md="6">
            <b-card-body
              style="display: flex;
    align-content: center;
    justify-content: center;"
            >
              <b-card-text>
                <form @submit.prevent="handleSubmit">
                  <!-- <error v-if="error" :error="error" class="p-1"/> -->
                  <div
                    id="emailHelp"
                    :class="['input-text text-danger', { 'mb-0': error }]"
                    v-if="error"
                  >
                    {{ error }}
                  </div>
                  <div
                    id="emailHelp"
                    :class="['input-text text-warning', { 'mb-0': notVery }]"
                    v-else-if="notVery"
                  >
                    Account is not varified
                    <a href="#" @click="accountVerify"><u>Please Verify</u></a>
                  </div>
                  <div
                    id="emailHelp"
                    :class="['input-text text-success', { 'mb-0': veriSu }]"
                    v-else-if="veriSu"
                  >
                    {{ veriSu }}
                  </div>

                  <div class="form-group">
                    <label for="Email" class="sr-only">Email</label>
                    <input
                    style="height:3rem; width:20rem; border-radius: 10px;"
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="Email address"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="Password" class="sr-only">Password</label>
                    <input
                    style="height:3rem; width:20rem; border-radius: 10px;"
                      type="password"
                      name="password"
                      id="password"
                      class="form-control mb-1"
                      placeholder="Password"
                      v-model="password"
                    />

                    <div class="d-flex">
                      <div style="font-size:15px; margin-top: auto;">
                        <!-- <b-form-checkbox class="p-0 m-0 " v-model="remember_me"    value="1"  unchecked-value="0" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remember me </b-form-checkbox> -->

                        <input
                          type="checkbox"
                          name="terms"
                          id="terms"
                          v-model="check"
                        />
                        Remember me
                      </div>
                      <div class="ml-auto">
                        <router-link
                          to="forgot"
                          class="forgot-password-link text-left"
                          style="font-size:15px;"
                          >Forgot password?</router-link
                        >
                      </div>
                    </div>
                  </div>

                  <!-- <button class="btn btn-block login-btn mb-4" type="submit">{{loading ? "Loading..." : "Sign In"}}</button>  -->
                  <button
                    type="submit"
                    style="border-radius: 10px;"
                    class="
                        btn
                        shadow-none
                        btn-primary
                        fw-500
                        font-lg
                        text-primary-400
                        w-100
                        mb-2
                      "
                  >
                    {{ loading ? "Loading..." : "Sign In" }}
                  </button>
                </form>
                <p class="login-card-footer-text">
                <span>
                  Don't have an account? &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</span>
                  <span style="color:red">
                  <router-link
                    to="/register"
                    class="text-reset font-xsss w-100 fw-500 "
                    >Register here</router-link
                  >
                  </span>
                </p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-modal no-close-on-backdrop scrollable show-close="ftrue" hide-footer id="modal-centerd" centered ref="modal" size="60">
        <button @click="$refs['modal'].hide()" type="button" class="closee" right='22' top='1' data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true ">&times;</span>
        </button>
        <div>

            <div class="mont-font">

                <b-alert class="p-1 text-center" v-if="otpFail" :show="dismissCountDown" dismissible variant="warning" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">{{otpFail}}</b-alert>
                <img src="../../assets/1622832_documents_email_envelope_feed_letter_icon.svg" width="170px" class="mx-auto rounded d-block" alt="" style="margin:auto;">
                <h4 class="p-2 text-center login_heading text-uppercase fw-500">Verify Your E-mail - Please Enter the OTP</h4>
                <p class="pl-4 m-auto ml-4 text-center form_content font-xssss">Please enter the OTP that we have sent to your registered E-Mail Id to verify your account.</p>
                <form class="p-1 m-4 mb-0 text-center d-block form-group" @submit.prevent="handalSubmit">

                    <input id="partitioned" type="text" maxlength="6" autocomplete="off" v-model="email_otp" />
                    <div class="justify-content-center align-items-center mt-4">

                        <button type="button" class="btn shadow-none btn-primary fw-500 font-xss text-light-500  p-1" @click="oTpVerify">{{loading ? "Processing..." : "Verify"}}</button>
                        <!-- <button @click="$refs['modal'].hide()" type="button" class="btn shadow-none btn-dark fw-500 font-xss text-dark-500  p-1 ml-3">Cancel</button> -->
                    </div>
                </form>
                <p class="mt-0 text-center">Don't receive OTP? <button v-on:click="resend()" class=" btn p-0 m-0 text-reset fw-bolder">
                        Resend</button>
                </p>
            </div>

        </div>
    </b-modal>
    </div>
    <div class="howwork">
      <h1 class="h1">How Restroworld Work</h1>
      <img class="img" src="../../../src/assets/Group 50.png" />
      <p class="p">
        Billions of Restaurants, Vendors,Chefs, Captains and many more are<br />
        waiting for you at Restroworld.
      </p>
    </div>
    <div class="expolre">
      <h1>Explore Restroworld</h1>
      <div class="tbl">
      <!-- <LandingPage/> -->
      <table>
  <tr>
    <th></th>
    <th style="background-color: #4d4d4d;
    color: white;
    text-align: center;
    border-radius: 26px;
    ">Free Sign-up</th>
    <th style="background-color: #4d4d4d;
    color: white;
    text-align: center;
    border-radius: 26px;
    ">Elite Sign-up</th>
  </tr>
  <tr>
    <td>Can do sign-up</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Post on Restroworld social media feed</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Can create jobs and view all the CVs.</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-xmark"  size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Can view  all Vendors</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-xmark"  size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Can view all Manpower</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-xmark"  size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Can provide Franchisee</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-xmark"  size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d" /></td>
  </tr>
  <tr>
    <td>Purchase and sale of old Restaurant Equipments/Scraps</td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-xmark"  size="xl" color="#4d4d4d" /></td>
    <td style="text-align:center"><font-awesome-icon icon="fa-solid fa-circle-check " size="xl" color="#4d4d4d"  /></td>
  </tr>
</table>
      </div>
    </div>
    <div class="fotter">
            <b class="logo">
                <span style="color: #004898;font-size: 74px;">Restro</span>
                <span style="color: #c41e16;font-size: 74px;">world</span>
            </b>

            <p>Feturing a Platform where you can find all the requirements for your Resturant</p>

                </div>
      <div class="white">
  <h5 class="p1">copyrights@restroworld</h5>
  
  
  
  
  
  </div>
  
  
  </div>
  
  
 

</template>
<script>
import axios from "axios";

export default {
    name: "Login_modify",
    data() {
        return {
            image: { backgroundImg: "url('/src/assets/slide_bg_pattern.png')" },
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
                   

                oTpVerify() {
                this.loading = true;
                const response = axios.post('verify-email', {
                    email: this.email,
                    email_otp: this.email_otp
                }).then(() => {

                    this.$refs['modal'].hide()
                    this.email_otp = ''
                    this.verySucc = 'Email Verify Plz select SignUp or Elite Account!!!'
                    localStorage.setItem("token", this.tokenData);
                    this.$router.push("/home/User");
                    location.reload()

                }).catch((error) => {
                    this.otpFail = error.response.data.message
                    this.loading = false;
                    this.email_otp = ''
                    this.dismissCountDown = this.dismissSecs
                    this.loading = false;

                })
                console.log(response);

                },
      async handalSubmit() {
            if (!this.termsAccepted) {
                this.displayWarning = true;
            } else {
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
                    this.failMsg = ''
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
    // components: { LandingPage }
};
</script>
<style scoped>
.mainContainer {
  background-image: url("../../assets/slide_bg_pattern.png");
  position: relative;
  background-repeat: repeat-x(8);
  /* height: 100%; */
  /* background-position: center; */
  /* background-size: cover; */
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 0.5fr;
  row-gap: 3rem;
  /* background-color: '##F9F9F9'; */
}

.form {
  grid-row: 1/2;
  margin-top: 10rem;
}

.howwork {
  grid-row: 2/3;
  text-align: center;
  display: grid;
  grid-template-rows: 10% 80% 10%;
}

.howwork h1 {
  grid-row: 1/2;
  font-weight: 700;
  font-size: 50px;
  color: #4d4d4d;
}

.howwork img {
  grid-row: 2/3;
  position: absolute;
  height: 370px;
  margin-left: 30%;
  margin-top: 40px;
}

.howwork p {
  grid-row: 3/4;
  font-weight: 600;
  color: #707070;
  margin-top: 0px;
}
.expolre {
  grid-row: 3/4;
  text-align: center;
  margin-top: 10%;
  
  
}

.tbl{
  display: grid;
  grid-template-columns: 15% 70% 15%;
}

.expolre h1{
  font-weight: 700;
  font-size: 50px;
  color: #4d4d4d;

}

table {
  margin-top:4rem;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  grid-column: 2/3;
  border-collapse: separate;
  border-spacing: 50px 0;
  font-weight: 400;
}


td, th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 8px;
  
}

tr:nth-child(even) {
  /* background-color: #dddddd; */
}
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
.fotter {
  grid-row: 4/5;
  text-align: center;
}
a.active {
    text-decoration: none;
    outline: 0;
    color: #ffffff !important;
}

a {
    color: #0048a5 !important;
}

.modal .modal-content .closee {
    right: 7px !important;
    top: 7px !important;
}

.fotter p{
  font-size: 1.5rem;
    font-weight: 700;
    color: #4d4d4d;
}

.white{
  background-color: white;
  padding: 5px;
  
}

.white h5{
  margin-left: 1.5625rem;
  display: inline-block;
}
/*
.logoSide{
    grid-column: 2/3;
}

.formSide{
    grid-column: 3/4;
} */
</style>
