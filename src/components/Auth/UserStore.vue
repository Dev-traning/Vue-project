<template>
    <div class="mont-font">
         <div class="brand-wrapper text-center">
                        <p class="mb-2 h1 text-primary">SignUp Now</p>
                        <hr/>
                     </div>
   <form @submit.prevent="handalSubmit">
                        <!-- <error v-if="error" :error="error"/> -->
                        <div class="form-group">

                           
                           <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select " aria-required="true" aria-invalid="false" v-model="user_type" required>
                              <option value="" disabled>Select Bussiness Type?</option>
                              <option value="6">Restaurant/Restaurant Owner</option>
                              <option value="7">Vendor (Supplier of Restaurant materials and services)</option>
                              <option value="8">Restaurant Professional (Chef, Captain, Manager, etc.)</option>
                           </select>
                        </div>
                        <div class="form-group" v-if="user_type !='8'"> <label for="email" class="sr-only">Email</label> <input type="Business" name="Business" class="form-control" v-show="user_type" v-model="business_name" placeholder='Business Name'> </div>
                        <div class="form-row">
                           <div class="form-group col-md-6"> <input type="text" class="form-control" placeholder="First Name" v-model="first_name"> </div>
                           <div class="form-group col-md-6"> <input type="Text" class="form-control" placeholder="Last Name" v-model="last_name"> </div>
                        </div>
                        <div class="form-row">
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="country_id" @change="getState()">
                                 <option value="" disabled selected>Country</option>
                                 <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="state_id" @change="getCity()" >
                                 <option value="" disabled selected>State </option>
                                 <option v-for="item in state" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                           <div class="form-group col-md-4">
                              <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="city_id" >
                                 <option value="" disabled selected>City</option>
                                 <option v-for="item in city" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
                           </div>
                        </div>
                        <div class="form-group"> <label for="email" class="sr-only">Email</label> <input type="email" name="email" id="email" class="form-control" placeholder="Email address" v-model="email"/> </div>
                        <div class="form-group "> <label for="password" class="sr-only">Password</label> <input type="password" name="password" id="password" class="form-control mb-0" placeholder="Password" v-model="password"/> </div>
                        <div class="form-group mb-4"> <label for="password" class="sr-only">Confirm Password</label> <input type="password" name="password" id="password" class="form-control mb-1" placeholder="Confirm Password" v-model="password_confirmation"/> <input type="checkbox" name="terms" id="terms" onchange="activateButton(this)"/> By creating an account you agree to our <a href="#" class="text-reset">Terms & Privacy</a>. </div>
                        <button class="btn btn-block login-btn mb-4" type="submit" > Sign Up </button> 
                     </form>
 <p class="login-card-footer-text">
                        Have an account? 
                        <router-link to="/" class="text-reset">Login</router-link>
                     </p>
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
       async handalSubmit() {
           localStorage.setItem("useremail", this.email);
            localStorage.setItem("password", this.password_confirmation);
          
        //  try {
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
           });
           console.log(response);
            
             localStorage.setItem("email_otp", response.data.data.email_otp);
           this.$router.push("/MailVerify");
        //  } catch (e) {
        //    this.error = "Error occurred!";
        //  }
       },
       
   
   
             getData(){
                     axios.get('countries?is_light=true')
                     .then((result)=>{
                       
                        this.list=result.data.data;
                        console.warn(result)
                        this.getState()
                         console.warn("sonu result get country")
                       })},
   
                    getState(){
                     axios.get('states_of_country?is_light=1' +this.country_id, {
                    params: {  country_id: this.country_id  }  })
                     .then((result)=>{
                        this.state=result.data.data;
                        console.warn(result)
                           this.getCity()
                         console.warn("sonu result get state")})},
                   getCity(){
                     axios.get('cities_of_state?is_light=1'+this.state_id, {
                    params: {  state_id: this.state_id  }  })
                     .then((result)=>{
                        this.city=result.data.data;
                        console.warn(result)
                         console.warn("sonu result get city")
                       })},
   
   
     },
    

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
   /*# sourceMappingURL=login.css.map */
</style>
