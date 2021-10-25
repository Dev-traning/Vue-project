<template>
   <div class="container">
      <div class="row" v-if=" this.users.user_type === '6' || this.users.user_type === '7'">

           
                <div class="ml-3 col-12"  v-for="item in vendorData.slice(0,2)" v-bind:key="item.id">
                                 <div class="p-1 mb-3 overflow-hidden bg-white border-0 card w-100 hover-card shadow-xss rounded-xxl" >
                                    <div class="card-image w-100"> 
 
                                         <img :src="item.photo" alt="event" class="w-100" width="250.5" height="187.88" v-if="item.photo"/> 

                                        <img src="../../assets/no_image_available.jpg" alt="event" class="w-100" width="250.5" height="187.88" v-else/> 
                                        </div>
                                    <div class="pb-0  mt-1 ps-0 pe-0">
                                       <div class="p-0 bg-greylight border-light-md rounded-xxl theme-dark-bg" >
                                          <h4 class="pl-3 mb-0 fw-700 font-xss ls-3 lh-27 text-grey-800" > {{item.name}} <span class=" ls-3 d-block font-xsssss text-grey-500 fw-500" >12 Jan, 2021</span ></h4>
                                       </div>
                                       
                                          <h4 class="mt-2 text-center font-xssss fw-500 text-grey-500">
                                              <span class="d-block lh-25 mb-1">{{item.comments.slice(0,65)}}</span>
                                              <!-- <span class="d-block lh-30">Restaurant leader?</span> -->
                                              
                                               <router-link  type="button" class="btn btn-link text-decoration-none m-0 p-0" v-if="is_subscribed === user.is_subscribed"   :to="'/read-more/'+item.user_type_text+'/'+item.id">Read More</router-link>
                                               <button type="button" class="btn btn-link text-decoration-none m-0 p-0" v-b-modal.subscribealert v-else>Read More</button>
                                               </h4>
                                       
                                    </div>
                                 </div>
                              </div>

   
   
      </div>

      <div class="row" v-if="this.users.user_type === '8'">

           
                <div class="ml-3 col-12"  v-for="item in jobs.slice(0,2)" v-bind:key="item.id">
                                 <div class="p-1 mb-3 overflow-hidden bg-white border-0 card w-100 hover-card shadow-xss rounded-xxl" >
                                    <div class="card-image w-100"> 
 
                                         <img :src="item.restaurant.photo" alt="event" class="w-100" width="250.5" height="187.88" v-if="item.restaurant.photo"/> 

                                        <img src="../../assets/no_image_available.jpg" alt="event" class="w-100" width="250.5" height="187.88" v-else/> 
                                        </div>
                                    <div class="pb-0  mt-1 ps-0 pe-0">
                                       <div class="p-0 bg-greylight border-light-md rounded-xxl theme-dark-bg" >
                                          <h4 class="pl-3 mb-0 fw-700 font-xss ls-3 lh-27 text-grey-800" > {{item.restaurant.business_name}} <span class=" ls-3 d-block font-xsssss text-grey-500 fw-500" >12 Jan, 2021</span ></h4>
                                       </div>
                                       
                                          <h4 class="mt-2 text-center font-xssss fw-500 text-grey-500">
                                              <span class="d-block lh-25 mb-1">{{item.description.slice(0,65)}}</span>
                                              <!-- <span class="d-block lh-30">Restaurant leader?</span> -->
                                              
                                               <router-link  type="button" class="btn btn-link text-decoration-none m-0 p-0" v-if="is_subscribed === user.is_subscribed" :to="'/read-more/'+item.user_type_text+'/'+item.id"  >Read More</router-link>
                                               <button type="button" class="btn btn-link text-decoration-none m-0 p-0" v-b-modal.subscribealert v-else>Read More</button>
                                               </h4>
                                       
                                    </div>
                                 </div>
                              </div>

   
   
      </div>
   </div>
</template>

<script>
import axios from "axios";
  import {mapGetters} from 'vuex'
export default {
    Name:'VendorHome',
    
  data() {
    return {
      vendorData: '',
      users:'',
      jobs:'',
        is_subscribed:true,
      
    };
  },
    methods: {
 
    getData() {
           this.users = JSON.parse(localStorage.getItem("UserDetails"));

         if (this.users.user_type === '6' ||this.users.user_type === '7'){    
          
      axios.get("vendor/vendor?per_page=2&page=1")

        .then((result) => {
          this.vendorData = result.data.data;
          
        })
        }else{
axios.get('restaurants/job?per_page=2&page=1')
 
        .then((result) => {
          this.jobs = result.data.data;
     
        })
        }
    },
  },
   computed: {
          ...mapGetters(['user'])
        },
  mounted() {
    this.getData();
  },
}
</script>