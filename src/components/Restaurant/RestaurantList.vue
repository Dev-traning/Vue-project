<template>
   <div >
      <div class="main-wrapper">
         <div class="main-content right-chat-active">
            <div class="middle-sidebar-bottom">
               <div class="middle-sidebar-left">
                  <div class="row">
                     <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0  ">
                        <!-- <RestaurantAll />
                        <div class="row">
                           <VendorHome />
                        </div>
                        <SMRhome/> -->
                     </div>
                     <div class="col-xl-6 col-xxl-6 col-lg-6">
                        <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 " >
                           <div class="card-body  row align-items-center " v-if="user.user_type === '6'">

                 
  
 
                             <div class="col">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" :to="'/VendorShow/'+this.user.user_type">Vendor</router-link>
                              </div>
                              <div class="col text-center ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" to="/ManpowerShow">Manpower</router-link>
                              </div>
                              <div class="col text-center ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900 text-wrap badge  "  :to="'/SMRShow/'+this.user.user_type">Sale My Restaurant</router-link>
                   
                              </div>
                              <div class="col text-right ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" to="/FranchiseeShow">Franchisee</router-link>
                              </div>
                           </div>
                             <div class="card-body  row align-items-center " v-else-if="user.user_type === '8'">
                             <div class="col">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" :to="'/VendorShow/'+this.user.user_type">Jobs</router-link>
                              </div>
                              <div class="col text-center ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" to="/ManpowerShow">Manpower</router-link>
                              </div>
                             
                              <div class="col text-right ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900"  :to="'/SMRShow/'+this.user.user_type">Restaurant</router-link>
                              </div>
                           </div>
                             <div class="card-body  row align-items-center " v-else-if="user.user_type === '7'">
                             <div class="col">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" :to="'/SMRShow/'+this.user.user_type">Restaurant</router-link>
                              </div>
                              <div class="col text-center ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" :to="'/VendorShow/'+this.user.user_type">Vendor</router-link>
                                 
                              </div>
                             
                              <div class="col text-right ">
                                 <router-link active-class="active" class="fw-700 mb-0 font-xssss text-grey-900" :to="'/SMRShow/'+'requirement'">Requirment Posted</router-link>
                              </div>
                           </div>
                        </div>
                        <router-view></router-view>
                     </div>
                     <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                        <!-- <ManpowerHome/>
                        <div class="row">
                           <FranchiseeHome/>
                        </div> -->
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import { mapGetters } from "vuex";
//  import ManpowerHome from "../../components/Manpower/ManpowerHome.vue";
//  import FranchiseeHome from "../../components/Franchisee/FranchiseeHome.vue";
//  import RestaurantAll from "../../components/Restaurant/RestaurantAll.vue";
//  import VendorHome from "../../components/Vendor/VendorHome.vue";
// import SMRhome from "../../components/SMR/SMRhome.vue";

export default {
  name: "PostFeed",
 components: {
      //  ManpowerHome,
      //  FranchiseeHome,
      //  RestaurantAll,
      //  VendorHome,
      //  SMRhome
    
  }, 
  data(){ 
             return { 
                      activeBtn:''
         
            }},
    computed: {
    ...mapGetters(["user"]),
  },


   
};
</script>
<style scoped>

.active{
 background-color: #5c8db554;
    padding: 10px;
}
</style>