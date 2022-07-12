

<template>
<div >
   <div class="main-wrapper">
      <div class="main-content right-chat-active">
         <div class="middle-sidebar-bottom">
            <div class="middle-sidebar-left">
            
               <div class="row">
                  <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                   
                    
                   <!-- <RestaurantAll />
                     <div class="row">
                       <VendorHome />
                     </div> -->
                  </div>
                  <div class="col-xl-6 col-xxl-6 col-lg-6">

 
   <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-if="readVendor">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="readVendor.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="readVendor.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
      <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Category</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.business_category}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Person Name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.user.full_name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Phone </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.mobile_no}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Main City </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.native_city_id.name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Country </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.country.name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">State </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.state.name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Current City </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.current_city_id.name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Company </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.business_name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Email </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.email}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Address </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.address}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">How Much Time </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.time_limit}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Product Rates </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss" >
         <tr>
            <td >Name</td>
            <td class="pl-4">Rate</td>
         </tr>
         <tr v-for="prod in readVendor.product_name" v-bind:key="prod.id">
            <td >{{prod.name}}</td>
            <td class="pl-4">{{prod.rate}}</td>
         </tr>
         </td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Comment</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{readVendor.comments.slice(0,45)}}</td>
         </tr>
      </table>
     <!-- <a href="#" class=" font-xsssss fw-500 ps-3 pe-3 lh-32 mt-1 rounded-3 ls-2 bg-success d-inline-block text-white me-1 text-center">Interest</a> -->
   </div>

     <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="manpowerData">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="manpowerData.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="manpowerData.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>

       <div class="d-flex">
            <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{manpowerData.user.name}}</p>
            <div class="ml-auto">
               <p class="fw-500 text-grey-500 lh-0 font-xssss mb-2">{{ moment(manpowerData.updated_at).fromNow()}}</p>
            </div>
         </div>
         <hr class="mb-2 mt-0" >

       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Category</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.business_category}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Person Name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.user.name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Phone</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.mobile_no}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Email</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.email}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Experience</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.experience}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Qualification</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.qualification}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Resume</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss" v-if="manpowerData.resume"><a v-b-modal.pdffileopen ><ins>See Resume</ins></a> 
            
             </td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">City</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.current_city.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">State</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.state.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Country</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{manpowerData.country.name}}</td>
         </tr>
  </table>
 
 
                
   </div>




       <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="givFranch">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="givFranch.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="givFranch.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Brand Name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.brand_name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Company Name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.company_name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">City</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.city.name}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">State</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.state.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Country</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.country.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Segment</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.segment_multi}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Current number of outlets</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss" >{{givFranch.outlet_count}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Franchisee Type </td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.franchise_type}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Current turnover Per outlet</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.turnover}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Total Investment</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.total_investment}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Working Capital</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.working_capital}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Net Profit(Expected p.m)</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.net_profit}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Expected Turnover of franchisee</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.expected_turnover}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Franchisee Fees</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.franchise_fees}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">ROI</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.return_on_investment}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Contact Person name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.contact_name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Mobile Number</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{givFranch.contact_phone}}</td>
         </tr>

  </table>
 
  <div v-if="givFranch.restaurant.id==users.restaurant.id==false">
<b-button style="background-color: #004898 !important" class="w-100 p-0 mt-2"  @click="SMRDataIntrst(givFranch.user_type_text)" v-if="givFranch.relation==0">Interested</b-button>
</div>

   </div>
 
   <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="SMRData">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="SMRData.medias[0].path" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="SMRData.medias[0].path">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Opening Since</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.operate_since}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Running or Closed</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.is_closed_text}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">TurnOver P.M</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.turnover}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">City</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.city.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">State</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.state.name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Country</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.country.name}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Current Cost P.M</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss" >{{SMRData.cost}} </td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Profit Per Month</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.profit}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Expected Price</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.expected_price}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Price Will Include list</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.price_include_list}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Contact Person Name</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.contact_name}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Mobile Number</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.contact_phone}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Email Address</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{SMRData.contact_email}}</td>
         </tr>
          
          
        

  </table>
  
 
<div v-if="SMRData.restaurant.id==users.restaurant.id==false">
<b-button style="background-color: #004898 !important" class="w-100 p-0 mt-2"  @click="SMRDataIntrst(SMRData.user_type_text)" v-if="SMRData.relation==0">Interested</b-button>
</div>
   
   
 
   
   </div>



 <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="jobsShow">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="jobsShow.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="jobsShow.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Position</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.position}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Experience</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.experience}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Salary</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.salary}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Job timing</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">From {{jobsShow.job_timing_from}} - To {{jobsShow.job_timing_to}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Location</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.location}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Job description</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.description}}</td>
         </tr>
        
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Benfit</td>
            <td class="fw-500 text-primary text-primary-500 w-50 lh-0 font-xss">{{jobsShow.other_benefits}}</td>
         </tr>
            
          
        

  </table>
   </div>


   <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="RestarantShow">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="RestarantShow.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="RestarantShow.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Restaurant Type</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.restaurant_type}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Business Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.business_name}}</td>
         </tr>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.name}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Email</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.email}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Mobile no</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.mobile_no}}</td>
         </tr>
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Country</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.description}}</td>
         </tr>
        
            <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">State</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.state.name}}</td>
         </tr>

       

             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Current City</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.current_city.name}}</td>
         </tr>

             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Address</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.address}}</td>
         </tr>
             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Gst No</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.gst_no}}</td>
         </tr>
             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Business url</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.business_url}}</td>
         </tr>
             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Facbook url</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.facbook_url}}</td>
         </tr>
             <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Linkedin url</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.linkedin_url}}</td>
         </tr>

           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Instagram url</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.instagram_url}}</td>
         </tr>

           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Twiter url</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.twiter_url}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Comments</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{RestarantShow.comments}}</td>
         </tr>   


            
          
        

  </table>
   </div>


    <div class="card w-100 shadow-xss  border-0 p-3 mb-3" v-else-if="requirement">
      <div class="card-body d-block p-0 mb-2">
         <div class="row ps-2 pe-2">
            <div class="col-xs-12 col-sm-12 p-1">
               <img :src="requirement.photo" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-if="requirement.photo">  
               <img src="../../assets/no_image_available.jpg" class="rounded-3 w-100" alt="image" height="300" style="object-fit: cover;" v-else> 
            </div>
         </div>
      </div>
       <table>
         <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxss">Title</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.title}}</td>
         </tr>
        
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Business Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.restaurant.business_name}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Name</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.restaurant.name}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Email</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.restaurant.email}}</td>
         </tr>
           <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Mobile No</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.restaurant.mobile_no}}</td>
         </tr>
          <tr>
            <td class="fw-600 text-primary text-primary-600 w-50 lh-0 font-xxs">Description</td>
            <td class="fw-400 text-primary text-primary-500 w-50 lh-0 font-xss">{{requirement.description}}</td>
         </tr>  </table>
         <b-button style="background-color: #004898 !important" class="w-100 p-0 mt-2"  @click="vendorRequir" v-if="requirement.relation==0">Interested</b-button>
   </div>

   

  <b-modal scrollable v-if="manpowerData"  ref="postmodel" show-close="ftrue"  hide-footer id="pdffileopen" centered size="xl" > 
            <button @click="modelClose()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
         <div class="modal-header pl-4 m-0 pb-0">
            <h2 class="modal-title  text-center mt-2" ><ins>{{manpowerData.user.first_name}} {{manpowerData.user.last_name}}</ins></h2>
         </div>
      

         <div class="embed-responsive embed-responsive-16by9 z-depth-1-half mt-2">
    <iframe class="embed-responsive-item" :src='manpowerData.resume'  allowfullscreen></iframe>
  </div>


  </b-modal>


                  
   
                  
                  </div>
                  <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                    <!-- <ManpowerHome/> -->
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
   
  
</div>
</template>

<script>
 
// import RestaurantAll from "../../components/Restaurant/RestaurantAll.vue";
//  import VendorHome from "../../components/Vendor/VendorHome.vue";
//  import ManpowerHome from "../../components/Manpower/ManpowerHome.vue";

import axios from "axios";
import moment from 'moment'
export default {
  name: 'ReadMore' ,
   components: {
 
   //  RestaurantAll,
   //  VendorHome,
   //  ManpowerHome
 
  },

  data() {
    return {
      
      readVendor: '',
       moment: moment,
      manpowerData:[],
      SMRData:'',
      givFranch:'',
      jobsShow:'',
      RestarantShow:'',
      requirement:'',
      users:'',
    };
  },
  methods: {
 makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {
          title: `Variant ${variant || 'default'}`,
          autoHideDelay: 5000,
          variant: variant,
          solid: true
        })
      },

      SMRDataIntrst(user_type_text) {
         
         if(user_type_text === 'sell_my_restaurant'){ 
            axios.post('restaurants/sell-my-restaurants/interested/'+this.smrId,{ is_intrested: '1'})
           .then(() => {this.SMRData.push(this.SMRData.relation='1')})}
        else if(user_type_text === 'give_franchise'){ 
            axios.post('restaurants/give-franchises/interested/'+this.givFranchId,{ is_intrested: '1'})
           .then(() => {this.givFranch.push(this.givFranch.relation='1')})}
         

                  const Toast = this.$swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                     toast.addEventListener('mouseenter', this.$swal.stopTimer)
                     toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                  } })
               Toast.fire({
               icon: 'success',
               title: 'Interested Success'
               }) },

    async vendorRequir(){
         //  axios.post('vendor/vendors/interested/'+this.requirementId,{ is_intrested: '1'})
         //   .then(() => {this.requirement.push(this.requirement.relation='1')})
     
     const { value: formValues } = await this.$swal.fire({
  title: 'Please Fill This...',
  showCancelButton: true,
  confirmButtonText: 'Submit',
  showLoaderOnConfirm: true,
  html:
    '<input id="swal-input1" class="swal2-input" placeholder="Mobile No.">' +
    '<input id="swal-input2" class="swal2-input" placeholder="Rate">'+
     '<input id="swal-input3" class="swal2-input" placeholder="Remark">',
  focusConfirm: false,
  preConfirm: () => {
    return [
       this.mobile=  document.getElementById('swal-input1').value,
        this.rate = document.getElementById('swal-input2').value,
        this.remark = document.getElementById('swal-input3').value
    ]
  }
})
 

if (formValues) {
  
     axios.post('vendor/vendors/interested/'+this.requirementId,{ 
      is_intrested: '1',
      mobile_no:this.mobile,
      rate:this.rate,
      remark:this.remark
      })
           .then(() => {this.requirement.push(this.requirement.relation='1')})

    const Toast = this.$swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                     toast.addEventListener('mouseenter', this.$swal.stopTimer)
                     toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                  } })
               Toast.fire({
               icon: 'success',
               title: 'Interested Success'
               }) 
}
 
    },

    
     modelClose(){
this.$refs['postmodel'].hide()
     },
    getData() {
      this.readId = this.$route.params.id;
      var cat =  this.$route.params.user_type_text;
    
       

         if(cat === 'Vendor'){
          axios.get("vendor/vendor/" + this.readId)
          .then((result) => {
          this.readVendor = result.data.data;
            })} if(cat === 'Manpower'){
          axios.get("mp/manpowers/"+ this.readId)
          .then((result) => {
          this.manpowerData = result.data.data;
           })}if(cat === 'sell_my_restaurant'){
          axios.get("restaurants/sell-my-restaurant/"+ this.readId)
          .then((result) => {
          this.SMRData = result.data.data;
          this.smrId =result.data.data.id
           })}if(cat === 'give_franchise'){
          axios.get("restaurants/give-franchise/"+ this.readId)
          .then((result) => {
          this.givFranch = result.data.data;
           this.givFranchId =result.data.data.id
           })}if(cat === 'job'){
          axios.get('restaurants/job/'+ this.readId)
          .then((result) => {
          this.jobsShow = result.data.data;
           })}if(cat === 'Restaurant'){
          axios.get('restaurants/restaurants/'+ this.readId)
          .then((result) => {
          this.RestarantShow = result.data.data;
           })}if(this.$route.path === this.$route.path){
          axios.get('restaurants/requirement/'+ this.readId)
          .then((result) => {
          this.requirement = result.data.data;
           this.requirementId =result.data.data.id
           })}

     
    },
  },
   
  mounted() {
 let user = localStorage.getItem("token");
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
    if (!user) {
      this.$router.push({ name: "/" });
    }
    this.getData();
  },
};
</script>
  