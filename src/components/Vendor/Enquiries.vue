<template>
   <div>
      <div class="card-body   w-100 bg-success border-0 d-flex rounded-3">
   
         <h4 class="font-xs text-white fw-600   mb-0  "> Enquiries </h4>
      </div>
      <div class="card-body p-lg-3 p-4 w-100 border-0">

         
 

       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
       <th scope="col">Name</th>
      <th scope="col">	Business Nname</th>
     <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="(inquiries, key) in inquiry" v-bind:key="inquiries.id" >
           <th scope="row">{{ key +1}}</th>
      <td> {{inquiries.restaurant.name}}</td>
      <td>{{inquiries.restaurant.business_name}}</td>
 
       <td>
      
         <router-link :to="'/profile/'+inquiries.restaurant.id"><i class="p-0 feather-eye font-md p-1"></i></router-link>
         </td>
           </tr>
    
  </tbody>

</table>




 


      </div>
   </div>
</template>
 

<script>
import axios from "axios";
 

export default {
  name: "VendorEditProfile",
 
  data() {
    return {
      inquiry:[],
      rest:''
    
    };
  },
  methods: {
    getData() {
      axios.get("vendor/vendor-inquiry")
        .then((result) => {
        this.inquiry = result.data.data;
        console.warn("inquiry result get",result);
     
      });
    },
    
                      restaurantsshow(id)
                  {
                     axios.get('restaurants/restaurants/'+id)
                 
                     .then((result)=>{
                        this.rest=result.data.data;
                          console.warn("restaurantsshow APi Call",result)
                         })
                  },

   
    
  },
  mounted() {
    this.getData();
  },
};
</script> 