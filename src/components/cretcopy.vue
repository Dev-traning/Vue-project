<template>
   <div>
      <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
         <a href="default-settings.html" class="d-inline-block mt-2"><i class="ti-arrow-left font-sm text-white"></i></a>
         <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">Post My Requirment</h4>
      </div>

      
      <div class="card-body p-lg-3 p-4 w-100 border-0 ">
         <form @submit.prevent="handalSubmit" >
            <div class="row">
               <div class="col-lg-12 mb-2">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Title</label>
                     <input type="text" class="form-control">
                  </div>
               </div>
               <div class="col-lg-12 mb-2">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Description</label>
                     <textarea class="form-control mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..." spellcheck="false"></textarea>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-12 mb-2">
                  <div class="card mt-3 border-0">
                     <div class="card-body d-flex justify-content-between align-items-end p-0">
                        <div class=" mb-2 w-100">
                           <input type="file" name="file" id="file" class="input-file">
                           <label for="file" class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                           <i class="ti-cloud-down large-icon me-3 d-block"></i>
                           <span class="js-fileName">Drag and drop or click to replace</span>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-12 mt-2">
                  <b-button type="submit" style="background-color: #004898!important" class="font-xsssss fw-700 ps-3 p-3 pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto">Create</b-button>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>
<script>
   import axios from "axios";
    
   export default {
       name: 'CreateJob', 
        data() {
       return {
         description: " ",
         title: "",
         
         
       };
     },
       methods: {
       async handalSubmit() {
       
           const response = await axios.post("restaurants/requirement", {
             description: this.description,
             title: this.title,
         
        
           });
           console.log(response);
           alert('Record has been stored successfully.');
         
       },
     },
        
   }
</script>