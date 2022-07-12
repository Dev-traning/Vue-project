<template>
   <div>
      <Nav />
      <div class="container-sm   rounded-xxl p-4 border border-primary" style="  margin-top: 100px;">
          <form ref="form" @submit.prevent="handalSubmit" >


               <b-form-input  class="  rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md  "  id="name-input" v-model="body"></b-form-input>
                 <b-button type="submit" style="background-color: #004898!important" class="font-xsssss fw-700 ps-3 pe-3 lh-32  mt-1 mb-0  text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto">Post</b-button>
          </form>


      </div>
   </div>
</template>
<script>
   import axios from "axios";
   import Nav from '../components/Nav.vue'
   export default {
       name: 'Comment',
       components: {  Nav,  } ,
       
       data() {
    return {
      body: "",
     };
  },
        methods: {
        async handalSubmit() { 
              const response = await axios.post("posts/comment/21", {
              body: this.body,
          });
        console.log(response);
        alert('Record has been stored successfully.');
      
    },
  },
        
   }
</script>
 