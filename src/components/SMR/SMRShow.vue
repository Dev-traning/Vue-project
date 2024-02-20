<template>
   <div>
   <div v-if="smr">
      <div class="card w-100 shadow-xss rounded-xxxl border-0 p-3 mb-3" v-for="item in smr" v-bind:key="item.id">
         <div class="card-body d-block p-0 mb-2">
            <div class="row ps-2 pe-2">
               <div class="col-xs-12 col-sm-12 p-1">
                  <img :src="item.medias[0].path" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="item.medias[0].path"/>

                  <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else/>

                  </div>
            </div>
         </div>
         <div class="d-flex">
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.contact_name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{ moment(item.created_at).fromNow()}}</p>
            </div>
         </div>
         <hr class="mb-2 mt-0" >
           <table>

         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Restaurant Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.restaurant.business_name}}</td>
         </tr>

         <tr v-for="restType in restauType" v-bind:key="restType.id">
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs" v-if="item.restaurant_type_id === restType.id">Restaurant Type</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss" v-if="item.restaurant_type_id === restType.id">{{restType.type}}</td>
          </tr>


      </table>
       <router-link  class="  text-white   bg-info btn   font-xssss  fw-400 ls-3 w-100" :to="'/read-more/'+item.user_type_text+'/'+item.id" tag="button">Read More</router-link >
         <!-- <div v-if="item.length" v-observe-visibility="handleScrolledToBottom"></div> -->
      </div>
      <div v-if="smr.length" v-observe-visibility="handleScrolledToBottom"></div>
      <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-0 ">

         <div  class="d-flex justify-content-center">
         <div class="spinner-border text-primary" role="status">
         <span class="sr-only">Loading...</span>
         </div>
         </div>
         </div>

   </div>


 <div v-if="restraRea">
      <div class="card w-100 shadow-xss rounded-xxxl border-0 p-3 mb-3" v-for="item in restraRea" v-bind:key="item.id">
         <div class="card-body d-block p-0 mb-2">
            <div class="row ps-2 pe-2">
               <div class="col-xs-12 col-sm-12 p-1">
                  <img :src="`${item.photo}`" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="item.photo"/>
                  <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else/> </div>
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
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Restaurant Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.business_name}}</td>
         </tr>

         <tr >
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Restaurant Type</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.restaurant_type}}</td>
          </tr>


      </table>
       <router-link  class="  text-white   bg-info btn   font-xssss  fw-400 ls-3 w-100" :to="'/read-more/'+'Restaurant'+'/'+item.id" tag="button">Read More</router-link >

      </div>

       <div v-if="restraRea.length" v-observe-visibility="handleScrolledToBottom"></div>
      <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-0 ">

         <div  class="d-flex justify-content-center">
         <div class="spinner-border text-primary" role="status">
         <span class="sr-only">Loading...</span>
         </div>
         </div>
         </div>

</div>


 <div v-if="reurment">
      <div class="card w-100 shadow-xss rounded-xxxl border-0 p-3 mb-3" v-for="item in reurment" v-bind:key="item.id">
         <div class="card-body d-block p-0 mb-2">
            <div class="row ps-2 pe-2">
               <div class="col-xs-12 col-sm-12 p-1">
                  <img :src="`${item.photo}`" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="item.photo"/>
                  <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else/> </div>
            </div>
         </div>
         <div class="d-flex">
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{item.restaurant.name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{ moment(item.created_at).fromNow()}}</p>
            </div>
         </div>
         <hr class="mb-2 mt-0" >
           <table>

         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">title</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.title}}</td>
         </tr>

         <tr >
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">restaurant business_name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{item.restaurant.business_name}}</td>
          </tr>


      </table>
       <router-link  class="  text-white   bg-info btn   font-xssss  fw-400 ls-3 w-100" :to="'/read-more/'+'requirement'+'/'+item.id" tag="button">Read More</router-link >
      </div>
      <div v-if="reurment.length" v-observe-visibility="handleScrolledToBottom"></div>
      <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-0 ">

         <div  class="d-flex justify-content-center">
         <div class="spinner-border text-primary" role="status">
         <span class="sr-only">Loading...</span>
         </div>
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
      smr: '',
      restauType:'',
      restraRea:'',
      moment: moment,
      reurment:'',
      page:''

    };
  },
  methods: {
   //  handleScrolledToBottom(isVisible) {
   //    if (!isVisible) {
   //      return;
   //    }
   //    if (this.page >= this.lastPage) {
   //      return;
   //    }
   //    this.page++;
   //    console.log(this.page);
   //    this.getData();
   //  },
   //  getData() {
   //    var getPath = this.$route.params.user_type

   //      if(getPath === '6'){
   //    axios.get("restaurants/sell-my-restaurant?sort=id&order_by=desc")
   //      .then((result) => {
   //        this.smr = result.data.data;
   //        this.restaurantType()
   //       })}  if(getPath === '8'||getPath === '7'){
   //    axios.get(`restaurants/restaurants?sort=id&order_by=desc&page=${this.page}&per_page=10`)
   //      .then((result) => {
   //        this.restraRea = result.data.data;
   //        this.lastPage = result.data.last_page;
   //         })}if(this.$route.params.user_type === 'requirement'){
   //    axios.get("restaurants/requirement?sort=id&order_by=desc")
   //      .then((result) => {
   //        this.reurment = result.data.data;
   //        console.log(this.reurment);
   //          alert(this.reurment);
   //         })}

   //       },
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
  var getPath = this.$route.params.user_type;

  if (getPath === '6') {
    axios.get(`restaurants/sell-my-restaurant?sort=id&order_by=desc&page=${this.page}&per_page=10`)
      .then((result) => {
        this.smr = [...this.smr, ...result.data.data];   
        this.lastPage = result.data.last_page;

        this.restaurantType();
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (getPath === '8' || getPath === '7') {
   axios.get(`restaurants/restaurants?sort=id&order_by=desc&page=${this.page}&per_page=10`)
  .then((result) => {
    this.restraRea = [...this.restraRea, ...result.data.data];
    this.lastPage = result.data.last_page;
  })

      .catch((error) => {
        console.error(error);
      });
  } else if (getPath === 'requirement') {
    axios.get(`restaurants/requirement?sort=id&order_by=desc&page=${this.page}&per_page=10`)
      .then((result) => {
        this.reurment = [...this.reurment, ...result.data.data];
        this.lastPage = result.data.last_page;
        console.log(this.reurment);
        alert(this.reurment);
      })
      .catch((error) => {
        console.error(error);
      });
  }
},


    restaurantType() {
      axios.get("admin/restaurantType")
         .then((result) => {
          this.restauType = result.data.data;

        });
    },
  },
  mounted() {
    this.getData();
   //  alert("");
    console.log("heoo",this.smr);

  },
};
</script>