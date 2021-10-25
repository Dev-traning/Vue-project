<template>
   <div>
      <div v-if="manpower">
      <div class="card w-100 shadow-xss rounded-xxxl border-0 p-3 mb-3" v-for="item in manpower" v-bind:key="item.id">
         <div class="card-body d-block p-0 mb-2">
            <div class="row ps-2 pe-2">
               <div class="col-xs-12 col-sm-12 p-1"> <img :src="`${item.photo}`" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="item.photo"/> <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else/> </div>
            </div>
         </div>
         <div class="d-flex">
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.user.first_name}} {{item.user.last_name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">27-08-2021</p>
            </div>
         </div>
         <hr class="mb-2 mt-0" >
         <table>
        
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Type</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.type}}</td>
         </tr>
        
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Experiance</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.experience}}</td>
         </tr>
      
       
      </table>
         <router-link  class="  text-white   bg-info btn   font-xssss  fw-400 ls-3 w-100" :to="'/read-more/'+item.user_type_text+'/'+item.id" tag="button">Read More</router-link >
      </div>
        </div>

           <div v-if="requiMent">
      <div class="card w-100 shadow-xss rounded-xxxl border-0 p-3 mb-3" v-for="item in requiMent" v-bind:key="item.id">
         <div class="card-body d-block p-0 mb-2">
            <div class="row ps-2 pe-2">
               <div class="col-xs-12 col-sm-12 p-1"> <img :src="`${item.photo}`" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="item.photo"/> <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else/> </div>
            </div>
         </div>
         <div class="d-flex">
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.restaurant.name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">27-08-2021</p>
            </div>
         </div>
         <hr class="mb-2 mt-0" >
         <table>
        
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Business Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.restaurant.business_name}}</td>
         </tr>
        
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Experiance</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.title}}</td>
         </tr>
      
       
      </table>
     <router-link  type="button" class="btn btn-link text-decoration-none m-0 p-0" v-if="is_subscribed === user.is_subscribed" :to="'/read-more/'+'requirement'+'/'+item.id" >Read More</router-link>
      </div>
        </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostFeed",

  data() {
    return {
      manpower: '',
      requiMent:''
      
    };
  },
  methods: {
    getData() {
         //  var getPath = this.$route.params.user_type
           
          
           axios.get("mp/manpowers")
          .then((result) => {
          this.manpower = result.data.data;
          }) 
    },
  },
  mounted() {
    this.getData();
  },
};
</script>