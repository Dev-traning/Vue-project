<template>
<div >
 
    <div class="main-content right-chat-active">
   <div class="middle-sidebar-left">
      <div class="row">
         <div class="col-sm-12 ">
            <div class="card w-100 shadow-xss rounded-xxl border-0 p-4"  >

                 <div class="card-body p-2 mb-2  w-100 bg-success border-0 rounded-3 text-center">
                     <h4 class="font-xsss text-white fw-600  mb-0 ">Become Atmnirbhar</h4>

                  </div>
                  <p class="font-xsss fw-500 text-grey-500 text-center mb-2">I hereby apply for becoming <b>Atmnirbhar</b></p>

                  <p class="font-xs fw-500 text-grey-500 text-center mb-3 "><u>Below are my details</u></p>

                     <b-alert v-model="suuualert" variant="success" dismissible>
     {{succses}}
    </b-alert>

            <b-alert class="p-1" v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errmsg}}
    </b-alert>

             <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
  
  
   
  
   <div class="row">
       <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">User Name </label>
            <input type="text" class="form-control"  v-model="name">
         </div>
      </div>
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Bussiness Name </label>
            <input type="text" class="form-control"   v-model="business_name">
         </div>
      </div>
      
   </div>
    <div class="row mt-2">
         <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Email</label>
            <input type="text" class="form-control"  v-model="email" >
         </div>
      </div>
      <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Mobile</label>
            <input type="text" class="form-control"  v-model="mobile_no" >
         </div>
      </div>
        <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">GST No.</label>
            <input type="text" class="form-control"  v-model="gst_no">
         </div>
      </div>
   </div>
   



      <div class="row mt-2">
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">business Address</label>
            <input type="text" class="form-control"  v-model="business_address">
         </div>
      </div>

         <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Parmanent Address</label>
            <input type="text" class="form-control"  v-model="address">
         </div>
      </div>
      
   </div>


   
     <div class="row mt-2">
      <div class="col-lg-6 ">
         <div class="">

           
                              
            <label class="mont-font fw-600 font-xsss">State</label>
        <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="state_id" @change="getCity()" >
                                 <option value="" disabled selected>State </option>
                                 <option v-for="item in state" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
         </div>
      </div>
        <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">City</label>
            <select style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;" class="form-select" aria-required="true" aria-invalid="false" v-model="city_id" >
                                 <option value="" disabled selected>City</option>
                                 <option v-for="item in city" :value="item.id" v-bind:key="item.id">{{item.name}}</option>
                              </select>
         </div>
      </div>
   </div>
   

     <div class="row mt-2">
      <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Current Occupation</label>
            <input type="text" class="form-control"  v-model="current_occupation">
         </div>
      </div>
        <div class="col-lg-8 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Net Annual Income INR 
               
                 
    <input type="checkbox" v-model="is_checked" >
 

 
  
   <small id="emailHelp" class="text-muted"> (I declear that my annual income is less than Rs.3 LPA)</small></label>
            <input type="text" class="form-control"   v-model="net_annual_income">
         </div>
      </div>
   </div>



     <div class="row mt-2">
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Education (Please Specify)</label>
            <input type="text" class="form-control"  v-model="education">
         </div>
      </div>
        <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Upload Highest Digree Certificate </label>
          
               <b-form-file     @change="onFileSelected"></b-form-file>
          
         </div>
      </div>
   </div>


   <div class="row ">
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Adhar Card Number</label>
            <input type="text" class="form-control"  v-model="aadharcard_number">
         </div>
      </div>
        <div class="col-lg-6 ">
       <div class="">
            <label class="mont-font fw-600 font-xsss">Upload Adhar Card Photo </label>
           <b-form-file     @change="adharpro"></b-form-file>
         </div>
      </div>
   </div>



   <div class="row ">

      
 <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Pancard Number</label>
            <input type="text" class="form-control"  v-model="pancard_number">
         </div>
      </div>

      <div class="col-lg-6 ">
       <label class="mont-font fw-600 font-xsss">Upload PanCard</label>
        <b-form-file      @change="pancardselect" ></b-form-file>
      </div>
        <div class="col-lg-12 ">
     <div class="">
            <label class="mont-font fw-600 font-xsss">Upload GST Certificate</label>
          <b-form-file       @change="gstcrt" ></b-form-file>
         </div>

      </div>
   </div>

 

      

         


    <!-- <div class="row mt-2">
      <div class="col-lg-12 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Select No. Of Code Your Requirment(50-500)</label>
          
         </div>
      </div>
    
       
    
<div class="pl-3 pr-3 table-responsive-sm">

   
      <table class="table table-bordered">
  <thead >
    <tr >
      <th scope="col"  ></th>
      <th scope="col" class="table-light">Coupon</th>
      <th scope="col" class="table-light">MRP</th>
      <th scope="col" class="table-light">Total</th>

       
    </tr>
  </thead>
<tbody>
   <tr   >
      <th scope="row">No. Of Coupon</th>
      <td><input type="number" placeholder="Please type Of No" v-model="noOfcoupon"></td>
      <td>{{mrp}}</td>
  
      <td>{{+noOfcoupon * +mrp}} </td>
   </tr>
   <tr   >
      <th scope="row">Bonus Code</th>
      <td>
         <input type="number" readonly class="form-control-plaintext" id="staticEmail2" :value="noOfcoupon">
      </td>
      <td>0</td>
      <td>0</td>
   </tr>
   <tr   >
      <th scope="row">IGST 18%</th>
      <td colspan="2"></td>
      <td>{{+noOfcoupon * +mrp / 100 * 18}}</td>
   </tr>
   <tr class="table-primary">
      <th></th>
      <th colspan="2"  scope="row">Amount</th>
      <th  scope="row">{{+noOfcoupon * +mrp / 100 * 18 + +noOfcoupon * +mrp}}</th>
   </tr>
</tbody>
   

</table>
</div>
  

   </div> -->


     <div class="row">
      <div class="col-lg-12 mt-2 text-center">
         <b-button  
            type="submit"
            style="background-color: #004898 !important"
            class=" font-xsssss fw-600  ps-3   pe-3 lh-32 mt-1 mb-0   rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto "
            >{{loading ? "Processing..." : "Submit"}}</b-button>
      
      </div>
   </div>

</form>



 


            </div>
         </div>
      </div>
   </div>

</div>
</div>
</template>
<script>
   import axios from "axios";

export default {
    Name:'Atmnirbhar',
    data() {
    return {
      check:'',
      errmsg:'',
      state:'',
      city:'',
      valuCo:'',
      name:'',
      email:'',
      mobile_no:'',
      address:'',
      state_id:'',
      city_id:'',
      business_name:'',
      business_address:'',
      current_occupation:'',
      net_annual_income:'',
      country_id:'',
      education:'',
      education_certificate:'',
      pancard_number:'',
      pancard_doc:'',
      aadharcard_number:'',
      aadharcard_doc:'',
      gst_no:'',
      gst_no_proof_doc:'',
      showDismissibleAlert: false,
      }},

      methods:{
 onFileSelected(event){
       this.education_certificate = event.target.files[0]
        },
        pancardselect(event){
       this.pancard_doc = event.target.files[0]
        },
          gstcrt(event){
       this.gst_no_proof_doc = event.target.files[0]
        },

          adharpro(event){
       this.aadharcard_doc = event.target.files[0]
        },  


// handalSubmit(){
 
//     if(this.check==true){
//        this.valuCo='1'
//     }else if(this.check==false){
//        this.valuCo='0'
//     }

//     console.log( this.photo)
  
// },


   async handalSubmit() {
     
             const atmnirbhar = new FormData();
             atmnirbhar.append('name', this.name)
             atmnirbhar.append('email', this.email)
             atmnirbhar.append('mobile_no', this.mobile_no)
             atmnirbhar.append('address', this.address)
             atmnirbhar.append('state_id', this.state_id)
             atmnirbhar.append('city_id', this.city_id)
             atmnirbhar.append('business_name', this.business_name)
             atmnirbhar.append('business_address', this.business_address)
             atmnirbhar.append('current_occupation', this.current_occupation)
             atmnirbhar.append('net_annual_income', this.net_annual_income)
             atmnirbhar.append('country_id', '101')
             atmnirbhar.append('education', this.education)
             atmnirbhar.append('education_certificate', this.education_certificate)
             atmnirbhar.append('pancard_number', this.pancard_number)
             atmnirbhar.append('pancard_doc', this.pancard_doc)
             atmnirbhar.append('aadharcard_number', this.aadharcard_number)
             atmnirbhar.append('aadharcard_doc', this.aadharcard_doc)
             atmnirbhar.append('gst_no', this.gst_no)
             atmnirbhar.append('gst_no_proof_doc', this.gst_no_proof_doc)
             atmnirbhar.append('is_checked', this.is_checked)

             

             const response = await axios.post('dsa/dsas',atmnirbhar)
            .then((response) => {
               this.errmsg=''
              this.succses = response.data.message;
              })
             .catch((error) => {
                this.errmsg=''
                this.succses=''
              this.errmsg = error.response.data.message
              console.log(error);
            this.showDismissibleAlert=true
          });
           console.log(response);
           
           
         
       },
     getCity(){
                     axios.get('cities_of_state?is_light=1'+this.state_id, {
                    params: {  state_id: this.state_id  }  })
                     .then((result)=>{
                        this.city=result.data.data;
                      })}

  
      },
 
        mounted() {
           this.usersOldData = JSON.parse(localStorage.getItem("UserDetails"));
              this.state_id= this.usersOldData.state.id
              this.city_id= this.usersOldData.city.id
           axios.get('states_of_country?is_light=1', {
                    params: {  country_id:'101'  }  })
                     .then((result)=>{
                        this.state=result.data.data;
                         if(this.state_id){
                           this.getCity()
                       }
                           
                      })
           
      
  
  },



 

   
 }
</script>

 <style scoped>
 table td {
  position: relative;
}

table td input {
  position: absolute;
  display: block;
  top:0;
  left:0;
  margin: 0;
  height: 100%;
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
}
 </style>