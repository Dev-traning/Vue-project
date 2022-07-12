<template>
   <body class="color-theme-blue mont-font">
      <div class="">
         <!-- navigation left -->
         <Nav />
         <!-- navigation left -->
         <!-- main content -->
         <div class="main-content right-chat-active">
            <div class="middle-sidebar-bottom">
               <div class="middle-sidebar-left">
                  <div class="row">
                     <div class="col-xl-3 col-xxl-2 col-lg-3 pe-0">
                        <nav class="navigation scroll-bar">
                           <div class="container ps-0 pe-0">
                                <div class="card-body  w-100 bg-success border-0   rounded-3">
         
         <h4 class="font-xss text-white fw-600  mb-0 text-center">Main Manu</h4>
      </div>
                              <div class="p-1 bg-white theme-dark-bg">
                                
  
                                 <ul class="mt-0 p-2">

                                     <li class="mt-1 mb-1"><router-link active-class="active" :to="'/ManpowerListings/ManpowerEditProfile/'+id" class="theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"><i class="feather-circle font-md btn-round-sm me-0 p-0"></i>Edit Profile</router-link></li>

                                    <li class="mt-1 mb-1">
                                       <router-link active-class="active" to="/ManpowerListings/MyAppliedJobs" class="theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center">
                                       <i class="feather-circle font-md btn-round-sm me-0 p-0"></i> My applied Jobs</router-link></li>

                                       <li class="mt-1 mb-1">
                                          <router-link active-class="active" to="/ManpowerListings/JobsList" class="theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"><i class="feather-circle font-md btn-round-sm me-0 p-0"></i> Jobs List </router-link></li>
                                   

                                    
                                   <li class="mt-1 mb-1" @click="logOut()"><a href="#" class="theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"><i class="feather-lock font-md btn-round-sm me-2 p-0"></i> Logout</a></li>
                                    
                                 </ul>
                              </div>
                           </div>
                        </nav>
                     </div>
                     <div class="col-xl-9 col-xxl-10 col-lg-9">
                      
                           <div class=" theme-dark-bg right-chat-active">
                              <div class="middle-sidebar-bottom">
                                 <div class="middle-sidebar-left">
                                    <div class="">
                                       <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                        <router-view></router-view>
                                       </div>
                                       <!-- <div class="card w-100 border-0 p-2"></div> -->
                                    </div>
                                 </div>
                              </div>
                           </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</template>
<script>
import axios from "axios";
   import {mapGetters} from 'vuex'
   import Nav from '../../components/Nav.vue'
   export default {
       name: 'Listings',
         components: {
       Nav,
       
      } ,
      data(){
        return{
           status: true,
           id:this.$route.params.id,

         
        } 
      }, 
        methods: {
        async logOut(){
           if(confirm('Are you sure you want to log out?')){
    await axios.get("logout")
        localStorage.clear();
        this.$store.dispatch('user',null);
         this.$router.push('/');
           }
      
         }
     },
    computed: {
          ...mapGetters(['user'])
        }
    
   }
</script>