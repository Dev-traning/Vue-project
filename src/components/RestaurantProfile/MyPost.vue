<template>
  <div>
    <div
      class="p-4 mb-3 mt-3 border-0 card w-100 shadow-md rounded-lg"
      v-for="(item, itemIndex) in post"
      v-bind:key="item.id"
    >
      <div class="p-0 card-body d-flex">
        <div v-for="(value, key) in item.user" :key="key.id">
          <figure class="avatar me-2" v-if="key === 'profile_photo'">
            <img
              :src="`${value}`"
              alt="image"
              class="shadow-sm  rounded w45"
              height="45"
              v-if="value"
            />
            <img
              src="../../assets/profile-no-img.png"
              alt="image"
              class="shadow-sm  rounded w45"
              height="45"
              v-if="!value"
            />
          </figure>
        </div>
        <div>
          <h4
            class="fw-700 text-grey-900 font-xssss mt-1"
            v-for="(value, key) in item.user"
            :key="key.id"
          >
            <div v-if="key === 'full_name'">{{ value }}</div>
          </h4>
          <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{{
            moment(item.created_at).fromNow()
          }}</span>
        </div>
        <b-dropdown
          right
          size="sm"
          id="dropdownMenu5"
          variant="link"
          toggle-class="text-decoration-none"
          class="ms-auto"
          no-caret
        >
          <template #button-content>
            <a
              href="#"
              class="p-0 ms-auto"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"
              ></i>
            </a>
          </template>
          <b-dropdown-item
            v-b-modal.editmypost
            v-on:click="updatePostid(item.id, itemIndex)"
          >
            <div class="p-0 mr-2 card-body d-flex">
              <button class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4 btn">
                Edit
              </button>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <div class="p-0 mt-2 card-body d-flex">
              <h4 class="pl-4 mt-0 fw-600 text-grey-900 font-xss me-4">
                Share
              </h4>
            </div>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <div class="p-0 mt-2 card-body d-flex">
              <button
                type="button"
                class="btn pl-4 mt-0 fw-600 text-grey-900 font-xss me-4 pt-0"
                v-on:click="deletePosts(item.id, itemIndex)"
              >
                Delete
              </button>
            </div>
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="col-xs col-sm p-1"
          v-for="(item, i) in item.medias"
          v-bind:key="item.id"
        >
          <a data-lightbox="roadtri" class="position-relative d-block">
            <img :src="`${item.path}`" class="rounded-3 w-100" alt="image" />
            <span
              class="img-count font-sm text-white ls-3 fw-600"
              v-if="i == 2"
            >
              <b>+{{ i + 0 }}</b></span
            ></a
          >
        </div>
      </div>
      <div class="card-body p-0 me-lg-3">
        <p
          class="fw-700 text-grey-700 lh-10 font-xssss w-100 mb-0 font-weight-bold"
        >
          {{ item.title }}
        </p>
        <p class="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
          {{ item.description }}
        </p>
      </div>
      <div class="p-0 card-body d-flex">
        <b-button
          variant="link"
          class="text-decoration-none emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2 p-0"
          v-b-modal.likes
          v-on:click="likeShow(item.id)"
          >{{ item.likes_count }} Likes</b-button
        >
        <a
          class=" d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <span class="d-none-xss">{{ item.comments_count }}</span></a
        >
        <button
          type="button"
          class="btn p-1 d-none-xss d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
          v-on:click="commentshow(item.id)"
        >
          Comments
        </button>
        <div
          class=" ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
        >
          <b-button
            variant="outline-primary fw-600 text-light-900 text-light lh-26 font-xssss btn btn-primary"
            v-on:click="likepost(item, index)"
            v-if="item.is_liked"
            >Liked
          </b-button>
          <b-button
            variant="outline-primary fw-600 text-grey-900 text-dark lh-26 font-xssss"
            v-on:click="likepost(item, index)"
            v-if="!item.is_liked"
            >Like</b-button
          >
          <b-dropdown
            right
            size="sm"
            variant="link"
            toggle-class="text-decoration-none pr-0"
            no-caret
          >
            <template #button-content>
              <b-button
                variant="outline-warning fw-600 text-grey-900 text-dark lh-26 font-xssss"
                >Share</b-button
              >
            </template>
            <b-dropdown-item href="#">
              <a href="#" class="btn-round-sm bg-facebook"
                ><i class="font-xs ti-facebook text-white"></i
              ></a>
            </b-dropdown-item>
            <!-- <b-dropdown-item href="#"><a href="#" class="btn-round-sm bg-twiiter"><i class="font-xs ti-twitter-alt text-white"></i></a></b-dropdown-item>
                     <b-dropdown-item href="#"><a href="#" class="btn-round-sm bg-linkedin"><i class="font-xs ti-linkedin text-white"></i></a></b-dropdown-item> -->
          </b-dropdown>
        </div>
      </div>
      <div
        v-for="(commentsshow, comentInde) in comments"
        v-bind:key="commentsshow.id"
        class=" mb-0 mt-2"
      >
        <div v-if="commentsshow.commentable_id == item.id">
          <div>
            <ul class="list-unstyled">
              <li class="mb-2 media">
                <img
                  class="p-1 mr-3 shadow rounded-xxl"
                  width="50px"
                  height="50px"
                  :src="commentsshow.user.profile_photo"
                  alt="Generic placeholder image"
                  v-if="commentsshow.user.profile_photo"
                />
                <img
                  class="p-1 mr-3 shadow rounded-xxl"
                  width="50px"
                  height="50px"
                  src="../../assets/profile-no-img.png"
                  alt="Generic placeholder image"
                  v-else
                />
                <div class="p-1 media-body bg-lightgrey fw-500">
                  <div class="d-flex justify-content-between me-0">
                    <h3 class="mt-3 fw-700 text-grey-900 font-xsss mb-0">
                      {{ commentsshow.user.full_name }}
                    </h3>
                    <h5
                      class="mr-0 font-xsss text-grey-500 fw-500 align-items-end"
                    >
                      {{ moment(commentsshow.updated_at).fromNow() }}
                      <b-dropdown
                        right
                        size="sm"
                        id="dropdownMenu5"
                        variant="link"
                        toggle-class="text-decoration-none"
                        class="ms-auto"
                        no-caret
                      >
                        <template #button-content>
                          <a
                            class="ms-auto"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i
                              class="mt-0 ti-more text-grey-900 bg-greylight"
                            ></i
                          ></a>
                        </template>
                        <b-dropdown-item
                          v-on:click="
                            commentedit(
                              commentsshow.id,
                              comentInde,
                              (seen = !seen)
                            )
                          "
                          >Edit</b-dropdown-item
                        >
                        <b-dropdown-item
                          v-on:click="
                            deletecomment(
                              item,
                              commentsshow.id,
                              index,
                              itemIndex
                            )
                          "
                          >Delete</b-dropdown-item
                        >
                      </b-dropdown>
                    </h5>
                  </div>
                  <div>
                    <p class="font-xsss" id="comment">
                      {{ commentsshow.body }}
                    </p>
                    <div v-if="singlecomment.id == commentsshow.id">
                      <form
                        v-if="seen"
                        ref="hide"
                        v-on:submit.prevent="commentupdate(commentsshow.id)"
                        id="update"
                      >
                        <textarea
                          class="mb-0 form-control form-control-lg w-100"
                          rows="3"
                          placeholder="Large textarea"
                          v-model="singlecomment.body"
                        ></textarea>
                        <div class="col-lg-12 mt-0">
                          <b-button
                            type="button"
                            style="background-color: rgb(136 143 150 / 88%) !important;"
                            class=" font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
                            id="app"
                            v-on:click="seen = !seen"
                            >Cancel</b-button
                          >
                          <b-button
                            type="submit"
                            style="background-color: #004898 !important"
                            class=" font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
                            >Update
                          </b-button>
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
      <form
        ref="anyName"
        v-on:submit.prevent="postcomment(item.id, item, index, itemIndex)"
      >
        <div class="input-group ">
          <input
            v-model="body[itemIndex]"
            type="text"
            class="form-control form-control-sm text-grey-900 text-dark"
            placeholder="Write Comments..."
            aria-label="Comments"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append ">
            <button class="btn btn-outline-dark btn-sm mt-1" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="post.length" v-observe-visibility="handleScrolledToBottom"></div>
    <b-modal
      scrollable
      show-close="ftrue"
      hide-footer
      id="likes"
      centered
      ref="modal"
      size="60"
    >
      <div>
        <h3 class="text-primary fw-600">LIKES</h3>
        <form action="" class="mb-2 form-inline">
          <input
            type="search"
            class="form-control w-100 bg-grey"
            placeholder="Search"
          />
        </form>
        <table class="table">
          <tr
            v-for="(likeusers, folloind) in likeuser"
            v-bind:key="likeusers.id"
          >
            <td class="d-flex">
              <img
                :src="`${likeusers.user.profile_photo}`"
                class="rounded-circle"
                width="55px"
                height="55px"
                v-if="likeusers.user.profile_photo"
              />
              <img
                src="../../assets/profile-no-img.png"
                class="rounded-circle"
                width="55px"
                height="55px"
                v-else
              />
              <h2 class="m-1 ml-3 text-dark font-xss">
                {{ likeusers.user.full_name
                }}<span class="d-block font-xssss text-grey-500"
                  >{{ likeusers.city.name }}{{ likeusers.state.name
                  }}{{ likeusers.country.name }}</span
                >
              </h2>
            </td>
            <td>
              <button
                style="float:right; margin:12px 0; height:30px; width:6rem;"
                class="p-1 text-white border-0 rounded-xxxl font-xssss bg-primary hover-none"
                :id="likeusers.user_id"
                v-on:click="followlike(likeusers.user_id, folloind)"
                v-if="likeusers.relation === 'Follow'"
              >
                Follow
              </button>
            </td>
          </tr>
        </table>
      </div>
    </b-modal>
    <b-modal
      show-close="ftrue"
      hide-footer
      id="editmypost"
      centered
      ref="modal"
      size="lg"
    >
      <div class="modal-header pl-4 m-0 pb-0">
        <h2 class="modal-title m-0 p-0"><ins>Edit Post</ins></h2>
      </div>
      <form
        ref="form"
        v-on:submit.prevent="updatepost(itemIndex)"
        class="p-4 pt-2"
      >
        <error v-if="error" :error="error" />
        <b-form-group
          class=" mb-1 mt-0"
          label="Title"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md "
            id="name-input"
            v-model="singlepost.title"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class=" mb-2 mt-0"
          label="Location"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
            id="name-input"
            v-model="singlepost.location"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mb-0 "
          label="Description"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <textarea
            name="message"
            v-model="singlepost.description"
            class="h100 bor-0 w-100 rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
            cols="30"
            rows="10"
            placeholder="What's on your mind?"
          ></textarea>
        </b-form-group>
        <div class="card-body d-flex p-0 mt-2 mb-2">
          <a
            href="#"
            class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
          >
            <div class="left">
              <label class="file">
                <i class="font-md text-success feather-image me-2"></i>
                <span class="d-none-xs">Photo</span>
                <input
                  type="file"
                  class="images[]"
                  name="images"
                  id="file-small"
                  @change="imageupload($event.target.name, $event.target.files)"
                  multiple
                  accept="image/*"
                />
              </label>
            </div>
          </a>
          <div class="img-wrap  d-flex">
            <div v-for="(img, index) in url" :key="img">
              <b-img
                class="p-1"
                v-bind="mainProps"
                rounded
                :src="img"
                alt="Top-rounded image"
                width="50"
                height="50"
              ></b-img>
              <span type="button" class="closed" @click="removeImage(index)"
                >&times;</span
              >
            </div>
          </div>
          <div class="img-wrap  d-flex">
            <div v-for="(img, index) in singlepost.medias" :key="img.id">
              <b-img
                class="p-1"
                v-bind="mainProps"
                rounded
                :src="img.path"
                alt="Top-rounded image"
                width="50"
                height="50"
              ></b-img>
              <span
                type="button"
                class="closed"
                @click="removeIm(img.id, index)"
                >&times;</span
              >
            </div>
          </div>
        </div>
        <b-button
          type="submit"
          style="background-color: #004898!important"
          class="font-xsssss fw-700 ps-3 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"
          @click="$bvModal.hide('editmypost')"
          >Update</b-button
        >
      </form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

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
      comments: [],
      comentsshow: "",
      singlecomment: { body: "" },
      page: "1",
      lastPage: "1",
      isModalVisible: false,
      productsShow: 15,
      isHidden: false,
      seen: true,
      moment: moment,

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
      var getUserId = this.$route.params.id;
      axios
        .get(`posts?filter={"user_id":"${getUserId}"}`)
        //?page=${this.page}&per_page=3
        .then((result) => {
          this.post.push(...result.data.data);
          this.lastPage = result.data.last_page;
        });
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
          this.post[this.itemInd] = result.data.data;
          this.post.push();
        });
      console.log(response);
    },

    deletePosts(id, itemIndex) {
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
    },
    likeShow(id, index) {
      console.log(index);
      if (this.likeuser && this.likeuser.length > 0) {
        this.likeuser.splice(index, 1);
      }
      axios
        .get("posts/like/" + id)

        .then((result) => {
          //this.likeuser.splice(0)
          this.likeuser = result.data.data;

          console.warn("commentshow APi Call", result);
        });
    },
    //  async followlike(e) {
    //    var postid = e.target.id;

    //    alert(postid);

    //    const response = axios.post("users/follow", {
    //      followee_id: postid,
    //    });
    //    console.log(response).then(() => {
    //      this.getData();
    //    });
    //  },
    followlike(id, folloind) {
      var postid = id;
      const response = axios.post("users/follow", {
        followee_id: postid,
      });

      var myLike = this.likeuser[folloind];
      myLike.relation = "Requested";
      this.likeuser.$set(folloind, myLike);
      console.log("likeuser data", this.likeuser[folloind]);

      //  this.likeuser[folloind].relation = "Requested"
      //  this.likeuser.push()
      console.log(response);
    },

    commentshow(id) {
      axios
        .get("posts/comment/" + id)

        .then((result) => {
          this.comments = result.data.data;

          console.warn("commentshow APi Call", result);
        });
    },
    commentedit(id, comentInde) {
      this.getComInd = comentInde;
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
      const response = axios
        .post("comments/" + id, { body: this.singlecomment.body })
        .then(() => {
          this.comments.push();
          let title = this.singlecomment.body;
          this.singlecomment.body = !this.singlecomment.body;
          this.comments[this.getComInd].body = title;
          this.seen = !this.seen;
        });

      this.$forceUpdate();
      console.log(response);
      return !this.comments.length;
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
          this.post[
            this.post[itemindex].comments_count++
          ].comments_count = count;
        });

      console.log();
    },
  },
  beforeMount() {
    this.getData();
  },
  mounted() {
    this.getNextUser();
  },
  // mounted() {
  //   this.getData();

  // },
};
</script>

<style scoped>
textarea {
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  background: none repeat scroll 0 0 rgb(248 249 250);
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;

  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
}

textarea:focus {
  background: none repeat scroll 0 0 #ffffff;
  outline-width: 0;
}

input[type="file"] {
  display: none;
}
.img-wrap {
  position: relative;
}
.img-wrap .close {
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 100;
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
  eight: 24px;
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
</style>
