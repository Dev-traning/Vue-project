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
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{ moment(item.created_at).fromNow()}}</p>
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
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.created_at}}</p>
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
     <router-link  type="button" class="btn btn-link text-decoration-none m-0 p-0" v-if="is_subscribed === user.is_subscribed" :to="'/read-more/'+'requirement'+'/'+item.id" tag="button">Read More</router-link>
      </div>
        </div>
          <div v-if="manpower.length" v-observe-visibility="handleScrolledToBottom"></div>
      <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-0 ">

         <div  class="d-flex justify-content-center">
         <div class="spinner-border text-primary" role="status">
         <span class="sr-only">Loading...</span>
         </div>
         </div>
         </div>

   </div>
</template>

<script>
import axios from "axios";
import moment from 'moment'
export default {
  name: "PostFeed",

  data() {
    return {
      manpower: [],
      requiMent:'',
      page:'1',
      moment: moment,
      
    };
  },
  methods: {

   
             handleScrolledToBottom(isVisible) {
               if (!isVisible) {
                  return;
               }
               if (this.page >= this.lastPage) {
                  return;
               }
               this.page++;
               console.log(this.page);
               this.getData();
               },

               

    getData() {
   //       //  var getPath = this.$route.params.user_type
           
          
   //         axios.get(`mp/manpowers?page=${this.page}&per_page=10`)
   //        .then((result) => {
   //        this.manpower == [...this.manpower, ...result.data.data];   
   //      this.lastPage = result.data.last_page;
   //       //  console.log(result.data.data);
   //        }) 
   
   axios.get(`mp/manpowers?sort=id&order_by=desc&page=${this.page}&per_page=10`)
  .then((result) => {
    this.manpower = [...this.manpower, ...result.data.data]
    this.lastPage = result.data.last_page;
  })

      .catch((error) => {
        console.error(error);
      });

},
  },
  mounted() {
    this.getData();
  },
};
</script>