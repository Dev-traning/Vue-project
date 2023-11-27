<template>
<div>
   <div class="card-body w-100 bg-success border-0 d-flex rounded-3">
     
      <h4 class="font-xs text-white fw-600 ms-4 mb-0">Edit Profile</h4>
   </div>
   <div class="card-body p-lg-3 p-4 w-100 border-0">
        <b-alert v-model="suuualert" variant="success" dismissible>
     {{succses}}
    </b-alert>

            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      {{errmsg}}
    </b-alert>
          <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
            <div class="row mb-2">
               <div class="col-lg-6">
                  <div class="mb-2 w-100">
                     <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"/> 
                     <label for="file" class=" erb-image-wrapper " >
                        <!-- <img :src="`${manpower.photo}`"  class="w-100 rounded-3"  v-if="manpower.photo" />
                        <img src="../../assets/blank.png"  class="w-100 rounded-3" v-else/> -->

                          <div v-if="!imurl">
                            <img :src="manpower.user.profile_photo" class="w-100 rounded-3" v-if="manpower.user.profile_photo"/> 
                            <img src="../../assets/blank.png" class="w-100 rounded-3" v-else/> 

                             </div>
                             <img :src="imurl" class="w-100 rounded-3" v-else-if="imurl" /> 
                              <img src="../../assets/blank.png" class="w-100 rounded-3" v-else/>
                              <!-- <img :src="`${manpower.profile_photo}`" class="w-100 rounded-3" v-if="manpower.photo">
                <img src="../../assets/profile-no-img.png" class="w-100 rounded-3" v-else/> -->

                        <div style="position: absolute; right: 19px; top: 5px">
                           <i class="feather-edit large-icon me-2 d-block text-white mt-2"></i>
                           <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"  />
                        </div>
                     </label>
                  </div>
               </div>
               <div class="col-lg-6 mb-2">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">Full Name</label>
                     <input type="text" class="form-control" v-model="manpower.name" />
                     <label class="mont-font fw-600 font-xsss">Catgory</label>
                     <input type="text" class="form-control" v-model="manpower.type" />
                     <label class="mont-font fw-600 font-xsss">Email</label>
                     <input type="text" class="form-control" v-model="manpower.email" />

                      <label class="mont-font fw-600 font-xsss">Address</label>
                    <input type="text" class="form-control" v-model="manpower.address" />

                    <label class="mont-font fw-600 font-xsss">Mobile No.</label>
                    <input type="text" class="form-control" v-model="manpower.mobile_no" />

                   

                  </div>
               </div>
            </div>
          
          <div class="row">
   <div class="col-lg-4 mb-2">
      <label class="mont-font fw-600 font-xsss">Country</label> 
    <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="manpower.country.id" @change="getState()" >
                     <option value="" disabled selected>Country</option>
                     <option v-for="country in list" :value="country.id" v-bind:key="country.id" >{{country.name}}</option>
                  </select>
   </div>
   <div class="col-lg-4 mb-2">
      <div class="">
         <label class="mont-font fw-600 font-xsss">State</label> 
       <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="manpower.state.id" @change="getCity()" >
                     <option value="" disabled selected>State</option>
                     <option v-for="item in state" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
                  </select>
      </div>
   </div>
   <div class="col-lg-4 mb-2">
      <div class="">
         <label class="mont-font fw-600 font-xsss">Current City</label> 
          <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="manpower.native_city.id" >
                     <option value="" disabled selected>City</option>
                     <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
                  </select>
      </div>
   </div>
</div>
      
            <div class="row">
               <div class="col-lg-6 mb-2">


                  <label class="mont-font fw-600 font-xsss">Main Office City</label>
                   

                           <select style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 0.9rem; " class="form-select" aria-required="true" aria-invalid="false" v-model="manpower.current_city.id" >
                     <option value="" disabled selected>City</option>
                     <option v-for="item in city" :value="item.id" v-bind:key="item.id" >{{item.name}}</option>
                  </select>

</div>
                  <div class="col-lg-6 mb-2">
                     <label class="mont-font fw-600 font-xsss">Gst No</label>
                     <input
                        type="text"
                        class="form-control"
                        v-model="manpower.gst_no"
                        />
                  </div>
               
            </div>


            
            <div class="row">
          <div class="col-lg-6 mb-2">
                     <label class="mont-font fw-600 font-xsss">Qulification</label>
                     <input
                        type="text"
                        class="form-control"
                        v-model="manpower.qualification"
                        />
                  </div>
                  <div class="col-lg-6 mb-2">
                     <label class="mont-font fw-600 font-xsss">Experience</label>
                     <input
                        type="text"
                        class="form-control"
                        v-model="manpower.experience"
                        />
                  </div>
               
            </div>
            <div class="row">
               <div class="col-lg-12 mb-2">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">GST No.</label>
                     <input type="text" class="form-control" placeholder="Optional" v-model="manpower.gst_no"/>
                  </div>
               </div>
            </div>
             <div class="row">
               <div class="col-lg-12 mb-2">
                  <div class="">
                     <label class="mont-font fw-600 font-xsss">About You</label>
                     <input type="text" class="form-control" v-model="manpower.comments"/>
                  </div>
               </div>
            </div>

             <div class="row">
               <div class="col-lg-10 mb-2">
                  <div class="">
                      <label class="mont-font fw-600 font-xsss" v-if="!message">Upload Resume</label>

                         <label class="mont-font fw-600 font-xsss text-success" v-else>{{ message }}</label>
                    

 <b-form-group  label-cols-sm="0" label-size="sm">
    <b-form-file  :placeholder="manpower.resume" id="file-small"  @change="uploadresume"></b-form-file>
  </b-form-group>

                      
                  </div>
               </div>

                 <div class="col-lg-2  ">
                   <div class="">
                     <label class="mont-font fw-600 font-xsss">Show</label><br>
                
                     <button type="button" class="btn btn-primary"  v-b-modal.pdffileopen>View</button>
 
                  </div>
               </div>
            </div>
     

 
 

            <div class="row">
               <div class="col-lg-12 mt-0">
                  <b-button
                     type="submit"
                     style="background-color: #004898 !important"
                     class=" font-xsssss fw-600  ps-3  pe-3 lh-32   rounded-3 ls-2 bg-success d-inline-block text-white  ms-auto w-100"
                     >Update</b-button>
               </div>
            </div>

 



         </form>


           <b-modal scrollable v-if="manpower"  ref="postmodel" show-close="ftrue"  hide-footer id="pdffileopen" centered size="xl" > 
            <button @click="$refs['postmodel'].hide()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
         <div class="modal-header pl-4 m-0 pb-0">
            <h2 class="modal-title  text-center mt-2" ><ins>{{manpower.user.full_name}}</ins></h2>
         </div>
      

         <div class="embed-responsive embed-responsive-16by9 z-depth-1-half mt-2">
    <iframe class="embed-responsive-item" :src='manpower.resume'  allowfullscreen></iframe>
  </div>


  </b-modal>

   </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "ManpowerEditProfile",

  data() {
    return {
      list: [],
      state: [],
      city: [],
       imurl:'',
            errmsg:'',
         succses:'',
         suuualert: false,
       showDismissibleAlert: false,

      manpower: {
              user:{
                full_name:" "
              },
        name: "",
        email: "",
        mobile_no: "",
        photo: "",
        address: "",
        country:{id:''},
        state:{id:''},
        native_city: {id:''},
        current_city:{id:''},
        gst_no: "",
        comments: "",
        type: "",
        qualification:'',
        experience:'',
        resume:'' ,
        uploadPercentage: 0,
        checkMobileNo:"",
        
    
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("token");
    if (!user) {
      this.$router.push({ name: "home" });
    }
    const result = await axios.get("mp/manpowers/my-profile");

    this.manpower = result.data.data;
    this.checkMobileNo =  this.manpower.mobile_no;
    this.getData();
  },
  methods: {
    onFileSelected(event) {
      this.manpower.photo = event.target.files[0];
      this.imurl = window.URL.createObjectURL(event.target.files[0]);
    },

       uploadresume(event) {
      this.manpower.resume = event.target.files[0];
        this.message = 'Pdf File Upload Successful'
    },

    async handalSubmit() {
      var itemId = '3315';
       var itemId2 = this.$route.params.id;
      const photo2 = new FormData();
      const photo = new FormData();
       if(this.manpower.photo.name){
      photo.append("photo", this.manpower.photo, this.manpower.photo.name)}
      if(this.manpower.resume.name){
photo.append("resume", this.manpower.resume);
      }
       
        
      if(this.checkMobileNo == this.manpower.mobile_no){
        console.log();
      }else{
        photo.append("mobile_no", this.manpower.mobile_no);
      }
      
      photo2.append("name", this.manpower.name);
    
      photo2.append("email", this.manpower.email);
      photo2.append("address", this.manpower.address);
      photo2.append("gst_no", this.manpower.gst_no);
      photo2.append("comments", this.manpower.comments);
      photo2.append("type", this.manpower.type);
      photo2.append("country_id", this.manpower.country.id);
      photo2.append("state_id", this.manpower.state.id);
      photo2.append("native_city_id", this.manpower.native_city.id);
      photo2.append("current_city_id", this.manpower.current_city.id);
      const response = await axios.post(
        "users/" + itemId,
        photo,
        {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },

          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then((response) => {
          
          this.succses = response.data.message;
          this.suuualert=true;
  

           
        })
        .catch((error) => {
     this.errmsg = error.response.data.message
          console.log(error);
           this.showDismissibleAlert=true
        });

        const response2 = await axios.post(
        "mp/manpowers/" + itemId2,
        photo2).then((res)=>{
          console.log(res.data);
        })
      
      console.log(response,response2);
      
    },

    getData() {
      axios.get("countries?is_light=true").then((result) => {
        this.list = result.data.data;
        console.warn(result);
        this.getState();
        console.warn("sonu result get country");
      });
    },

    getState() {
      axios
        .get("states_of_country?is_light=1" + this.manpower.country.id, {
          params: { country_id: this.manpower.country.id },
        })
        .then((result) => {
          this.state = result.data.data;
          console.warn(result);
          this.getCity();
          console.warn("sonu result get state");
        });
    },
    getCity() {
      axios
        .get("cities_of_state?is_light=1" + this.manpower.state.id, {
          params: { state_id: this.manpower.state.id },
        })
        .then((result) => {
          this.city = result.data.data;
          console.warn(result);
          console.warn("sonu result get city");
        });
    },
  },
};
</script>

 