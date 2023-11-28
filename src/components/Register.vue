<template>
   <main class="d-flex align-items-center min-vh-100 py-3 py-md-0 " style="background-color: #fff;">
      <div class="mt-5"><span>&nbsp;</span></div>

      <div class="container  mt-5">
         <div class="card login-card rounded">
            <div class="row no-gutters ml-1 p-3  ">
               <div class="col-md-5 shadow-sm"> 
                  <img src="../assets/pexels-dids-5360447.jpg" alt="login" class="login-card-img "/> 
               </div>
               <div class="col-md-7">
                  <div class="card-body">
                    

                     <router-view></router-view>
                    
                    
                  </div>
               </div>
            </div>
         </div>


         <!-- what is Restroworld  -->
         <div class="mt-5"><span>&nbsp;</span></div>

         <div class="mt-5 text-center"  >
            <label style=" color: rgb(34, 34, 34); font-weight: 900 bolder; font-size: 4vh;"  class="  w-200 fw-900" >What Is   </label>  <label style=" color: rgb(34, 34, 34); font-size: 4vh; " class="  w-900 fw-900"> &nbsp;<span class="space1" style="color: #004898 !important">Restro</span><span class="space1" style="color: #c41e16 !important">world</span> ?</label>
            <!-- <img src="../assets/whatisrestro.png" alt=""> -->
         </div>

         <div class="mt-1"><span>&nbsp;</span></div>

        <div style="display: flex;align-items: center; justify-content: center;">
         <div class="card login-card rounded mt-5" style="max-width: 1100px;">

               
            <div class="row  p-4  ">
               <div class="mb-5" >
                  <img   src="../assets/logo-2.jpg" style="height: fit-content;  position: relative;" alt="login" class="login-card-img "/> 
              
               </div>
               <div class="header text-center mb-4"> <label for="content-title " style="font-size: 2.2vh;" class=" w-900 fw-700">
                  Restroworld: Restroworld is the first global community specially designed for the Restaurant Industry.
               </label></div>
               <div>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color" >
                     The restaurant landscape has witnessed a transformative shift with the advent of Restroworld, a pioneering global platform tailored exclusively for the restaurant industry. In a digital era where connectivity defines success, Restroworld emerges as a game-changer, fostering a thriving ecosystem for both restaurateurs and vendors.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     At its core, Restroworld stands as an unparalleled community, serving as a nexus where every facet of the restaurant industry converges. Whether you’re a seasoned restaurateur seeking innovative solutions or a vendor aiming to expand your clientele, Restroworld offers an expansive marketplace and networking haven.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Imagine a digital agora where restaurateurs explore a myriad of vendors worldwide, encompassing diverse solutions ranging from technology to ingredients, and marketing to equipment. This dynamic marketplace not only offers a treasure trove of options but also cultivates a global synergy, enabling restaurateurs to curate bespoke solutions tailored to their specific needs.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     On the flip side, vendors gain access to an extensive network of restaurants spanning continents. From established chains to cozy local eateries, the platform acts as a gateway for vendors to showcase their offerings to a diverse clientele, fostering growth and collaborations across borders.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Restroworld, in essence, redefines the dynamics of the restaurant industry by amplifying connectivity and efficiency. By amalgamating cutting-edge technology and a user-centric approach, it streamlines operations and catalyzes innovation. Restaurant owners find solace in the ease of discovering, vetting, and engaging with vendors, while vendors revel in the opportunity to showcase their offerings to a global audience.

                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Furthermore, Restroworld transcends being merely a marketplace; it’s a thriving community fostering collaboration, learning, and growth. Through forums, webinars, and knowledge-sharing initiatives, industry experts, aspiring entrepreneurs, and seasoned veterans converge to exchange insights, trends, and best practices, nurturing a culture of continuous improvement.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     User experiences within Restroworld have been nothing short of transformative. Restaurant owners express elation at discovering niche vendors offering unique solutions that transcend geographical boundaries. Testimonials flood in, citing increased efficiency, cost-effectiveness, and elevated customer satisfaction resulting from collaborations initiated on the platform.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Vendors, too, share success stories, recounting how Restroworld catapulted their businesses onto a global stage, allowing them to forge partnerships they’d only dreamed of. The platform’s intuitive interface, robust search functionalities, and personalized recommendations garner praise, making it a go-to destination for businesses seeking growth and innovation.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Beyond the tangible benefits, Restroworld has sparked a paradigm shift in the restaurant industry's ethos. It champions inclusivity, diversity, and sustainability. Restaurants leveraging the platform gravitate towards eco-friendly practices, sourcing locally, and embracing cultural diversity in their menus, all facilitated through connections made on Restroworld.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Looking ahead, Restroworld envisions an even more interconnected and vibrant ecosystem. Future iterations promise enhanced AI-driven matchmaking, predictive analytics, and augmented reality experiences, further revolutionizing how restaurants discover and engage with vendors. The platform also pledges to champion social causes, supporting initiatives that empower communities and foster positive change.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     In conclusion, Restroworld isn’t just a platform; it's a movement reshaping the restaurant industry. It encapsulates the essence of globalization, collaboration, and progress, propelling businesses towards a future where boundaries cease to exist. As it continues to evolve and innovate, Restroworld stands as a testament to the power of connectivity, community, and visionary entrepreneurship in shaping industries for the better.
                  </p>
               </div>
             </div>
         </div></div>

         <div class="mt-1"><span>&nbsp;</span></div>

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
   .para-color{
      color: rgba(0, 0, 0, 0.693) ;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 3%;   
      
   }
   .para-color:last-child {
      margin-bottom: 0%; 
   }

   /*# sourceMappingURL=login.css.map */
</style>
