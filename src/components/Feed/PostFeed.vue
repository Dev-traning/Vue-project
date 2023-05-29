<template >
<div>

    <div class="LayerImg" @click.self="hidePopup"  v-if="Imagepromet">
        <img style=" height:60vh; margin-top: 5%; max-width: 90%; " :src="ImagesUrlPopup" />

    </div>
    <div v-for="(item,itemIndex) in post" v-bind:key="item.id"> 
      
      <div class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3" >
          <div class="card-body p-0 d-flex">
          
            <div v-for="(value, key) in item.user" :key="key.id" >
              <figure class="avatar me-2" v-if="key==='profile_photo'"> 
                      <img :src="`${value}`" alt="image" class="shadow-sm  rounded w45" height="45"  v-if="value"> 
                      <img src="../../assets/img/profile-no-img.99d6b3a5.png" alt="image" class="shadow-sm  rounded w45" height="45" v-if="!value"> 
                  </figure>
            </div>
            <div>
                <h4 class="fw-700 text-grey-900 font-xssss mt-1" v-for="(value, key) in item.user" :key="key.id">
                  <div v-if="key==='full_name'">{{value}}</div>
                </h4>
                <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{{ moment(item.created_at).fromNow()}}</span> 
            </div>
            <a href="#" class="ms-auto" id="dropdownMenu5" data-bs-toggle="dropdown" aria-expanded="false"> </a> 
            <b-dropdown right size="sm" style="margin: -13px 0px 0px 0px;"  id="dropdownMenu5" variant="link" toggle-class="text-decoration-none p-0" no-caret >
                <template #button-content> 
                  <a href="#" class="ms-auto p-0 m-0" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="p-0 ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                      </a> 
                </template>
              
                
      <b-dropdown-item v-if="item.user.id == userid" v-b-modal.homepageedit v-on:click="updatePostid(item.id,itemIndex)">
                  
                        <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">Edit</h4>
                  
                  </b-dropdown-item>
                  
                  <b-dropdown-item  @click="copyDoiToClipboard(item.id)">
                  
                        <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss">Copy Link</h4>
                        
                
                  </b-dropdown-item>
                  <b-dropdown-item  v-if="item.user.id == userid">
                      
                        <button type="button" class="btn pl-4 mt-0 fw-600 text-grey-900 font-xss me-4 pt-0" v-on:click="deletePosts(item.id,itemIndex)" >Delete</button>  
                  </b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="row ps-2 pe-2" >
            <div class="col-xs col-sm p-1" v-for="(item,i) in item.medias.slice(0,3)" v-bind:key="item.id"> <a data-lightbox="roadtri" class="position-relative d-block"> <img :src="`${item.path}`" @click="ImgPopup(item.path)" class="rounded-3 w-100" alt="image"  /> <span class="img-count font-sm text-white ls-3 fw-600" v-if="i==2" > <b>+{{i+0}}</b></span ></a> </div>
          </div>
          <div class="card-body p-0 me-lg-3">
              <p class="fw-700 text-grey-700 lh-10 font-xssss w-100 mb-0 font-weight-bold">{{item.title}}</p>
              <p class="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">{{item.description}}</p>
          </div>
          <div class="card-body d-flex p-0">
            <button  class="btn p-0 d-none-xss d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss" v-b-modal.likeshome v-on:click="likeShow(item.id)">
            
                {{item.likes_count}} Likes
            </button>
            
                <button class="btn p-1 d-none-xss d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss" v-on:click="commentshow(item.id)">{{item.comments_count}} Comments</button>
    
          


      
    


            <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"> </a> 
            <div>
                <b-button variant="outline-primary  fw-600 text-light-900 text-light lh-26 font-xssss btn btn-primary" v-on:click="likepost(item,index)" v-if="item.is_liked">Liked</b-button>
                <b-button variant="outline-primary  fw-600 text-grey-900 text-dark lh-26 font-xssss" v-on:click="likepost(item,index)" v-if="!item.is_liked">Like</b-button>
                <b-dropdown right size="sm" variant="link" toggle-class="text-decoration-none pr-0" no-caret>
                  <template #button-content>
                      <b-button variant="outline-warning fw-600 text-grey-900 text-dark lh-26 font-xssss">Share</b-button>
                      </template>

                  <b-dropdown-item :href="'https://www.facebook.com/sharer/sharer.php?u='+getPath+'/posts/'+item.id" target="_blank" >
                      <a  class="btn-round-sm bg-facebook"><i class="font-xs ti-facebook text-white"></i></a>
                      
                      </b-dropdown-item>
                  <b-dropdown-item :href="'https://twitter.com/intent/tweet?text='+getPath+'/posts/'+item.id" target="_blank" ><a  class="btn-round-sm bg-twiiter"><i class="font-xs ti-twitter-alt text-white"></i></a></b-dropdown-item>


                  <b-dropdown-item :href="'https://www.linkedin.com/sharing/share-offsite/?url='+getPath+'/posts/'+item.id" target="_blank" ><a   class="btn-round-sm bg-linkedin"><i class="font-xs ti-linkedin text-white"></i></a></b-dropdown-item>

                    <b-dropdown-item :href="'https://api.whatsapp.com/send?text='+getPath+'/posts/'+item.id" target="_blank" data-action="share/whatsapp/share">
                      <a   class="btn-round-sm "><img class="font-xs"  src="../../assets/imageedit_3_6192029673.png" alt=""> </a>
                      
                      </b-dropdown-item>

                </b-dropdown>
            </div>
            
    




          </div>
      
          
          <div v-for="(commentsshow,comentInde) in comments" v-bind:key="commentsshow.id" class="mb-0 mt-2">
            <div v-if="commentsshow.commentable_id == item.id">
            <div>
                      <ul class="list-unstyled">
                        <li class="mb-2 media">
                            <img class="p-1 mr-3 shadow rounded-xxl" width="50px" height="50px" :src="commentsshow.user.profile_photo" alt="Generic placeholder image" v-if="commentsshow.user.profile_photo"> 

                              <img class="p-1 mr-3 shadow rounded-xxl" width="50px" height="50px" src="../../assets/profile-no-img.png" alt="Generic placeholder image" v-else>

                            <div class="p-1 media-body bg-lightgrey fw-500">
                              <div class="d-flex justify-content-between me-0">
                                  <h3 class="mt-3 fw-700 text-grey-900 font-xsss mb-0">{{commentsshow.user.full_name}}</h3>
                                  <h5 class="mr-2 font-xsss text-grey-500 fw-500 align-items-end">
                                  {{ moment(commentsshow.updated_at).fromNow()}}  
                                    <b-dropdown v-if="commentsshow.user.id == userid" right size="sm" id="dropdownMenu5" variant="link" toggle-class="text-decoration-none" class="ms-auto" no-caret>
                                        <template #button-content>
                                          <a   class="ms-auto" data-bs-toggle="dropdown" aria-expanded="false" >
                                            <i class="mt-0 ti-more text-grey-900 bg-greylight"></i></a> 
                                        </template>
                                        <b-dropdown-item v-on:click="commentedit(commentsshow.id,comentInde,seen = !seen)"  >Edit</b-dropdown-item>
                                        <b-dropdown-item  v-on:click="deletecomment(item,commentsshow.id,index,itemIndex)">Delete</b-dropdown-item>
                                    </b-dropdown>
                                  </h5>
                              </div>
                              <div>
                                  <p class="font-xsss" id="comment">{{commentsshow.body}}</p>
                                  <div v-if="singlecomment.id==commentsshow.id">
                                    <form v-on:submit.prevent="commentupdate(commentsshow.id)" v-if="!seen" > 

            

                                        <textarea class="mb-0 form-control form-control-lg w-100" rows="3" placeholder="Large textarea" v-model="singlecomment.body"></textarea>
                                        <div class="col-lg-12 mt-0">
                                          <b-button type="button" style="background-color: rgb(136 143 150 / 88%) !important;" class=" font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right" v-on:click="seen = !seen">Cancel</b-button>
                                          <b-button type="submit" style="background-color: #004898 !important" class=" font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right">Update </b-button>
                                        </div>
                                    </form>
                                    
                                  </div>
                              </div>
                            </div>
                        </li>
                      </ul>
                  </div>
            </div>
          </div>
            <form ref="anyName" v-on:submit.prevent="postcomment(item.id,item,index,itemIndex)" >
            <div class="input-group   ">
                <input v-model="body[itemIndex]"   type="text" class="form-control form-control-sm    text-grey-900 text-dark" placeholder="Write Comments..." aria-label="Comments" aria-describedby="basic-addon2">
                <div class="input-group-append ">
                  <button class="btn btn-outline-dark btn-sm mt-1" type="submit">Post</button>
                </div>
            </div>
          </form>

    
        
        </div>
        <!-- //PromotionCode -->
        <!-- <div v-if=" cards.length  == 0 "></div>
        <div v-else>  
        <div class="card w-100 shadow-xss rounded-xxl border-0 p-2 mb-3" v-if="(cards && cards.length > 0 && itemIndex != null) && ((itemIndex + 1) % 2 === 0 && (itemIndex + 1) % 4 !== 0)">
        <div class="container  " ref="container">
          <div class="cards h-100 " ref="cards" :style="{ transform: `translateX(${translateX}px)` }" style="">
            <div class="card1 h-100 " ref="card1" v-for="(card, index) in cards" :key="index" @mousedown="handleMouseDown">
              <img class="promoImg " v-if="card.photo" :src="card.photo" alt="" />
              <img class="promoImg " v-else src="./../img/no-image.7c10e1d3.jpg" alt="" />
              <div class="card_content ">
                <p v-if="card.business_name">{{card.business_name}}</p>
                <p v-else>{{card.first_name}}</p>
                <button style="" >Inquire now</button>
              </div>
             
            </div>
            
          </div>
      
          
        </div>
                  <button style="display: flex; align-items:center; justify-content:center; margin-top:2% ;background-color:#ffff ;border-radius: 2px 2px 2px 2px ;color:#0048a5; border: 2px solid #0048a5; font-weight:500;"> <router-link to="/VendorShow/6" style="color:#0048a5; ">View more</router-link></button>
        </div>

        </div>
        <div v-if=" cards1.length  == 0 "></div>
        <div v-else>          
                  <div class="card w-100 shadow-xss rounded-xxl border-0 p-2 mb-3" v-if="(itemIndex + 1) % 4 === 0"  >

          <div class="container  " ref="container">
            <div class="cards h-100 " ref="cards" :style="{ transform: `translateX(${translateX}px)` }" style="">
              <div class="card1 h-100 " ref="card1" v-for="(card, index) in cards1" :key="index" @mousedown="handleMouseDown">
                <img class="promoImg " v-if="card.photo" :src="card.photo" alt="" />
              <img class="promoImg " v-else src="./../img/no-image.7c10e1d3.jpg" alt="" />
              <div class="card_content ">
                <p v-if="card.business_name">{{card.business_name}}</p>
                <p v-else>{{card.first_name}}</p>
                <button style="" >Inquire now</button>
                </div>
              
              </div>
              
            </div>

            
          </div>
                  <button style="display: flex; align-items:center; justify-content:center; margin-top:2% ;background-color:#ffff ;border-radius: 2px 2px 2px 2px ;color:#0048a5; border: 2px solid #0048a5; font-weight:500;"> <router-link to="/VendorShow/6" style="color:#0048a5; ">View more</router-link></button>
          </div>
        </div>  -->
        
    </div>
      <div v-if="post.length" v-observe-visibility="handleScrolledToBottom"></div>
        <div class="card w-100 text-center shadow-xss rounded-xxl border-0 p-2 mb-3 mt-0 ">

    <div  class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div> 
                            </div>
      
        <b-modal scrollable show-close="ftrue" hide-footer id="likeshome" centered ref="modal" size="60">
            <button @click="modelClose()" type="button" class="closee" right='22' top='8' data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true ">&times;</span>
        </button>
      <div>
         <h3 class="text-primary fw-600 mt-2">LIKES</h3>
         <form action="" class="mb-2 form-inline"> <input type="search" class="form-control w-100 bg-grey" placeholder="Search"> </form>
         <table class="table" >
            <tr v-for="(likeusers,folloind) in likeuser" v-bind:key="likeusers.id">
               <td class="d-flex">
                  <img :src="`${likeusers.user.profile_photo}`" class="rounded-circle" width="55px" height="55px" v-if="likeusers.user.profile_photo"> <img src="../../assets/profile-no-img.png" class="rounded-circle" width="55px" height="55px" v-else> 
                  <h2 class="m-1 ml-3 text-dark font-xss">{{likeusers.user.full_name}}<span class="d-block font-xssss text-grey-500">{{likeusers.city.name}} {{likeusers.state.name}} {{likeusers.country.name}}</span></h2>
               </td>
             
               <td><button style="float:right; margin:12px 0; height:30px; width:6rem;" class="p-1 text-white border-0 rounded-xxxl font-xssss bg-primary hover-none" :id="likeusers.user_id" v-on:click="followlike(likeusers.user_id,folloind)" v-if="likeusers.relation === 'Follow'">Follow</button>
               
               <!-- <button style="float:right; margin:12px 0; height:30px; width:6rem;" class="p-1 text-white border-0 rounded-xxxl font-xssss bg-primary hover-none" :id="likeusers.user_id" v-on:click="followlike" v-else>API Pending</button> -->
               </td>
            </tr>
         </table>
      </div>
      </b-modal>


      
                <b-modal show-close="ftrue"  hide-footer id="homepageedit" centered ref="modal" size="lg" > 
                      <button @click="modelClose()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

         <div class="modal-header pl-4 m-0 pb-0">
            <h2 class="modal-title m-0 p-0"><ins>Edit Post</ins></h2>
         </div>
         <form ref="form" @submit.prevent="updatepost" class="p-4 pt-2" >
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
                     <!-- <input  type="file" class="images[]" name="images"  id="file-small"  @change="imageupload($event.target.name, $event.target.files)" multiple accept="image/*"> -->
                     <input type="file" class="images[]" name="images" id="file-small" @change="imageupload('images', $event.target.files)" multiple accept="image/*">
                     </label>      
                  </div>
               </a>
               <div class="img-wrap  d-flex">
                  <div v-for="(img,index) in url" :key="img">
                     <b-img class="p-1" v-bind="mainProps" rounded :src="img"  alt="Top-rounded image"  width="50" height="50"></b-img>
                     <span type='button' class="closed" @click="removeImage(index)"  >&times;</span> 
                  </div>
               </div>

                  <div class="img-wrap  d-flex">
                  <div v-for="(img) in singlepost.medias" :key="img.id">
                     <b-img class="p-1" v-bind="mainProps" rounded :src="img.path"  alt="Top-rounded image"  width="50" height="50"></b-img>
                     <span type='button' class="closed" @click="removeIm(img.id,index)"  >&times;</span> 
                  </div>
               </div>

              
            </div>
            <b-button type="submit" style="background-color: #004898!important" class="font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100" @click="$bvModal.hide('homepageedit')">Post</b-button>
         </form>
       
         </b-modal>
</div>
</template>
<script>
import axios from "axios";
 import moment from 'moment'
 

export default {
  name: "PostFeed",

  data() {
    return {
      cards: [],
      cards1:[],
      titlehead:"",
      titlehead1:"",
      isDragging: false,
      lastX: 0,
      translateX: 0,
      maxTranslateX: 0,
      post: [],
      getPath:'',
       moment: moment,
       seen: true,
       userDetail:[],
      LikeShow: [],
      comment: [],
      userid: "",
      comentsshow: "",
      singlecomment: { body: "" },
      type: 3,
      body: [],
      likeuser: [],
      comments: [],
      page: "1",
      message: '',
    copiedText: '',
      
      lastPage: "1",
      fileList: "",
      url: [],
      singlepost: {
        body: [],
        title: "",
        description: "",
        images: [],
        url:'',
        name:[]
      },
      
      Imagepromet: false,
      ImagesUrlPopup:""
    };
  },
  methods: {


    


      
   
 modelClose(){
          this.$refs['modal'].hide()
       },

   copyDoiToClipboard (id) {
      var baseUrl = window.location.origin
       navigator.clipboard.writeText(baseUrl+'/posts/'+id)

  },

   
        
    // imageupload(images, fileList) {
    //   this.singlepost.images = fileList;
    //   this.singlepost.images.forEach((value, index) => {
    //     var indadd = window.URL.createObjectURL(fileList[index]);
    //     this.url.push(indadd);
    //     console.log(this.url);
    //   });

    //   console.log(this.singlepost.images);
    // },
    imageupload(name, fileList) {
  this.singlepost[name] = fileList;
  this.url = [];

  for (let i = 0; i < fileList.length; i++) {
    let fileURL = URL.createObjectURL(fileList[i]);
    this.url.push(fileURL);
  }

  console.log(this.url);
  console.log(this.singlepost[name]);
},


    removeImage(index) {
      this.url.splice(index, 1);
    },

   removeIm(id, index) {
      axios.delete("medias/" + id).then(() => {
        this.singlepost.medias.splice(index, 1);
      });
    },
    getData() {
      this.userid = JSON.parse(localStorage.getItem("user_id"));
      this.userDetail = JSON.parse(localStorage.getItem("UserDetails"));
      axios
        .get(`posts?page=${this.page}&per_page=10`)

        .then((result) => {
          this.post.push(...result.data.data);
          this.lastPage = result.data.last_page;
 
        });


        if(this.userDetail.user_type_text == 'Restaurant'){

        console.log("im Resturant");
        axios.get('vendor/promotevendors?per_page=5&page=1').then((response)=>{

            console.log(response.data);
            this.cards = response.data.data;
            this.titlehead = "omchevli";

        });

        axios.get('mp/promotemanpowers?per_page=5&page=1').then((response)=>{

            console.log(response.data);
            this.cards1 = response.data.data;
            this.titlehead1 = "omchevli1";

            });

        }
        else if(this.userDetail.user_type_text == 'Vendor')
        {
          console.log("im Vendor");
          axios.get('restaurants/promoterestaurants?per_page=5&page=1').then((response)=>{

                console.log(response.data);
                this.cards = response.data.data;
                this.titlehead = "omchevli";

              });

              axios.get('mp/promotemanpowers?per_page=5&page=1').then((response)=>{

                  console.log(response.data);
                  this.cards1 = response.data.data;
                  this.titlehead1 = "omchevli1";

                  });
          
        }
        else if(this.userDetail.user_type_text == 'Manpower'){
          console.log("im Manpower");
          axios.get('restaurants/promoterestaurants?per_page=5&page=1').then((response)=>{

            console.log(response.data);
            this.cards = response.data.data;
            this.titlehead = "omchevli";

            });
            axios.get('vendor/promotevendors?per_page=5&page=1').then((response)=>{

              console.log(response.data);
              this.cards1 = response.data.data;
              this.titlehead = "omchevli";

              });
        }
        else{
          console.log("None");
        }
    },
        followlike(id,folloind){
     
                      var postid = id;
                          const response = axios.post("users/follow", {
                        followee_id: postid,
                        })
                         
                         
                          var myLike = this.likeuser[folloind]
                          myLike.relation = "Requested"
                          this.likeuser.$set(folloind,myLike)
                          console.log('likeuser data',this.likeuser[folloind])

                        //  this.likeuser[folloind].relation = "Requested"
                        //  this.likeuser.push()
                           console.log(response)

                   },
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      if (this.page >= this.lastPage) {
        return;
      }
      this.page++;
      this.getData();
    },
    updatePostid(id, itemIndex) {
       this.itemInd = itemIndex;
      localStorage.setItem("updatePostid", id);

      axios.get("posts/" + id).then((result) => {
        this.singlepost = result.data.data;
      });
    },

    // updatepost() {
    //   let comId = JSON.parse(localStorage.getItem("updatePostid"));

    //   const postCreate = new FormData();
    //   if (this.singlepost.images) {
    //     this.singlepost.images.forEach((value, index) => {
    //       var img = `medias`;
    //       var ind = `[${index}]`;
    //       postCreate.append(img + ind, value);
    //     });
    //   }
    //   postCreate.append("description", this.singlepost.description);
    //   postCreate.append("title", this.singlepost.title);
    //   postCreate.append("tags", this.singlepost.tags);
    //   const response = axios.post("posts/" + comId, postCreate)
    //    .then((result) => {
          
    //          this.post[this.itemInd] =result.data.data
    //           this.post.push();
        
    //     });
    //   console.log(response);
    // },
    updatepost() {
  let comId = JSON.parse(localStorage.getItem("updatePostid"));

  const postCreate = new FormData();
  if (this.singlepost.images) {
    for (let i = 0; i < this.singlepost.images.length; i++) {
      postCreate.append("medias[]", this.singlepost.images[i]);
    }
  }
  postCreate.append("description", this.singlepost.description);
  postCreate.append("title", this.singlepost.title);
  postCreate.append("tags", this.singlepost.tags);

  axios
    .post("posts/" + comId, postCreate)
    .then((result) => {
      this.post[this.itemInd] = result.data.data;
      this.post.push();
    })
    .catch((error) => {
      console.error(error);
      // Handle the error here
    });
},

    deletePosts(id,itemIndex) {
      axios.delete("posts/" + id).then(() => {
        this.post.splice(itemIndex, 1);
         
      });
    },
    likepost(id, index) {
      axios.post("posts/like/" + id.id).then((result) => {
        var nItem = id;
        nItem.is_liked = !id.is_liked;
        nItem.likes_count = result.data.data.likes_count;

        this.post[index] = nItem;
      });
      //  this.$router.push('/');
    },
      likeShow(id,index) {
      console.log(index);
      if(this.likeuser && this.likeuser.length > 0) {
    this.likeuser.splice(index, 1);
      }
      // this.likeuser.splice(index,1);
      axios
        .get("posts/like/" + id)

        .then((result) => {
          //this.likeuser.splice(0)
          this.likeuser = result.data.data;

          console.warn("commentshow APi Call", result);
        });
    },

    commentshow(id) {
      axios
        .get("posts/comment/" + id)

        .then((result) => {
          this.comments = result.data.data;
           

          console.warn("commentshow APi Call", result);
        });
    },
    commentedit(id,comentInde) {
     
      this.getComInd = comentInde
      axios
        .get("comments/" + id)

        .then((result) => {
          this.singlecomment = result.data.data;
        });
    },
    deletecomment(_, id, index, itemindex) {
      axios.delete("comments/" + id).then(() => {
        this.comments.splice(index, 1);
        let count = this.comments.length;
        this.post[this.post[itemindex].comments_count--].comments_count = count;
        });
    },
    async commentupdate(id) {
      const response = axios.post("comments/" + id, {
        body: this.singlecomment.body,
      })
    .then(() => {
        
          this.comments.push();
           let title = this.singlecomment.body;
          //  this.singlecomment.body = !this.singlecomment.body
           this.comments[this.getComInd].body = title
           if(this.seen==false){
                  this.seen= !this.seen
           }
          
        });
      console.log(response);
    },

    postcomment(_, id, index, itemindex) {
    
      if (this.body) {
        this.body.forEach((value, index) => {
          this.indadd = this.body[index];
          this.body[index] = "";
          this.$refs.anyName[index].reset();
        });
      }

      axios
        .post("posts/comment/" + id.id, { body: this.indadd })
        .then((result) => {
             this.comments.push(result.data.data);
            let count = this.comments.length;
           this.post[this.post[itemindex].comments_count++].comments_count = count;
        });

       
   
 
    },
    async ImgPopup(url){

      // alert(url);
      this.ImagesUrlPopup = url;
      this.Imagepromet = true;


    },
    hidePopup(){

      this.Imagepromet = false;

    },
    handleMouseDown(event) {
      event.preventDefault();
      this.isDragging = true;
      this.lastX = event.clientX;
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseMove(event) {
  if (!this.isDragging) return;
  const offsetX = event.clientX - this.lastX;
  this.lastX = event.clientX;
  const newTranslateX = this.translateX + offsetX;

  const boundary = this.getBoundary();
  if (newTranslateX < boundary.min) {
    this.translateX = boundary.min;
  } else if (newTranslateX > boundary.max) {
    this.translateX = boundary.max;
  } else {
    this.translateX = newTranslateX;
  }
}
,
getBoundary() {
  const max = 0;
  let min = -400; // Default value
  if (this.cards.length === 4) {
    min = -210; // Change the min value if there are 4 cards
  } else if (this.cards.length === 5) {
    min = -400; // Change the min value if there are 5 cards
  }
  else if (this.cards.length === 3) {
    min = -100; // Change the min value if there are 5 cards
  }
  
  return { min, max };
},

    handleMouseUp() {
      this.isDragging = false;
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);
    },


  },
  created() {
  this.boundary = this.getBoundary();
  },
  mounted() {
    this.getPath = window.location.origin
    this.getData();
    this.containerWidth = this.$refs.container.offsetWidth;
    this.cardWidth = this.$refs.card.offsetWidth;
    this.cardsWidth = this.cardWidth * this.cards.length;
    this.minTranslateX = this.containerWidth - this.cardsWidth;
    this.maxTranslateX = 0;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  /* -ms-overflow-style: none;
  scrollbar-width: none; */
}

.cards {
  display: flex;
  padding: 5px;
  gap: 10px;
  margin-left: -5%;
  justify-content: center;

}

.card1 {
  flex: 0 0 auto;
  width: 180px;
  
  height: 200px;
  background-color: #ffff;
  box-shadow: 0px 2px 10px rgba(128, 128, 128, 0.3);
  /* border-radius: 10px; */
  /* padding: 20px; */
  scroll-snap-align: center;
  
}

.card1:active {
  cursor: grabbing;
}

.promoImg {
  height: 16vh;
  /* max-height: 100%; */
  width: 100%;
  padding: 0;
}

.card_content p {
  font-size: 0.75rem;
  background-color: white;
  font-weight: 300 bold;
  width: 80%;
  margin-left: 10%;  
  text-align: center;
  
}
.card_content button   {
  display: flex;
  align-items: center;
  justify-content: top;
  font-size: 1rem;
  background-color: #0048a5;
  font-weight: 500;
  color: #ffff;
  margin-bottom: 4%;
  margin-top: -5%;
  border: transparent;
  display:flex; 
  border-radius: 2px 2px 2px 2px ;

  width: 95%;
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  
}

@media only screen and (max-width: 1608px) {
   .container {
     display: flex;
     overflow-x: scroll;
     max-width: 100%;
     -webkit-overflow-scrolling: touch;
     scroll-behavior: smooth;
   }
 
   .card1s {
     width: fit-content;
     padding: 0 0px;
     gap: 10px;
    
   }
 
   .card1 {
     width: calc(100vw - 30px);
     max-width: 210px;
     height: auto;
   }
   .card1:active {
     cursor: grabbing;
   }
   .card1 {
     cursor: grabbing;
   }
 }
 

@media only screen and (max-width: 768px) {
   .container {
     display: flex;
     overflow-x: scroll;
     max-width: 100%;
     -webkit-overflow-scrolling: touch;
     scroll-behavior: smooth;
   }
 
   .card1s {
     width: fit-content;
     padding: 0 10px;
     gap: 10px;
   }
 
   .card1 {
     width: calc(100vw - 30px);
     max-width: 210px;
     height: auto;
   }
   .card1:active {
     cursor: grabbing;
   }
   .cards {
  display: flex;
  padding: 25px;
  gap: 20px;
  margin-left: -15.5%;

}
 }
 
.closed {
  
    border: 0;
    position: absolute;
    right: -10px;
    top: -6px;
    opacity: 1;
    z-index: 2;
    width: 17px;
    width: 23px;
    height: 24px;
    border-radius: 20px;
    display: inline-block;
    line-height: 10px;
    background-color: transparent;
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #ff0202;
    text-shadow: 0 1px 0 #fff;

}
.img-wrap .close {
  position: absolute;
  top: 1px;
  right: -12px;
  z-index: 100;
}


.LayerImg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1021;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>