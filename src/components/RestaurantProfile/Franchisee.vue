<template>
    <div class="franchise">
       <div class="pl-4 border-0 card-body w-100 bg-success d-flex rounded-3">
      
         <h4 class="mb-0 text-white font-xs fw-600 ms-4">Franchisee Provider</h4>
      </div>

      <div class="p-4 border-0 card-body p-lg-3 w-100 ">

           <b-alert v-model="suuualert" variant="success" dismissible>
     {{succses}}
    </b-alert>

            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errmsg}}
    </b-alert>
          <form @submit.prevent="handalSubmit"  >

           
           



              <div class="row">
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Brand Name</label>
            <input type="text" class="form-control"  v-model="brand_name">
         </div>
      </div>
      <div class="col-lg-6 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Company Name</label>
            <input type="text" class="form-control" v-model="company_name">
         </div>
      </div>
       
   </div>
 


      
              <!-- <div class="row">
               <div class="mb-2 col-lg-12">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Brand Name</label>
                     <input type="text" class="form-control form-rounded" v-model="brand_name">
                  </div>
               </div>
                 <div class="mb-2 col-lg-12">
                  <div class="">
                     <label class="mont-font fw-600 font-xss">Company Name</label>
                     <input type="text" class="form-control form-rounded" v-model="company_name">
                  </div>
               </div>
            </div> -->

        



            <div class="row">
               <div class="mb-2 col-lg-12">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Segment</label>
                     <input type="text" class="form-control form-rounded" v-model="segment_multi">
                  </div>
               </div>
                 <div class="mb-2 col-lg-12">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Current number of outlets</label>
                     <input type="text" class="form-control form-rounded .bg-secondary" v-model="outlet_count">
                  </div>
               </div>

            
          

               

             
            </div>

             <div class="row">
                <div class="mb-2 col-lg-6">
                       <label class="mont-font fw-600 font-xsss">franchisee Type</label>
                     <input type="text" class="form-control form-rounded .bg-secondary" v-model="franchise_type">
                </div>

           
                <div class="mb-2 col-lg-6">
                   <label class="mont-font fw-600 font-xsss">Investment Needed</label>
                     <input type="text" class="form-control form-rounded .bg-secondary" v-model="investment_needed">
                </div>
            </div>

            <div class="row">
                <div class="mb-2 col-lg-6">
                     <label class="mont-font fw-600 font-xsss">Current turnover per outlet</label>
                     <input type="text" class="form-control form-rounded .bg-secondary" v-model="turnover">
                </div>

           
                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">ROI</label>
                    <input type="text" class="form-control form-rounded" v-model="return_on_investment">
                </div>
            </div>

            <div class="row">
                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Total Investment</label>
                    <input type="text" class="form-control form-rounded" v-model="total_investment">
                </div>

                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Contact Email</label>
                    <input type="text" class="form-control form-rounded" v-model="contact_email">
                </div>
            </div>

            <div class="row">
                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Working Capital</label>
                    <input type="text" class="form-control form-rounded" v-model="working_capital">
                </div>

                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Contact Person Name</label>
                    <input type="text" class="form-control form-rounded" v-model="contact_name">
                </div>
            </div>

            <div class="row">
                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Net Profit(Expected Per Month)</label>
                    <input type="text" class="form-control form-rounded" v-model="net_profit">
                </div>

                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Mobile Number</label>
                    <input type="text" class="form-control form-rounded" v-model="contact_phone">
                </div>
            </div>

            <div class="row mb-2">
                <div class="mb-2 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Expected turnover of franchisee</label>
                    <input type="text" class="form-control form-rounded" v-model="expected_turnover">
                </div>

                

                    <div class="mb-0 col-lg-6">
                    <label for="" class="mont-font fw-600 font-xsss">Franchisee Fees</label>
                    <input type="text" class="form-control form-rounded" v-model="franchise_fees">
                </div>
            </div>

                <div class="row">

                 <div class="mb-2 col-lg-4">
                    <label for="" class="mont-font fw-600 font-xsss">Country</label>
                    <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; background-color: rgb(248, 247, 247);" class="form-select form-rounded" aria-required="true" aria-invalid="false" v-model="country_id" @change="getState()">
                          <option value="" disabled selected>Country</option>
                          <option v-for="country in countrys" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
                    </select>
                </div>

             

                <div class="mb-2 col-lg-4">
                    <label for="" class="mont-font fw-600 font-xsss">State</label>
                    <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; background-color: rgb(248, 247, 247);" class="form-select form-rounded" aria-required="true" aria-invalid="false" v-model="state_id" @change="getCity()">
                          <option value="" disabled selected>State</option>
               <option v-for="item in state" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
                    </select>
                </div>

                  <div class="mb-2 col-lg-4">
                    <label for="" class="mont-font fw-600 font-xsss">City</label>
                    <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; background-color: rgb(248, 247, 247);" class="form-select form-rounded" aria-required="true" aria-invalid="false" v-model="city_id">
                          <option value="" disabled selected>City</option>
               <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
                    </select>
                </div>
            </div>

           <div class="row">
      <div class="col-lg-12">
         <div class="">
            <label class="mont-font fw-600 font-xsss"  >Upload Image</label>
            <b-form-group  label-cols-sm="0" label-size="sm" >
               <b-form-file class="images[]" name="images"  id="file-small"  @change="imageupload($event.target.name, $event.target.files)" multiple accept="image/*"></b-form-file>
 
            </b-form-group>
         </div>
      </div>
   </div>

  

            <div class="row">
              <div class="col-lg-12">
            
                <button type="Submit" class="btn btn-success text-white font-xsss fw-500 bg-success  w-100">Success</button>
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
    name: 'Franchisee',
 
     data() {
    return {
        is_subscribed:true,
         countrys: '',
         state: '',
         city: '',
          errmsg:'',
         succses:'',
         suuualert: false,
       showDismissibleAlert: false,
         

        brand_name:'',
        company_name:'',
        country_id:'101',
        state_id:'',
        city_id:'',
        segment_multi:'',
        outlet_count:'',
        franchise_type:'',
        turnover:'',
        expected_turnover:'',
        investment_needed:'',
        franchise_fees:'',
        total_investment:'',
        net_profit:'',
        return_on_investment:'',
        working_capital:'',
        contact_name:'',
        contact_phone:'',
        contact_email:'',
         images:[]
       }
  },
 async mounted()
  {   if (!localStorage.getItem("token")) {
        this.$router.push('/')}
         this.getData();
         
  },
    methods: {
    
 imageupload (images, fileList) {
    this.images = fileList;
    
    console.log(fileList);
  },
 
      async handalSubmit() {
             const franchisee = new FormData();
             this.images.forEach((value, index) => {
                var img =  `images`
                var ind = `[${index}]`
            franchisee.append(img + ind, value);});
            franchisee.append('brand_name', this.brand_name)
            franchisee.append('company_name', this.company_name)
            franchisee.append('country_id', this.country_id)
            franchisee.append('state_id', this.state_id)
            franchisee.append('city_id', this.city_id)
            franchisee.append('segment_multi', this.segment_multi)
            franchisee.append('outlet_count', this.outlet_count)
            franchisee.append('franchise_type', this.franchise_type)
            franchisee.append('turnover', this.turnover)
            franchisee.append('expected_turnover', this.expected_turnover)
            franchisee.append('investment_needed', this.investment_needed)
            franchisee.append('franchise_fees', this.franchise_fees)
            franchisee.append('total_investment', this.total_investment)
            franchisee.append('net_profit', this.net_profit)
            franchisee.append('return_on_investment', this.return_on_investment)
            franchisee.append('working_capital', this.working_capital)
            franchisee.append('contact_name', this.contact_name)
            franchisee.append('contact_phone', this.contact_phone)
            franchisee.append('contact_email', this.contact_email)
            const response = await axios.post("restaurants/give-franchise", 
              franchisee, { 
              header : {
          'Content-Type' : 'multipart/form-data'  },
           }).then((response) => {
            this.succses = response.data.message;
            this.suuualert=true  })
            .catch((error) => {
             this.errmsg = error.response.data.message
             console.log(error);
             this.showDismissibleAlert=true });
             console.log(response)
        },
         getData() {
         axios.get("countries?is_light=true").then((result) => {
           this.countrys = result.data.data;
            this.getState();
           })},

          getState() {
          axios
           .get("states_of_country?is_light=1" + this.country_id, {
             params: { country_id: this.country_id },
           })
           .then((result) => {
             this.state = result.data.data;
             this.getCity();
            });
       },  getCity() {
         axios
           .get("cities_of_state?is_light=1" + this.state_id, {
             params: { state_id: this.state_id },     
           })
           .then((result) => {
             this.city = result.data.data;
            });
       },

    
       

       
  },
      computed: {
          ...mapGetters(['user'])
        }
     
}
</script>
 

 