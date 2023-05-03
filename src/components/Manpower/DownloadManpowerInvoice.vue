<template>
    <div>
       <div class=" pl-4 border-0 card-body w-100 bg-success  rounded-3 ">
          <div class="row ">
             <div class="col-sm-6">
                
                <p class="float-start  mb-0 text-white font-xs fw-600 ">Download Invoice</p>
                
             </div>
            
       </div>
      </div>
      <div class="p-2 border-0 card-body w-100">
         <div class="m-1 row">
            <div class="col-md-7">
                <!-- <pdf src="./path/to/static/relativity.pdf"></pdf> -->
                
                <b-button type="submit" :disabled="!isSubscribed" @click="DownloadInvoice()" style=" font-size: 2vh; background-color: #004898!important" class="font-xsssss fw-700 ps-3 p-3 pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto" >

                     Elite  Invoice
                </b-button>
           

            </div>

            <div class="col-md-5">
                <!-- <pdf src="./path/to/static/relativity.pdf"></pdf> -->
                
                <!-- <b-button type="submit" style=" font-size: 2vh; background-color: #004898!important" class="font-xsssss fw-700 ps-3 p-3 pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto" >

                    Promotion Invoice
                    </b-button> -->

            </div>
           
         </div>
      </div>
      </div>
 </template>
 <script> 
 import axios from "axios"; 
//  import pdf from 'vue-pdf';
   import {mapGetters} from 'vuex'
 export default {
     name: 'DownloadInvoice',
     components: {
  },
      data() {
     return {
         is_subscribed:true,
         isSubscribed: true,
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

       async DownloadInvoice(){
            
    const url = 'download-invoice';
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'blob',
        headers: {
          Accept: 'application/pdf',
        },
      });

      const urlObject = window.URL.createObjectURL(response.data);
      const a = document.createElement('a');
      a.href = urlObject;
      a.download = 'invoice.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    },

         getData() { 

            axios.get('user').then((result) => { 
                
                
                if (result.data.is_subscribed === false) {
              this.isSubscribed = false;
            } else {
              this.isSubscribed = true;
            }
  
              });
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