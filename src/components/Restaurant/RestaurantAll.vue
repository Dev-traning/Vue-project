<template>
   <div class="card w-100 shadow-xss rounded-0 border-0 mb-3 ml-3">
      <div class="card-body d-flex align-items-center p-3 ">
        
        
           <h4 class="fw-700 mb-0 font-xssss text-grey-900"  v-if="this.user.user_type === '8'">Jobs</h4>
            <h4 class="fw-700 mb-0 font-xssss text-grey-900"  v-else> Vendor </h4>


            <div class="fw-600 ms-auto font-xssss text-primary"  v-if="is_subscribed === user.is_subscribed">
                     <router-link  class="text-primary" v-if="this.user.user_type === '7' || this.user.user_type === '6'" :to="'/VendorShow/'+this.user.user_type" >See All </router-link>
                     <router-link  class="text-primary" v-if="this.user.user_type === '8'"  :to="'/VendorShow/'+this.user.user_type">See All</router-link>
            </div>
            
       

<div class="fw-600 ms-auto font-xssss text-primary" v-else>
     <a  class="text-primary"  v-b-modal.subscribealert >See All</a >  
</div>

    
         <b-modal scrollable show-close="ftrue"   hide-footer id="subscribealert" centered ref="modal"  size="lg"  >
            
        <button @click="close()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
         <div class="text-center p-4">
            <h2 class="text-danger text-danger-800 fw-800 h1" style=" font-family:Original Surfer,Regular"><u>Subscribe to our website</u></h2>
            <h4 class="  pl-4 pr-4 pt-2"><b>Be the first exclusive offers and the latest news<br /> of our services directly on your screen</b></h4>
            <p class="  text-justify fw-500 fs-5 text-grey-900 pt-1 pb-4 "  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perferendis aut reiciendis eum adipisci harum nulla distinctio reprehenderit unde dolorum rerum inventore minima sed architecto totam voluptatum consequatur nisi consequuntur corrupti laudantium dicta voluptas quo facilis dolor. Recusandae maxime provident culpa? At vero eum quae consequuntur perspiciatis sapiente mollitia harum delectus dolorem, qui quia placeat nulla odio culpa excepturi quaerat eius officia eligendi quas. Architecto illum placeat inventore in excepturi distinctio fugit dignissimos, earum iusto obcaecati delectus veritatis autem, optio qui. Atque doloribus mollitia veniam laborum similique rerum dolore, pariatur eligendi. Odio quo earum enim ut saepe culpa omnis dignissimos.</p>
            <div  >
               <b-button type="submit" style="background-color: #004898 !important" class="w-100 font-xss fw-500 ps-3  pe-3   mt-1 mb-0   rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto" @click="close()" v-b-modal.subscribe>Subscribe Now</b-button>
           
               <button class="btn pt-3 text-grey-900" @click="close()"><u><b>No, Thanks</b></u></button>
            </div>
         </div>
         </b-modal>
      </div>
   </div>
</template>
<script>
  import {mapGetters} from 'vuex'
   export default {
       name: 'PostReq', 
        data() {
       return {
          users:'',
      is_subscribed:true,
      
        };
     }, 
       methods: {
   close(){
this.$refs['modal'].hide()
   },},
            mounted() {
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
 
  },
     computed: {
          ...mapGetters(['user'])
        }
        
   }
</script>