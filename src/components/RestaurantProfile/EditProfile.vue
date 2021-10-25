<template>
   <div>
      <div class="card-body  w-100 bg-success border-0 d-flex rounded-3">
         
         <h4 class="font-xs text-white fw-600  mb-0 ">Update Profile</h4>
      </div>
      <div class="card-body p-lg-3 p-4 w-100 border-0 ">
          <!-- <b-alert show variant="warning" v-if="errmsg">{{errmsg}}</b-alert>
          <b-alert show variant="success" v-if="succses">{{succses}}</b-alert> -->
        
           <b-alert v-model="suuualert" variant="success" dismissible>
     {{succses}}
    </b-alert>

            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errmsg}}
    </b-alert>
       <!-- <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button> -->

       <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
   <div class="row mb-2">
      <div class="col-lg-6">
         <div class="mb-2 w-100">
            <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"/> 
            <label for="file" class=" erb-image-wrapper " >
               <img :src="`${restaurant.photo}`"  class="w-100 rounded-3"  v-if="restaurant.photo" />
               <img src="../../assets/blank.png"  class="w-100 rounded-3" v-else/>
               <div style="position: absolute; right: 19px; top: 5px">
                  <i class="feather-edit large-icon me-2 d-block text-white mt-2"></i>
                  <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"  />
               </div>
            </label>
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Restaurant Name</label>
            <input type="text" class="form-control" v-model="restaurant.name" />
            <label class="mont-font fw-600 font-xsss">Restaurant Type</label>
 
             <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="restaurant.restaurant_type_id" >
               <option value="" disabled selected>Select Restaurant Type</option>
               <option v-for="item in restType" :value="item.id" v-bind:key="item.id" >{{item.type}}</option>
            </select>
            <div v-if="restaurant.restaurant_type_id==1">
             <label class="mont-font fw-600 font-xsss">Please Type Other</label>
            <input   type="text" class="form-control" v-model="restaurant.restaurant_type"/>
            </div>
           

            <label class="mont-font fw-600 font-xsss">Email</label>
            <input type="text" class="form-control" v-model="restaurant.email" />
            <label class="mont-font fw-600 font-xsss">Address</label>
            <input type="text" class="form-control" v-model="restaurant.business_name">
            <label class="mont-font fw-600 font-xsss">Mobile No.</label>
            <input type="text" class="form-control" v-model="restaurant.mobile_no" />
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-4 mb-2">
         <label class="mont-font fw-600 font-xsss">Country</label> 
         <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="restaurant.country.id" @change="getState()" >
            <option value="" disabled selected>Country</option>
            <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
         </select>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">State</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="restaurant.state.id" @change="getCity()" >
               <option value="" disabled selected>State</option>
               <option v-for="item in state" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Current City</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="restaurant.current_city.id" >
               <option value="" disabled selected>City</option>
               <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <label class="mont-font fw-600 font-xsss">Main Office City</label>
         <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="restaurant.native_city.id" >
            <option value="" disabled selected>City</option>
            <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
         </select>
      </div>
      <div class="col-lg-6 mb-2">
         <label class="mont-font fw-600 font-xsss">Gst No</label>
        <input type="text" class="form-control" v-model="restaurant.gst_no">
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Remark</label>
            <input type="text" class="form-control" v-model="restaurant.business_url">
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">About You</label>
            <input type="text" class="form-control" v-model="restaurant.comments"/>
         </div>
      </div>
   </div>
 
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Restaurant Address </label>
            <input type="text" class="form-control" v-model="restaurant.address">
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-3 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">facebook Link</label>
            <input type="text" class="form-control" v-model="restaurant.facbook_url">
         </div>
      </div>
      <div class="col-lg-3 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">LinkedIn Link</label>
            <input type="text" class="form-control" v-model="restaurant.linkedin_url">
         </div>
      </div>
      <div class="col-lg-3 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Instagram Link</label>
            <input type="text" class="form-control" v-model="restaurant.instagram_url">
         </div>
      </div>
      <div class="col-lg-3 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Twitter Link</label>
            <input type="text" class="form-control" v-model="restaurant.twiter_url">
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mt-0">
         <b-button
            type="submit"
            style="background-color: #004898 !important"
            class=" font-xsssss fw-600  ps-3   pe-3 lh-32 mt-1 mb-0   rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"
            >Update</b-button>
      </div>
   </div>
</form>
      </div>
   </div>
</template>
<script> 
import axios from "axios"; 
export default {
    name: 'EditProfile',
 
     data() {
    return {

     list: [],
         state: [],
         city: [],
         restType:'',
         errmsg:'',
         succses:'',
         suuualert: false,
       showDismissibleAlert: false,
       restaurant:{
            business_name: '',
            name: '',
            email:'',
            mobile_no:'',
            photo:'',
            address:'',
            country_id:'',
            state_id:'',
            native_city_id:'',
            current_city_id:'',
            gst_no:'',
            business_url:'',
            facbook_url:'',
            linkedin_url:'',
            instagram_url:'',
            twiter_url:'',
            comments:'',
            restaurant_type:'',
            restaurant_type_id:''
       }
    
    }
  },
 async mounted()
  {   if (!localStorage.getItem("token")) {
        this.$router.push('/')}
         const result =await axios.get('restaurants/restaurants/my-profile')
           this.restaurant=result.data.data
                this.getData();
                this.getType();
  },
    methods: {
      onFileSelected(event){

            this.restaurant.photo = event.target.files[0]
            this.restaurant.photo = window.URL.createObjectURL(event.target.files[0]);

            
                 
        },
 
 
      async handalSubmit() {
 
        
       


         var itemId = this.$route.params.id;

         if(this.restaurant.restaurant_type_id==1){
            
this.dataOld =this.restaurant.restaurant_type
         }else{
this.dataOld =''
         }
        
           const photo = new FormData();
         


          if(this.list.photo){
              photo.append("photo", this.list.restaurant.photo, this.list.restaurant.photo.name);
           } 

           photo.append('business_name', this.restaurant.business_name)
           photo.append('name', this.restaurant.name)
             photo.append('email', this.restaurant.email)
               photo.append('address', this.restaurant.address)
                 photo.append('gst_no', this.restaurant.gst_no)
                   photo.append('facbook_url', this.restaurant.facbook_url)
                     photo.append('linkedin_url', this.restaurant.linkedin_url)
                       photo.append('instagram_url', this.restaurant.instagram_url)
                         photo.append('twiter_url', this.restaurant.twiter_url)
                           photo.append('comments', this.restaurant.comments)
                             photo.append('business_url', this.restaurant.business_url)
                               photo.append('restaurant_type', this.dataOld)
                               photo.append('restaurant_type_id', this.restaurant.restaurant_type_id)
                                 photo.append('country_id', this.restaurant.country.id)
                                   photo.append('state_id', this.restaurant.state.id)
                                    photo.append('native_city_id', this.restaurant.native_city.id)
                                     photo.append('current_city_id', this.restaurant.current_city.id)

           const response = await axios.post("restaurants/restaurants/"+itemId, 
              photo, {
              onUploadProgress: uploadEvent =>{
                console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%' )
             },
            
              header : {
          'Content-Type' : 'multipart/form-data'
        },
      
        
           })  .then((response) => {
          
          this.succses = response.data.message;
this.suuualert=true
           
        })
        .catch((error) => {
     this.errmsg = error.response.data.message
          console.log(error);
           this.showDismissibleAlert=true
        });
           console.log(response);
    
           
         
       },

            getType() {
        
         axios.get("admin/restaurantType").then((result) => {
           this.restType = result.data.data;
           
          
         });
       },

         getData() {
        
         axios.get("countries?is_light=true").then((result) => {
           this.list = result.data.data;
           console.warn("sonu result get country",result);
           this.getState();
         
         });
       },

          getState() {
         
         axios
           .get("states_of_country?is_light=1" + this.restaurant.country.id, {
             params: { country_id: this.restaurant.country.id },
           })
           .then((result) => {
             this.state = result.data.data;
             console.warn("sonu result get state",result);
             this.getCity();
           
           });
       },  getCity() {
         axios
           .get("cities_of_state?is_light=1" + this.restaurant.state.id, {
             params: { state_id: this.restaurant.state.id },
           })
           .then((result) => {
             this.city = result.data.data;
             console.warn("sonu result get city",result);
        
           });
       },
       

       
  },
  
     
}
</script>