<template>
    <div>

      <form ref="form" @submit.prevent="updatepost(itemIndex)" class="p-4 pt-2" >
            <error v-if="error" :error="error"/>
            <b-form-group class=" mb-1 mt-0" label="Title" label-for="name-input" invalid-feedback="Name is required" >
               <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md " id="name-input" v-model="singlepost.title"></b-form-input>
            </b-form-group>
            <b-form-group class=" mb-2 mt-0" label="Location" label-for="name-input" invalid-feedback="Name is required" >
               <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="singlepost.location" ></b-form-input>
            </b-form-group>
            <b-form-group class="mb-0 " label="Description" label-for="name-input" invalid-feedback="Name is required" > <textarea name="message" v-model="singlepost.description" class="h100 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?"></textarea> </b-form-group>
           
            <div class="card-body d-flex p-0 mt-2 mb-2">
               <a href="#" class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4">
                  <div class="left">
                     <label class="file">
                     <i class="font-md text-success feather-image me-2"></i>
                     <span class="d-none-xs">Photo</span>
                     <input  type="file" class="images[]" name="images"  id="file-small"  @change="imageupload($event.target.name, $event.target.files)" multiple accept="image/*">
                     </label>      
                  </div>
               </a>
               <div class="img-wrap  d-flex">
                  <div v-for="(img,index) in url" :key="img">
                     <b-img class="p-1" v-bind="mainProps" rounded :src="img"  alt="Top-rounded image"  width="50" height="50"></b-img>
                     <span type='button' class="close" @click="removeImage(index)"  >&times;</span> 
                  </div>
               </div>

                  <div class="img-wrap  d-flex">
                  <div v-for="(img,index) in singlepost.medias" :key="img.id">
                     <b-img class="p-1" v-bind="mainProps" rounded :src="img.path"  alt="Top-rounded image"  width="50" height="50"></b-img>
                     <span type='button' class="close" @click="removeIm(img.id,index)"  >&times;</span> 
                  </div>
               </div>

              
            </div>
            <b-button type="submit" style="background-color: #004898!important" class="font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"  >Update</b-button>
         </form>
    </div>
</template>
<script>
import axios from "axios";
 
 

export default {
  name: "PostFeed",
     
  data() {
    return {
      user_id: "",
      post: [],
      LikeShow: [],
      comment: [],
      type: 3,
      likeuser: [],
      body: [],
      comments: "",
      comentsshow:'',
      singlecomment: { body: "" },
      page:'1',
      lastPage:'1',
      isModalVisible: false,
      productsShow: 15,
         
   fileList:'',
   url:[],
      singlepost:{ 
         body: [],
         title:'',
         location:'',
         description:'',
          images:[],}
    };
  },
  methods: {
    onCancel() {
      console.log("CANCEL SUBMIT");
      this.show = false;
      this.$router.go();
    },


  imageupload (images, fileList) {
        this.singlepost.images = fileList;
    this.singlepost.images.forEach((value, index) => {
      var indadd = window.URL.createObjectURL(fileList[index])
        this.url.push(indadd)
             console.log(this.url)
            });
    
       console.log(this.singlepost.images);
  },
 
   removeImage(index) {
      this.url.splice(index, 1)
    }, 

     removeIm(id,index) {
      
            axios.delete("medias/" + id)
            .then(() => { 
                  this.singlepost.medias.splice(index,1)
            });
  

   
    }, 

 
  
 

     updatePostid() {
           let comId = JSON.parse(localStorage.getItem("updatePostid"));
           axios.get(`posts/`+comId).then((result) => {
           this.singlepost = result.data.data;
           console.warn(result);
        })},
 
  
  updatepost(){
      
      let comId = JSON.parse(localStorage.getItem("updatePostid"));
     
        
        const postCreate = new FormData();
                 if(this.singlepost.images){
               this.singlepost.images.forEach((value, index) => {
                var img =  `medias`
                var ind = `[${index}]`
                console.log('image cosole log',img + ind)
            postCreate.append(img + ind, value)});}

           
            postCreate.append('description', this.singlepost.description)
            postCreate.append('title', this.singlepost.title)
            postCreate.append('tags', this.singlepost.tags)
            postCreate.append('location', this.singlepost.location)
            const response = axios.post('posts/'+comId, postCreate)
      
                 this.$router.go('');
           console.log(response);
  }, },
  mounted() {
    this.updatePostid();
  },
  
};
</script>