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
                           <p style=" color: #a7a7a7; font-size: 12px; margin-left: 4px; margin-top: -8px; margin-bottom: 3rem !important; "> Billions of Restaurants, Vendors, Chefs, Captains <br/>are waiting for you at Restroworld. </p>
                        </div>
                        <form @submit.prevent="handleSubmit">
                           <div id="emailHelp" :class="['input-text text-danger', { 'mb-0'  : error }]" v-if="error">{{error}}</div>
                           <div id="emailHelp" :class="['input-text text-warning', { 'mb-0'  : succ }]" v-if="succ">{{succ}}</div>
                           <div id="emailHelp" :class="['input-text text-success', { 'mb-0'  : veriSu }]" v-else-if="veriSu">{{veriSu}}</div>
                           <div class="form-group">  
                              <input type="email" name="email" autocomplete="off" class="form-control" placeholder="Please Enter Email Address" v-model="email"/> 
                           </div>
                           <button type="submit" class="btn shadow-none btn-primary fw-500 font-xss text-primary-500 w-100 mb-2">{{loading ? "Loading..." : "Submit"}}</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
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
      email: "",
      password: "",
      password_confirmation: "",
      remember_me: "",
      error: "",
      loading: "",
      notVery: "",
      email_otp: "",
      veriSu: "",
      check: "",
      succ: "",
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    async handleSubmit() {
      try {
        this.loading = true;
        await axios
          .post("forgot-password", {
            email: this.email,
          })
          .then((result) => {
            if (result.data.status_code == 200) {
              this.succ = "We have emailed your password reset link";
              setTimeout(
                function (scope) {
                  scope.$router.push("/");
                },
                10000,
                this
              );
            }
            this.loading = false;
          });
      } catch (e) {
        if (e.response.data.status_code == "405") {
          this.notVery = e.response.data.message + "url";
        } else if (e.response.data.status_code == "422") {
          this.error = "";
          this.error = e.response.data.message;
        }

        setTimeout(
          function (scope) {
            scope.loading = false;
          },
          1000,
          this
        );
      }
    },
  },

  mounted() {
    if (localStorage.getItem("token")) {
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
  background-image: linear-gradient(
    to left,
    #36353530 70%,
    rgba(255, 255, 255, 0) 0%
  );
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