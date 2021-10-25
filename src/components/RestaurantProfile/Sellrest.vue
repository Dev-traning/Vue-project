<template>
   <div>
      <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3 ">
 
         <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">Sale My Restaurant</h4>
      </div>
   <div class="card-body p-lg-3 p-4 w-100 border-0 "  v-if="is_subscribed === user.is_subscribed">
         <b-alert v-model="suuualert" variant="success" dismissible>
     {{succses}}
    </b-alert>

            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errmsg}}
    </b-alert>

    <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
   <div class="row">
      <!-- <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Restarant Name</label>
            <input type="text" class="form-control" v-model="restaurant.contact_name">
         </div>
      </div> -->
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Category/Type</label>
             

            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " v-model="restaurant_type_id" class="form-select" aria-required="true" aria-invalid="false">
               <option value="" disabled selected>Select</option>
               <option v-for="item in typs" :value="item.id" v-bind:key="item.id">{{item.type}}</option>
            </select>
         </div>
 <div v-if="restaurant_type_id==1">
             <label class="mont-font fw-600 font-xsss">Please Type Other</label>
            <input   type="text" class="form-control" v-model="restaurant_type"/>
            </div>
 
      </div>
      </div>
   <div class="row">
      <div class="col-lg-4 mb-2">
         <label class="mont-font fw-600 font-xsss">Country</label> 
         <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="country_id"  @change="getState()" >
            <option value="" disabled selected>Country</option>
            <option v-for="country in countrys" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
         </select>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">State</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " v-model="state_id" class="form-select" aria-required="true" aria-invalid="false"  @change="getCity()" >
               <option value="" disabled selected>State</option>
               <option v-for="item in state" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Current City</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="city_id"  >
               <option value="" disabled selected>City</option>
               <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Opening Since</label>
            <input type="text" class="form-control" v-model="operate_since"  >
         </div>
      </div>
       
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Turnover P.M</label>
            <input type="text" class="form-control" v-model="turnover">
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Cuurrent Cost P.M</label>
            <input type="text" class="form-control"  v-model="cost">
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <label class="mont-font fw-600 font-xsss">Profit Per Month</label>
         <input type="text" class="form-control" v-model="profit"/>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Expected Price</label>
            <input type="text" class="form-control" v-model="expected_price" >
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Price Will include  List</label>
            <input type="text" class="form-control" v-model="price_include_list" >
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Contact Person name</label>
            <input type="text" class="form-control" v-model="contact_name" />
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Mobile No.</label>
            <input type="text" class="form-control" v-model="contact_phone" >
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Email Id</label>
            <input type="text" class="form-control"  v-model="contact_email">
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12">
         <div class="">
            <label class="mont-font fw-600 font-xsss"  >Upload Image</label>
            <b-form-group  label-cols-sm="0" label-size="sm">
               <b-form-file    id="file-small"  @change="onFileSelected"></b-form-file>
            </b-form-group>
         </div>

         
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mt-0">
      
         <b-button type="submit" style="background-color: #004898 !important" class=" font-xsssss fw-600 w-100">Save </b-button>
      </div>
   </div>
</form>
      </div>
      <div class="card-body p-lg-3 p-4 w-100 border-0 "  v-else>
            <b-alert show variant="warning">You need to subscribe to acceess this facility</b-alert>

    <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
   <div class="row">
      <!-- <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Restarant Name</label>
            <input type="text" class="form-control" v-model="restaurant.contact_name">
         </div>
      </div> -->
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Category/Type</label>
            <input type="text" class="form-control" v-model="restaurant_type_id" disabled>
         </div>
      </div>
      </div>
   <div class="row">
      <div class="col-lg-4 mb-2">
         <label class="mont-font fw-600 font-xsss">Country</label> 
         <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="country_id"  @change="getState()" disabled>
            <option value="" disabled selected>Country</option>
            <option v-for="country in countrys" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
         </select>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">State</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " v-model="state_id" class="form-select" aria-required="true" aria-invalid="false"  @change="getCity()"  disabled>
               <option value="" disabled selected>State</option>
               <option v-for="item in state" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Current City</label> 
            <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="city_id" disabled >
               <option value="" disabled selected>City</option>
               <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
            </select>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Opening Since</label>
            <input type="text" class="form-control" v-model="operate_since"  disabled>
         </div>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Runnig Or Closed</label>
            <input type="text" class="form-control" v-model="is_closed" disabled>
         </div>
      </div>
      <div class="col-lg-4 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Turnover P.M</label>
            <input type="text" class="form-control" v-model="turnover" disabled>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Cuurrent Cost P.M</label>
            <input type="text" class="form-control"  v-model="cost" disabled>
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <label class="mont-font fw-600 font-xsss">Profit Per Month</label>
         <input type="text" class="form-control" v-model="profit" disabled/>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Expected Price</label>
            <input type="text" class="form-control" v-model="expected_price" disabled>
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Price Will include  List</label>
            <input type="text" class="form-control" v-model="price_include_list" disabled>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Contact Person name</label>
            <input type="text" class="form-control" v-model="contact_name" disabled/>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Mobile No.</label>
            <input type="text" class="form-control" v-model="contact_phone" disabled >
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Email Id</label>
            <input type="text" class="form-control"  v-model="contact_email" disabled>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-12 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss"  >Upload Image</label>
            <b-form-group  label-cols-sm="0" label-size="sm">
               <b-form-file    id="file-small"  @change="uploadresume" disabled></b-form-file>
            </b-form-group>
         </div>
      </div>
   </div>
   
   <div class="row">
      <div class="col-lg-12 mt-0">
     
         <b-button type="submit" style="background-color: #004898 !important" class=" font-xsssss fw-600  ps-3 p-2 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right">Save </b-button>
      </div>
   </div>
</form>
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

         countrys: '',
         state: '',
         city: '',
        typs:'',
         restaurant_type_id:'',
         restaurant_type:'',
         operate_since:'',   
         country_id:'101',
         state_id:'',
         city_id:'',
         turnover:'',
         cost:'',
         profit:'',
         expected_price:'', 
         price_include_list:'', 
         contact_name:'',
         contact_phone:'',
         contact_email:'',
         is_closed:'0',
         images:'',
            errmsg:'',
         succses:'',
         suuualert: false,
       showDismissibleAlert: false,
            
       
    
    }
  },
 async mounted()
  {   
          this.restaType();

     if (!localStorage.getItem("token")) {
        this.$router.push('/')}
         this.getData();
         
         
  },
    methods: {
      onFileSelected(event){
       this.photo = event.target.files[0]
        },
 
 
      async handalSubmit() {
        if(this.restaurant_type_id==1){
            
this.dataOld =this.restaurant_type
         }else{
this.dataOld =''
         }
           const photo = new FormData();
           if(this.photo){
photo.append('images[0]', this.photo, this.photo.name)
           }
        
         photo.append('restaurant_type_id', this.restaurant_type_id)
         photo.append('restaurant_type', this.dataOld)
           photo.append('operate_since', this.operate_since)
             photo.append('country_id', this.country_id)
               photo.append('state_id', this.state_id)
                 photo.append('city_id', this.city_id)
                   photo.append('turnover', this.turnover)
                     photo.append('cost', this.cost)
                       photo.append('profit', this.profit)
                         photo.append('expected_price', this.expected_price)
                           photo.append('price_include_list', this.price_include_list)
                             photo.append('contact_name', this.contact_name)
                               photo.append('contact_phone', this.contact_phone)
                                photo.append('contact_email', this.contact_email)
                                 photo.append('is_closed', this.is_closed)
                                  

            

           const response = await axios.post("restaurants/sell-my-restaurant", 
              photo, {
              onUploadProgress: uploadEvent =>{
                console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%' )
             },
            
              header : {
          'Content-Type' : 'multipart/form-data'
        },
      
        
           }).then((response) => {
          
          this.succses = response.data.message;
this.suuualert=true
this.$router.push('/SellrestEdit')
           
        })
        .catch((error) => {
     this.errmsg = error.response.data.message
          console.log(error);
           this.showDismissibleAlert=true
        });
           console.log(response);
           
           
         
       },

      
       
         restaType() {
         axios.get("admin/restaurantType").then((result) => {
           this.typs = result.data.data;
            
           console.warn("restaurantType",result);
     
        
         });
       },

         getData() {
         axios.get("countries?is_light=true").then((result) => {
           this.countrys = result.data.data;
           console.warn("sonu result get country",result);
           this.getState();
         
         });
       },

          getState() {
         axios
           .get("states_of_country?is_light=1" + this.country_id, {
             params: { country_id: this.country_id },
           })
           .then((result) => {
             this.state = result.data.data;
             console.warn("sonu result get state",result);
             this.getCity();
           
           });
       },  getCity() {
         axios
           .get("cities_of_state?is_light=1" + this.state_id, {
             params: { state_id: this.state_id },     
           })
           .then((result) => {
             this.city = result.data.data;
             console.warn("sonu result get city",result);
        
           });
       },

    
       

       
  },
      computed: {
          ...mapGetters(['user'])
        }
     
}
</script>