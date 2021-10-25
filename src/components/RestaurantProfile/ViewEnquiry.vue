<template>
   <div>
      <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
         <a href="default-settings.html" class="d-inline-block mt-2"><i class="ti-arrow-left font-sm text-white"></i></a>
         <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">demo</h4>
      </div>
      <div class="card-body p-lg-3 p-4 w-100 border-0 "  >
         <form @submit.prevent="handalSubmit" enctype="multipart/form-data" >
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
               <div class="col-lg-4 mb-2">



                   <div class="card mt-3 border-0">
                     <div class="card-body d-flex justify-content-between align-items-end p-0">
                        <div class=" mb-2 w-100">
                           <input type="file" name="file" id="file" class="input-file" @change="onFileSelected">
                           <label for="file" class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-2 w-100 border-dashed">
                           <i class="ti-cloud-down large-icon me-3 d-block"></i>
                           <span class="js-fileName" v-if="!photo">Choose filse</span>
                             <span v-if="photo">{{photo.name}}</span>
                           </label>
                        </div>
                     </div>
                  </div>
                

  


 
               </div>

                 <div class="col-lg-8 mb-2">
 
 
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
       import {mapGetters} from 'vuex'
   export default {
       name: 'CreateJob', 
        data() {
       return { 
         description: "fdgdgdd",
         title: "dfgdf",
         photo:''
        };
     },
       methods: {
          onFileSelected(event){

            this.photo = event.target.files[0]
                 
        },
       async handalSubmit() {
           const photo = new FormData();
           photo.append('photo', this.photo, this.photo.name)
           photo.append('title', this.description)
           photo.append('description', this.title)

           const response = await axios.post("restaurants/requirement", 
              photo, {
              onUploadProgress: uploadEvent =>{
                console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%' )
             },
            
              header : {
          'Content-Type' : 'multipart/form-data'
        },
      
        
           });
           console.log(response);
           alert('Record has been stored successfully.');
         
       },
     },
   
        computed: {
          ...mapGetters(['user'])
        }
        
   }
</script>
 