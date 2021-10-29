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
                           <error v-if="error" :error="error"/>
                           <div class="form-group"> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="form-control" placeholder="Email address" v-model="email"/> </div>
                           <div class="form-group mb-4">
                              <label for="password" class="sr-only">Password</label> 
                              <input type="password" name="password" id="password" class="form-control mb-1" placeholder="Password" v-model="password"/> 
             
                              <div class="d-flex">
      <div>
         

             <b-form-checkbox class="p-0 m-0 " v-model="remember_me"    value="1"  unchecked-value="0" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remember me </b-form-checkbox>


      </div>
      <div class="ml-auto">
        <router-link to="forgot" class="forgot-password-link text-left" >Forgot password?</router-link >
      </div>
 </div>

 
                             
                           </div>

      

                           <button class="btn btn-block login-btn mb-4" type="submit">{{loading ? "Loading..." : "Sign In"}}</button> 
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
   </div>
</template>

<script>
import axios from "axios";
 
import Error from "../Error.vue";
export default {
  name: "Login",
  components: {
    Error,
  },
  data() {
    return {
      email: 'krishan@gmail.com',
      password: '12345678',
      remember_me: '',
      error: "",
      loading:'',
    };
  },
  methods: {

  
    async handleSubmit() {
   
 
      try {
     this.loading = true;
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
          remember_me:this.remember_me
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
        this.error = "Invalid id password";
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

 