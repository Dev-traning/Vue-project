<template>
    <div>
        
    
        <div class="main-wrapper">
            <div class="main-content right-chat-active">
                <div class="middle-sidebar-bottom">
                    <div class="middle-sidebar-left">
    
                        <div class="row">
                            <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
    
                                <!-- <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 ml-3">
                            <div class="card-body d-flex align-items-center p-3">
                               <h4 class="fw-700 mb-0 font-xssss text-grey-900"> Manpower </h4>
                               <a href="default-member.html" class="fw-600 ms  -auto font-xssss text-primary" >See all</a > 
                            </div>
                         </div> -->
                                <!-- <div class="row">
                            <div class="container">
                               <div class="row">
                                  <div class="col-12">
                                     <div class=" card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ml-3" >
                                        <div class="card-image w-100"> <img src="../../assets/images/e-6.jpg" alt="event" class="w-100 rounded-3"/> </div>
                                        <div class="card-body d-flex ps-0 pe-0 pb-0">
                                           <div class=" bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg " >
                                              <h4 class="fw-700 font-lg ls-3 text-grey-900 mb-0" > <span class=" ls-3 d-block font-xsss text-grey-500 fw-500 " >FEB</span >22 </h4>
                                           </div>
                                           <h4 class="fw-700 lh-2 font-xss"> Jony Lal <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " >Vendors Need Electra </span> <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " > <i class="ti-location-pin me-1"></i> Surat, Gujrat </span> <a href="#" class=" font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 " >Read More</a > </h4>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="col-12">
                                     <div class=" card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden ml-3" >
                                        <div class="card-image w-100"> <img src="../../assets/images/e-5.jpg" alt="event" class="w-100 rounded-3"/> </div>
                                        <div class="card-body d-flex ps-0 pe-0 pb-0">
                                           <div class=" bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg " >
                                              <h4 class="fw-700 font-lg ls-3 text-grey-900 mb-0" > <span class=" ls-3 d-block font-xsss text-grey-500 fw-500 " >FEB</span >22 </h4>
                                           </div>
                                           <h4 class="fw-700 lh-2 font-xss"> Jony Lal <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " >Vendors Need Electra </span> <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " > <i class="ti-location-pin me-1"></i> Surat, Gujrat </span> <a href="#" class=" font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 " >Read More</a > </h4>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                          -->
                            </div>
                            <div class="col-xl-6 col-xxl-6 col-lg-6">
    
                                <div>
                                    <div class="p-4  border-0 card w-100 shadow-xss rounded-xxl">
    
                                        <div class="d-flex">
                                            <div class="p-0 card-body d-flex">
                                                <figure class="avatar me-3">
                                                    <img :src="`${postSingle.user.profile_photo}`" alt="image" height="45" class="shadow-sm rounded-circle w45" v-if="postSingle.user.profile_photo">
                                                    <img src="../../assets/profile-no-img.png"  alt="image" class="shadow-sm rounded-circle w45" v-else>
                                                </figure>
    
                                                <h4 class="fw-700 text-grey-900 font-xssss mt-1">{{postSingle.user.full_name}}<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{{ moment(postSingle.created_at).fromNow()}}</span>
                                                </h4>
                                            </div>
                                            <div class="ml-auto ">
    
                                                <b-dropdown right size="sm" id="dropdownMenu5" variant="link" toggle-class="text-decoration-none" style="margin: -4px -9px 0px 0px" no-caret>
                                                    <template #button-content>
    
                                                        <i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i>
                                                    </template>
                                                    <router-link to="/login">                                                     <b-dropdown-item href="/login">
                                                        <div class="p-0 mt-2 card-body d-flex">
                                                            <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">login</h4>
                                                        </div>
                                                    </b-dropdown-item>
                                                </router-link>

                                                    <!-- <b-dropdown-item href="#">
                                                        <div class="p-0 mt-2 card-body d-flex"> <button type="button" class="btn pl-4 mt-0 fw-600 text-grey-900 font-xss me-4 pt-0" v-on:click="deletePosts(item.id,index)">Delete</button> </div>
                                                    </b-dropdown-item> -->
                                                </b-dropdown>
                                            </div>
                                        </div>
    
                                        <div class="row ps-2 pe-2">
                                            <div class="col-xs col-sm p-1" v-for="(item,i) in postSingle.medias" v-bind:key="item.id">
                                                <a data-lightbox="roadtri" class="position-relative d-block">
                                                    <img :src="`${item.path}`" class="rounded-3 w-100" alt="image" />
                                                    <span class="img-count font-sm text-white ls-3 fw-600" v-if="i==2"> <b>+{{i+0}}</b></span></a>
                                            </div>
                                        </div>
                                        <div class="card-body p-0 me-lg-3">
                                            <p class="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2 read-more-content" :class="{'read-more-show': showFullDescription}">
                                            <span v-if="!showFullDescription">
                                                {{ truncateDescription(postSingle.description, 300) }}...<p class="read-more-link" @click="toggleDescription"> {{ showFullDescription ? 'Read less' : 'Read more' }}
                                            </p>
                                            </span>
                                            <span v-else>
                                                {{ postSingle.description }}
                                            </span>
                                            </p>
                                           
                                        </div>
                                        <div class="p-0 card-body d-flex">
                                            <b-button variant="link" class="text-decoration-none emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2 p-0" v-b-modal.likes v-on:click="likeShow">{{postSingle.likes_count}} Likes</b-button>
                                            <a class=" d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"> <span class="d-none-xss">{{postSingle.comments_count}}</span></a> <button type="button" class="btn p-1 d-none-xss d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss" v-on:click="commentshow(postSingle.id)">Comments</button>
                                            <div class=" ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
    
                                                <b-button variant="outline-primary fw-600 text-light-900 text-light lh-26 font-xssss btn btn-primary" v-on:click="likepost" v-if="postSingle.is_liked">Liked </b-button>
    
                                                <!-- <b-button variant="outline-primary fw-600 text-grey-900 text-dark lh-26 font-xssss" v-on:click="likepost" v-if="!postSingle.is_liked">Like</b-button> -->
    
                                                <!-- <b-dropdown right size="sm" variant="link" toggle-class="text-decoration-none pr-0" no-caret>
                                                    <template #button-content>
                                                        <b-button variant="outline-warning fw-600 text-grey-900 text-dark lh-26 font-xssss">Share</b-button>
                                                    </template>
                                                    <b-dropdown-item href="#">
                                                        <a href="#" class="btn-round-sm bg-facebook"><i class="font-xs ti-facebook text-white"></i></a>
                                                    </b-dropdown-item>

                                                </b-dropdown> -->
                                            </div>
                                        </div>
                                       
                                       
                                    </div>
    
                                    <!-- <b-modal scrollable show-close="ftrue" hide-footer id="likes" centered ref="modal" size="60">
                                        <div>
                                            <h3 class="text-primary fw-600">LIKES</h3>
                                            <form action="" class="mb-2 form-inline"> <input type="search" class="form-control w-100 bg-grey" placeholder="Search"> </form>
                                            <table class="table">
                                                <tr v-for="(likeusers,folloind) in likeuser" v-bind:key="likeusers.id">
                                                    <td class="d-flex">
                                                        <img :src="`${likeusers.user.profile_photo}`" class="rounded-circle" width="55px" height="55px" v-if="likeusers.user.profile_photo"> <img src="../../assets/profile-no-img.png" class="rounded-circle" width="55px" height="55px" v-else>
                                                        <h2 class="m-1 ml-3 text-dark font-xss">{{likeusers.user.full_name}}<span class="d-block font-xssss text-grey-500">{{likeusers.city.name}}{{likeusers.state.name}}{{likeusers.country.name}}</span></h2>
                                                    </td>
                                                    <td><button style="float:right; margin:12px 0; height:30px; width:6rem;" class="p-1 text-white border-0 rounded-xxxl font-xssss bg-primary hover-none" :id="likeusers.user_id" v-on:click="followlike(likeusers.user_id,folloind)" v-if="likeusers.relation === 'Follow'">Follow</button></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </b-modal> -->
                                  
                                </div>
    
                                <!-- v-for="(item,itemIndex) in postSingle" v-bind:key="item.id" -->
                                <!-- <div class="p-4 border-0 card w-100 shadow-xss rounded-xxl"   >
    
    <div class="d-flex">
          <div class="p-0 card-body d-flex">
         <figure class="avatar me-3"  > 
                    <img :src="`${postSingle.user.profile_photo}`" alt="image" height="45" class="shadow-sm rounded-circle w45" v-if="postSingle.user.profile_photo" > 
                      <img src="../../assets/profile-no-img.png" alt="image" class="shadow-sm rounded-circle w45" v-else > 
                   </figure>
    
                   <h4 class="fw-700 text-grey-900 font-xssss mt-1">{{postSingle.user.full_name}}<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{{ moment(postSingle.created_at).fromNow()}}</span> 
                   </h4>
          </div>
          <div class="ml-auto ">
    
            <b-dropdown right size="sm" id="dropdownMenu5" variant="link" toggle-class="text-decoration-none" style="margin: -4px -9px 0px 0px" no-caret>
                   <template #button-content> 
    
                              <i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" ></i >
                   </template>
    
                   <b-dropdown-item href="#">
                      <div class="p-0 mt-2 card-body d-flex">
                         <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">Copy Link</h4>
                      </div>
                   </b-dropdown-item>
                   <b-dropdown-item href="#">
                      <div class="p-0 mt-2 card-body d-flex"> <button type="button" class="btn pl-4 mt-0 fw-600 text-grey-900 font-xss me-4 pt-0" v-on:click="deletePosts(item.id,index)">Delete</button> </div>
                   </b-dropdown-item>
                </b-dropdown> 
          </div>
     </div>
    
             <div class="row ps-2 pe-2" >
    
                          <div class="col-xs col-sm p-1" v-for="(item,i) in postSingle.medias" v-bind:key="item.id">
                               <a data-lightbox="roadtri" class="position-relative d-block"> 
                                   <img :src="`${item.path}`" class="rounded-3 w-100" alt="image"  /> 
                                   <span class="img-count font-sm text-white ls-3 fw-600" v-if="i==2" > <b>+{{i+0}}</b></span ></a> 
                                   </div>
    
             </div>
             <div class="card-body p-0 me-lg-3">
                <p class="fw-700 text-grey-700 lh-10 font-xssss w-100 mb-0 font-weight-bold">{{postSingle.title}}</p>
                <p class="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">{{postSingle.description}}</p>
             </div>
    
       </div> -->
    
                            </div>
                            <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
    
                                <!-- <div class="row">
                            <div class="container">
                               <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3" >
                                  <div class="card-body d-flex align-items-center p-3">
                                     <h4 class="fw-700 mb-0 font-xssss text-grey-900"> Vendor </h4>
                                     <a href="default-member.html" class="fw-600 ms-auto font-xssss text-primary" >See all</a > 
                                  </div>
                               </div>
                               <div class="row">
                                  <div class="col-12">
                                     <div class=" card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden " >
                                        <div class="card-image w-100"> <img src="../../assets/images/e-4.jpg" alt="event" class="w-100 rounded-3"/> </div>
                                        <div class="card-body d-flex ps-0 pe-0 pb-0">
                                           <div class=" bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg " >
                                              <h4 class="fw-700 font-lg ls-3 text-grey-900 mb-0" > <span class=" ls-3 d-block font-xsss text-grey-500 fw-500 " >FEB</span >22 </h4>
                                           </div>
                                           <h4 class="fw-700 lh-2 font-xss"> Jony Lal <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " >Vendors Need Electra </span> <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " > <i class="ti-location-pin me-1"></i> Surat, Gujrat </span> <a href="#" class=" font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 " >Read More</a > </h4>
                                        </div>
                                     </div>
                                  </div>
                                  <div class="col-12">
                                     <div class=" card p-3 bg-white w-100 hover-card border-0 shadow-xss rounded-xxl border-0 mb-3 overflow-hidden " >
                                        <div class="card-image w-100"> <img src="../../assets/images/e-3.jpg" alt="event" class="w-100 rounded-3"/> </div>
                                        <div class="card-body d-flex ps-0 pe-0 pb-0">
                                           <div class=" bg-greylight me-3 p-3 border-light-md rounded-xxl theme-dark-bg " >
                                              <h4 class="fw-700 font-lg ls-3 text-grey-900 mb-0" > <span class=" ls-3 d-block font-xsss text-grey-500 fw-500 " >FEB</span >22 </h4>
                                           </div>
                                           <h4 class="fw-700 lh-2 font-xss"> Jony Lal <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " >Vendors Need Electra </span> <span class=" d-flex font-xssss fw-500 mt-1 lh-3 text-grey-500 " > <i class="ti-location-pin me-1"></i> Surat, Gujrat </span> <a href="#" class=" font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 " >Read More</a > </h4>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
    
                         </div> -->
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </template>
    
    <script>
    import axios from "axios";
    import moment from 'moment'
    
    export default {
        name: "PostFeed",
    
        data() {
            return {
                user_id: "",
                postSingle: [],
                LikeShow: [],
                comment: [],
                type: 3,
                likeuser: [],
                body: [],
                comments: [],
                comentsshow: "",
                singlecomment: {
                    body: ""
                },
                page: "1",
                lastPage: "1",
                isModalVisible: false,
                productsShow: 15,
                isHidden: false,
                seen: true,
                moment: moment,
                showFullDescription: false,
                fileList: "",
                url: [],
                singlepost: {
                    body: [],
                    title: "",
                    location: "",
                    description: "",
                    images: [],
                },
            };
        },
        methods: {
            mounted() {
                alert("update");
            },
            toggleDescription() {
      this.showFullDescription = !this.showFullDescription;
      if (this.showFullDescription) {
        this.$router.push('/login');
      }
    },
    truncateDescription(description, maxLength) {
      if (description.length > maxLength) {
        const truncatedText = description.slice(0, maxLength);
            const lastSpaceIndex = truncatedText.lastIndexOf(" ");
            return truncatedText.slice(0, lastSpaceIndex) + " ...";
        }
        return description;
        }
    ,
            onCancel() {
                console.log("CANCEL SUBMIT");
                this.show = false;
                this.$router.go();
            },
    
            imageupload(images, fileList) {
                this.singlepost.images = fileList;
                this.singlepost.images.forEach((value, index) => {
                    var indadd = window.URL.createObjectURL(fileList[index]);
                    this.url.push(indadd);
                    console.log(this.url);
                });
    
                console.log(this.singlepost.images);
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
    
                var itemId = this.$route.params.id;
    
                axios
                    .get('posts/' + itemId)
    
                    .then((result) => {
                        this.postSingle = result.data.data;
                        
                    });
            },
    
            updatePostid(id, itemIndex) {
                this.itemInd = itemIndex;
                localStorage.setItem("updatePostid", id);
    
                axios.get("posts/" + id).then((result) => {
                    this.singlepost = result.data.data;
                });
            },
    
            updatepost() {
                let comId = JSON.parse(localStorage.getItem("updatePostid"));
    
                const postCreate = new FormData();
                if (this.singlepost.images) {
                    this.singlepost.images.forEach((value, index) => {
                        var img = `medias`;
                        var ind = `[${index}]`;
    
                        postCreate.append(img + ind, value);
                    });
                }
                postCreate.append("description", this.singlepost.description);
                postCreate.append("title", this.singlepost.title);
                postCreate.append("tags", this.singlepost.tags);
                postCreate.append("location", this.singlepost.location);
                const response = axios
                    .post("posts/" + comId, postCreate)
                    .then((result) => {
                        this.post[this.itemInd] = result.data.data
                        this.post.push();
    
                    });
                console.log(response);
            },
    
            deletePosts(id, index) {
                axios.delete("posts/" + id).then(() => {
                    this.post.splice(index, 1);
                });
            },
            likepost() {
                this.$router.push('/login');
                axios.post('posts/like/' + this.$route.params.id)
                    .then((result) => {
    
                        this.postSingle.likes_count = result.data.data.likes_count
                        this.postSingle.is_liked = !this.postSingle.is_liked
    
                    });
            },
            likeShow(id, index) {
                this.$router.push('/login');
                console.log(index);
                if (this.likeuser && this.likeuser.length > 0) {
                    this.likeuser.splice(index, 1);
                }
                axios
                    .get("posts/like/" + this.$route.params.id)
    
                    .then((result) => {
                        //this.likeuser.splice(0)
                        this.likeuser = result.data.data;
    
                        console.warn("commentshow APi Call", result);
                    });
            },
            followlike(id, folloind) {
                this.$router.push('/login');
                var postid = id;
                const response = axios.post("users/follow", {
                    followee_id: postid,
                })
    
                var myLike = this.likeuser[folloind]
                myLike.relation = "Requested"
                this.likeuser.$set(folloind, myLike)
                console.log('likeuser data', this.likeuser[folloind])
    
                //  this.likeuser[folloind].relation = "Requested"
                //  this.likeuser.push()
                console.log(response)
    
            },
    
            commentshow() {
                this.$router.push('/login');
                axios
                    .get("posts/comment/" + this.$route.params.id)
    
                    .then((result) => {
                        this.comments = result.data.data;
    
                        console.warn("commentshow APi Call", result);
                    });
            },
            commentedit() {
                axios
                    .get("comments/" + this.$route.params.id)
    
                    .then((result) => {
                        this.singlecomment = result.data.data;
                    });
            },
            deletecomment(_, id, index, itemindex) {
                axios.delete("comments/" + this.$route.params.id).then(() => {
                    this.comments.splice(index, 1);
                    let count = this.comments.length;
                    this.post[this.post[itemindex].comments_count--].comments_count = count;
                });
            },
    
            async commentupdate() {
                const response = axios.post("comments/" + this.$route.params.id, {
                        body: this.singlecomment.body
                    })
                    .then((result) => {
    
                        this.comments.push(result.data.data);
                        let title = this.singlecomment.body;
                        this.singlecomment.body = !this.singlecomment.body
                        this.comments[0].body = title
                    });
    
                this.$forceUpdate();
                console.log(response);
                return !this.comments.length
            },
    
            postcomment() {
                this.$router.push('/login');
                axios
                    .post("posts/comment/" + this.$route.params.id, {
                        body: this.body
                    })
                    .then((result) => {
                        this.comments.push(result.data.data);
                        this.comments.length;
    
                    });
    
                console.log();
    
            },
        },
    
        mounted() {
            this.getData();
            // if (!localStorage.getItem("token")) {
                
            //     this.$router.push('/login')
            // }
    
        },
    };
    </script>
    <style scoped>
.read-more-content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 300;
  -webkit-box-orient: vertical;
}
.read-more-show {
  -webkit-line-clamp: none;
}
.read-more-btn {
  color: #007bff;
  cursor: pointer;
}</style>
    