<template>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card rounded">
        <div class="row no-gutters ml-1 p-3  ">
          <div class="col-md-5 shadow-sm">
            <img
              src="../assets/pexels3.png"
              alt="login"
              class="login-card-img "
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
// import axios from "axios";
// import Error from "./Error.vue";
export default {
  name: "Register",
  components: {
    //  Error,
  },
  //   data() {
  //     return {
  //        selected:'',
  //       business_name: "",
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       password: "",
  //       password_confirmation: "",
  //       user_type: "",
  //       error: "",
  //       country_id:'101',
  //       state_id:'',
  //        city_id:'',
  //          list:[],
  //          state:[],
  //          city:[]
  //     };
  //   },
  //   methods: {
  //     async handalSubmit() {
  //       try {
  //         const response = await axios.post("users", {
  //           business_name: this.business_name,
  //           first_name: this.first_name,
  //           last_name: this.last_name,
  //           email: this.email,
  //           password: this.password,
  //           password_confirmation: this.password_confirmation,
  //           user_type: this.user_type,
  //           country_id: this.country_id,
  //           state_id: this.state_id,
  //           city_id: this.city_id
  //         });
  //         console.log(response);
  //         this.$router.push("/login");
  //       } catch (e) {
  //         this.error = "Error occurred!";
  //       }
  //     },

  //           getData()
  //                {
  //                   axios.get('countries?is_light=true')
  //                   .then((result)=>{

  //                      this.list=result.data.data;
  //                      console.warn(result)
  //                      this.getState()
  //                       console.warn("sonu result get country")
  //                     })
  //                },

  //                  getState()
  //                  {
  //                   axios.get('states_of_country?is_light=1' +this.country_id, {
  //                  params: {  country_id: this.country_id  }  })
  //                   .then((result)=>{
  //                      this.state=result.data.data;
  //                      console.warn(result)
  //                         this.getCity()
  //                       console.warn("sonu result get state")
  //                     })
  //                },
  //                 getCity()
  //                  {
  //                   axios.get('cities_of_state?is_light=1'+this.state_id, {
  //                  params: {  state_id: this.state_id  }  })
  //                   .then((result)=>{
  //                      this.city=result.data.data;
  //                      console.warn(result)
  //                       console.warn("sonu result get city")
  //                     })
  //                },

  //   },

  //                    mounted(){
  //                       this.getData()
  // // let user = localStorage.getItem('token');
  // // if(user)
  // // {

  // //  this.$router.push("/home");
  // // }
  //   },
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
