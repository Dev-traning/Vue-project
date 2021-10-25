<template>
  <div>
<div class="border-0 card-body w-100 bg-success  rounded-3 ">
   <!-- <h4 class="mt-2 mb-0 text-white font-xs fw-600 ms-4">Requirment List</h4> -->

   <div class="row ">
  <div class="col-sm-6"><p class="float-start  mb-0 text-white font-xs fw-600 ">Requirment list</p></div>  
  <div class="col-sm-6">
        <router-link type="submit" to="/PostReq" class=" text-primary float-right btn-sm bg-light fw-500">Create Post My Requirment</router-link>
         
  </div>  
</div>
 
</div>
<div class="p-1 border-0 card-body p-lg-3 w-100">

  <table class="table table-bordered">
  <thead>
    <tr>
       <th scope="col">Sr.No.</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="(requirements, i) in requirement" v-bind:key="requirements.id" >
            <th scope="row">{{i + 1}}</th>
            <td>{{requirements.title.slice(0, 10)}}</td>
            <td>{{requirements.description.slice(0, 15)}}</td>
            <td class="w-25"><img class="img img-fluid  rounded  w40" :src="requirements.photo" height="40 rounded"  ></td>
            <td> <button v-b-modal.edit v-on:click="show(requirements.id,i)" class="btn p-0 m-0" type="button" > <i class="p-0 feather-edit font-md p-1"></i> </button> <button v-on:click="deletePosts(requirements.id,i)" class="btn p-0 m-0" type="button" > <i class="p-0 feather-trash-2 font-md p-1"></i> </button> </td>
         </tr>
    
  </tbody>

</table>
     
   
      <!-- <b-pagination v-model="currentPage" :total-rows="rows" align="right"></b-pagination> -->
 
  
     <b-modal scrollable show-close="ftrue" title="" class="font-xl" hide-footer id="edit" centered ref="modal" size="lg" >
            <button @click="$refs['modal'].hide()" type="button" class="closee" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> </button> 
            <h2 class="font-xl fw-550">Edit Requirement</h2>
            <form ref="form" @submit.prevent="update">
               <div>
                  <b-form-group class="mt-0 mb-1" label="Title" label-for="name-input" invalid-feedback="Name is required" >
                     <b-form-input class=" p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md " id="name-input" v-model="sowreq.title" ></b-form-input>
                  </b-form-group>
                  <b-form-group class="mt-0 mb-1" label="Description" label-for="name-input" invalid-feedback="Name is required" > </b-form-group>
                  <b-form-group class="mb-0" label="" label-for="name-input" invalid-feedback="Name is required" > <textarea name="message" class=" p-2 h100 bor-0 w-100 ps-2 font-xsss text-grey-500 fw-500 border-light-md theme-dark-bg " cols="30" rows="10" placeholder="What's on your mind?" v-model="sowreq.description" ></textarea> </b-form-group>
                  <div class=" p-0 mt-1 card-body border-dark-md h-300 w-100 mb-2 col-lg-12 " >
                     <div class="rounded mx-auto d-block">
                        <div class="w-100">
                           <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"/> 
                           <label for="file" class="erb-image-wrapper">
                             <div v-if="!imurl">
                            <img :src="sowreq.photo" v-if="sowreq.photo"/> 
                             </div>
                             <img :src="imurl" v-else-if="imurl" /> 
                              <img src="../../assets/no-image.jpg" v-else/> 
                              <div style="position: absolute; right: 19px; top: 5px"> 
                                <i class=" feather-edit large-icon me-2 d-block text-white mt-2 " ></i> 
                                <input type="file" name="file" id="file" class="input-file" @change="onFileSelected"/> </div>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div class="p-0 mt-0 w-100">
                     <b-button type="submit" style="background-color: #004898 !important" class=" mt-1 mb-0 text-white w-100 font-xss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-success me-1 ms-auto " >SAVE</b-button >
                  </div>
               </div>
            </form>
         </b-modal>

</div>
</div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "CreateJob",
  data() {
    return {
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
    onFileSelected(event) {
      this.sowreq.photo = event.target.files[0];
       this.imurl = window.URL.createObjectURL(event.target.files[0]);
      
      
    },

    getData() {
      axios.get("restaurants/my-requirements").then((result) => {
        this.requirement = result.data.data;
       
      });
    },
    deletePosts(id,i) {
      axios.delete("restaurants/requirement/" + id)
      .then(() => {
        this.requirement.splice(i, 1);
      
      });
    },
    show(id,i) {
      this.getIndexVl = i
      axios
        .get("restaurants/requirement/" + id)

        .then((result) => {
          this.sowreq = result.data.data;
         this.itemid = id;
        });
    },

    async update() {
      const photo = new FormData();
        if(this.sowreq.photo.name){
             photo.append('photo', this.sowreq.photo, this.sowreq.photo.name);
           }
      
      photo.append("title", this.sowreq.title);
      photo.append("description", this.sowreq.description);
      const response = axios.post(
        "restaurants/requirement/" + this.itemid,
        photo
      ) .then((result) => {
             this.requirement[this.getIndexVl] =result.data.data
              this.requirement.push();
        
        });
      this.$refs['modal'].hide()
      console.log(response);
   
      
    },
  },

  mounted() {
     
    this.getData();
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
 