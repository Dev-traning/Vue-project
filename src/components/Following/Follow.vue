<template>
  <div>    

   
                      <table class="table"  >
                              <tr v-if="!follower || !follower.length">
                                   <p class="text-center p-5 m-5" >No followers</p>
                                 </tr>
            
                                  <tr   v-for="(followers,itemindex) in follower" v-bind:key="followers.id" v-else>
                                     <td class="d-flex ">
                                         <img :src="`${followers.profile_photo}`"  class="rounded-circle" width="55px" height="55px" v-if="followers.profile_photo"> 
                                          <img src="../../assets/profile-no-img.png"  class="rounded-circle" width="55px" height="55px" v-else>
                                         <h2 class="m-1 ml-3 text-dark font-xss">{{followers.full_name}} <span class="d-block font-xssss text-grey-500">{{followers.city.name}} {{followers.state.name}} {{followers.country.name}}</span></h2></td>
                                     <td><button v-on:click="followRemove(followers,followers.id,index,itemindex)" style="float:right; margin:12px 0; height:30px; width:6rem;" class="p-1 text-white border-0 rounded-xxxl font-xssss bg-danger">Remove</button></td>
                                 </tr>


   </table>
  </div>
</template>

<script>
import jQuery from 'jquery'
import axios from "axios";
export default {
  Name: "Follower",
   data() {
    return {
      follower:'',
      follower_id:''
    };
  },
  methods: {
    getData() {
      axios.get("users/my-followers")
        .then((result) => {
        this.follower = result.data.data;
        console.warn("followers api run",result);
     
      });
    },
       async followRemove(_ ,id,index , itemindex) { 
           var postid = id
                      const response = axios.post("users/follow-action-type",{
                         follower_id: postid,
                         action_type:'2'
                     }).then(() => { this.follower.splice(index,1)
                                      let  count = this.follower.length
                                      this.follower[itemindex].total = count  });

                  
                     console.log(response)
                    
                  },   },
  mounted() {
    this.getData();
  },
  computed: {
           isEmpty: function () {
              return jQuery.isEmptyObject(this.follower)
           }
       },
};
</script>

<style>
 
.table>:not(caption)>*>{
   padding: .3rem .3rem;
}

/* .table td, .table th{
   padding: 0!important;
} */

.table{
   padding:.3rem .3rem;
}
</style>
