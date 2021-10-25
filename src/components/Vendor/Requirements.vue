<template>
   <div>
      <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
   
         <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2"> Requirements </h4>
      </div>
      <div class="card-body p-lg-3 p-4 w-100 border-0">



          <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
       <th scope="col">Name</th>
      <th scope="col">	Business Nname</th>
     <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="(requirements, key) in requirement" v-bind:key="requirements.id">
           <th scope="row">{{ key +1}}</th>
    <td> {{requirements.restaurant.name}}</td>
      <td>{{requirements.restaurant.business_name}}</td>
     <td> {{requirements.restaurant.mobile_no}}</td>
      <td>{{requirements.restaurant.email}}</td>
   
      <td>
      <router-link :to="'/profile/'+requirements.restaurant.user_id"><i class="p-0 feather-eye font-md p-1"></i></router-link>

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
  name: "requirements",
 
  data() {
    return {
      requirement:[],
      rest:''
    
    };
  },
  methods: {
    getData() {
      axios.get("vendor/requirements")
        .then((result) => {
        this.requirement = result.data.data;
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