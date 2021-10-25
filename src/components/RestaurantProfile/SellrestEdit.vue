<template>
   <div>
      <div class=" pl-4 border-0 card-body w-100 bg-success  rounded-3 ">
         <div class="row ">
            <div class="col-sm-6">
               
               <p class="float-start  mb-0 text-white font-xs fw-600 ">Restaurant on Sale</p>
               
            </div>
            <div class="col-sm-6">
               
               <button type="submit" @click="DeleteSmr" class="text-white float-right btn fw-500 mr-4 m-0 p-0"> 
                  <i class="feather-trash-2 font-md btn-round-sm"></i>
               </button>
               
               <router-link type="submit" to="/SmrEdit" class="text-white float-right  fw-500 "> 
                  <i class="feather-edit font-md btn-round-sm"></i>
               </router-link>
                   <!-- <router-link type="submit" to="/SellRest" class="text-white float-right  fw-500 "> 
                  <i class="feather-plus font-md btn-round-sm"></i>
               </router-link> -->
            </div>
         </div>
      </div>
      <div class="p-2 border-0 card-body w-100">
         <div class="m-1 row">
            <div class="col-md-7">
               <table class="table">
                  <tr>
                     <td class="font-xsss">Opening Since</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.operate_since}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Running Or Closed</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.is_closed_text}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Turnover P.M</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.turnover}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">City</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.city.name}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">State</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.state.name}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Country</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.country.name}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Current Cost P.M</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.cost}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Profit Per Month</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.profit}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Expected Price</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.expected_price}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Price Will Include List</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.price_include_list}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Contact Person Name</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.contact_name}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Mobile Number</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.contact_phone}}</td>
                  </tr>
                  <tr>
                     <td class="font-xsss">Email Address</td>
                     <td class="font-xsss text-dark fw-500">{{smrData.contact_email}}</td>
                  </tr>
               </table>
            </div>
            <div class="col-md-5">
               
               <img :src="smrData.medias[0].path" class="w-100 h300 object-fit-cover rounded-xxxl" v-if="smrData.medias[0] || null">
               <img src="../../assets/no_image_available.jpg" class="w-100 h300 object-fit-cover rounded-xxxl" v-else>
            </div>
         </div>
      </div>
   </div>
</template>
<script> 
import axios from "axios"; 
  import {mapGetters} from 'vuex'
export default {
    name: 'EditProfile',
 
     data() {
    return {
        is_subscribed:true,
 smrData:''
            
       
    
    }
  },
 async mounted()
  {   if (!localStorage.getItem("token")) {
        this.$router.push('/')}
         this.getData();
              this.restaType();
         
  },
    methods: {
        getData() {
           
        
 axios.get('restaurants/my-smr').then((result) => {
    if(result.data.data){
    this.smrData = result.data.data
           this.GetId = result.data.data.id
    }else{
       this.$router.push('/SellRest')
    }  }) 
       }, 



       
       DeleteSmr(){
           if(confirm("Do you really want to delete?")){
         axios.delete("restaurants/sell-my-restaurant/" + this.GetId)
      .then(() => {
        this.$router.push('/SellRest')
      
      })}
       }
    
       

       
  },
      computed: {
          ...mapGetters(['user'])
        }
     
}
</script>

<style scoped>
.table td, .table tr{
    border-top: 0!important;
    border-bottom: 0!important;
}
.table td, .table th {
    padding: 0rem;
    vertical-align: top;}
/* .table td, .table th{
   padding: .30rem;
} */
</style>