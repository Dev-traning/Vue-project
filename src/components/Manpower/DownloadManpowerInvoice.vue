<template>
   <div>
 <div class="border-0 card-body w-100  bg-success  rounded-3 ">
    <!-- <h4 class="mt-2 mb-0 text-white font-xs fw-600 ms-4">Requirment List</h4> -->
 
    <div class="row ">
   <div class="col-sm-6"><p class="float-start  mb-0 text-white font-xs fw-600 ">Download Invoice </p></div>  
   
 </div>
  
 </div>
 <div class="p-1 border-0 card-body p-lg-3 w-100">
   <div>
     <b-button  @click="PromotedInvoice()" :disabled="!isSubscribed" style="width: 14.3rem; margin-left: 2%; float: right; font-size: 2vh; background-color: #004898!important ; max-height: 2.5em; display: flex; align-items: center; justify-content: center;  " class=" fw-500  bg-success d-inline-block text-white me-1 "  >
                      Promoted  Invoice
                 </b-button>
   <b-button  @click="EliteInvoice()" :disabled="!isSubscribed" style="width: 14.3rem; float: right; font-size: 2vh; background-color: #004898!important ; max-height: 2.5em; display: flex; align-items: center; justify-content: center;  " class=" fw-500  bg-success d-inline-block text-white me-1 "  >
                 Elite  Invoice
                 </b-button> 
                 
               </div>
   <table class="table table-bordered" style="margin-top: 7%;">
   <thead>
     <tr>
        <th scope="col">Plan Name</th>
             <th scope="col">Amount</th>
             <th scope="col" colspan="2"   style="border-collapse: collapse; ">Invoice</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="(listshow) in list" v-bind:key="listshow.id" >
                                               
                                                   <td v-if="listshow.plan_name" style=" padding-top: 2%; "> {{listshow.plan_name}} </td>
                                                         <td v-else style="  padding-top: 2%;"> - </td>
                                                         <td style=" padding-top: 2%; ">{{listshow.total_amount}}/-</td>
 
                                                         <td align="left" style="padding-top: 2%; border-right: none;">
                                                           {{listshow.invoice_no}}
                                                           </td><td align="right" style=" border-left: none;">
                                                         <b-button     @click="DownloadInvoice(listshow.id)" :disabled="!isSubscribed" style=" width: 9em; border-color: #004898!important; background-color: #0062cf!important;" class=" fw-500 ps-2 p-2 pe-2 lh-200  mt-1 mb-0  text-white me-1 ms-auto" >
                                                                           Download 
                                                                   </b-button>
                                                          </td>
                                                  
                                               </tr>
 
                                               
     
   </tbody>
 
 </table>
  
 </div>
 </div>
 </template>
 <script>
 import axios from "axios";
 import { mapGetters } from "vuex";
 export default {
   name: "downloadinvoice",
   data() {
     return {
       isSubscribed: true,
       list:"",
       itemid: "",
       requirement: "",
       title: "",
 imurl:'',
       sowreq: {
         title: "",
         description: "",
         photo: "",
       },
     };
   },
   methods: {
     async  DownloadInvoice(id){
 
       
          const url = 'download-invoice/'+id;
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
 
     EliteInvoice(){
 
       axios.get('invoicess?filter={"is_elite":"1"}').then((result)=>{
 
         if(result.data.data == null){
             this.list = null ;
 
           }else{
            
           this.list = result.data.data;
 
           }
           });
     },
     PromotedInvoice(){
 
       axios.get('invoicess?filter={"is_elite":"0"}').then((result)=>{
           if(result.data.data == null){
             this.list = null ;
 
           }else{
            
           this.list = result.data.data;
 
           }
       
           
 });
 
 
     }
   },
 
   mounted() {
     if (!localStorage.getItem("token")) {
          this.$router.push('/')}
 
          axios.get('user').then((result) => { 
                 
                 
                 if (result.data.is_subscribed === false) {
               this.isSubscribed = false;
             } else {
               this.isSubscribed = true;
               this.EliteInvoice();
             } });
 
       
              
     this.getData();
   },
 
   computed: {
     ...mapGetters(["user"]),
   },
 };
 </script>
  <style>
 
   tbody td {
 
     padding-top: 10px;
 
   }
 </style>