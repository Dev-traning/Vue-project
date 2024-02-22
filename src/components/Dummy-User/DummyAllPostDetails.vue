<template>
  <div>
    <div
      v-for="post in allPosts"
      :key="post.id"
      class="w-100 d-flex flex-column bg-body px-4 py-2 my-3"
    >
      <div
        class="d-flex my-3 gap-2 d-flex justify-content-start align-items-center"
      >
        <img
          :src="
            post.user.profile_photo
              ? post.user.profile_photo
              : defaultProfileImg
          "
          alt="profile-no-img"
          class="rounded-3"
          style="width: 9; height: 2.8rem; mix-blend-mode: darken"
        />

        <div class="d-flex justify-content-between w-100">
          <div class="d-flex flex-column">
            <h5 class="fw-bold fs-6 mb-1 mt-1">{{ post.user.first_name }}</h5>
            <h6 class="fs-6 text-primary">
              {{ formatCreatedAt(post.created_at) }}
            </h6>
          </div>

          <div
            class="d-flex justify-content-center align-items-center rounded-circle"
            style="background-color: whitesmoke; padding: 0.7rem 0.7rem"
            @click="logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
              style="cursor: pointer; font-size: 2rem"
            >
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div v-if="post.medias && post.medias.length > 0">
          <div v-if="post.medias.length > 1" class="position-relative">
            <div
              class="w-100 d-flex position-relative"
              style="z-index: 1; overflow-x: auto"
            >
              <img
                v-for="media in post.medias"
                :key="media.id"
                :src="media.path ? media.path : defaultPostImage"
                alt="Post Image"
                class="w-100 rounded-3 m-2 custom-hover-img"
              />
            </div>
          </div>

          <div v-else>
            <img
              :src="
                post.medias[0].path ? post.medias[0].path : defaultPostImage
              "
              alt="Post Image"
              class="w-100 rounded-3 custom-hover-img"
            />
          </div>
        </div>

        <div class="mt-4">
          <h4 class="fw-bold m-0 p-0 fs-4" style="color: rgb(60, 60, 60)">
            {{ post.title ? post.title : "Cluster Housekeeping Supervisor" }}
          </h4>
          <div class="">
            <!-- <p
              class="fs-5 m-0 p-0 fs-5"
              v-if="!showMore"
              v-html="truncatedDescription"
            ></p>
            <p class="fs-5 m-0 p-0 fs-5" v-else v-html="oldDescText"></p>
            <a href="" @click.prevent="toggleDescription"
              >Show {{ showMoreText }}</a
            > -->
            <p
              v-if="!getShowMore(post)"
              v-html="truncatedDescription(post)"
            ></p>
            <p v-else v-html="postDescText(post)"></p>
            <a
              href=""
              @click.prevent="toggleDescription(post)"
              v-if="post.description.length > 100"
              >Show {{ getShowMoreText(post) }}</a
            >
          </div>
        </div>
        <!-- {{
                post.description
                  ? post.description
                  : "Marriott International..."
              }} -->

        <div class="d-flex justify-content-between align-items-center my-2">
          <div class="d-flex justify-content-between align-items-center gap-3">
            <h6 class="fw-bolder fs-6">
              {{ post.likes_count ? post.likes_count : "3" }} Likes
            </h6>
            <h6 class="fw-bolder fs-6">
              {{ post.comments_count ? post.comments_count : "3" }} Comments
            </h6>
          </div>

          <div class="d-flex gap-3">
            <button
              @click="logout"
              type="button"
              class="btn btn-outline-primary fs-5"
              style="color: black; font-weight: 600"
            >
              Like
            </button>
            <button
              @click="logout"
              type="button"
              class="btn btn-outline-warning fs-5"
              style="color: black; font-weight: 600"
            >
              Share
            </button>
          </div>
        </div>

        <div class="my-3 d-flex justify-content-center align-items-center">
          <div class="w-100 p-0 pe-3">
            <input
              @click="logout"
              type="text"
              class="w-100 p-1 rounded-3 custome-outline-input"
              placeholder="Recipient's username"
            />
          </div>

          <div class="p-0">
            <button
              @click="logout"
              class="btn custome-outline"
              type="button"
              id="button-addon2"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading spinner when fetching more posts -->
    <div v-if="isLoadingMorePosts" class="d-flex justify-content-center my-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DummyAllPost",

  data() {
    return {
      token: "",
      allPosts: [],
      currentIndex: 0,

      isLoadingMorePosts: false,

      apiUrl: "https://api.restroworld.com/api/",
      // apiUrl: "https://uatapi.restroworld.com/public/api/",
      defaultProfileImg: require("./assets/profile-no-img.99d6b3a5.99d6b3a5.png"),
      defaultPostImage: require("./assets/ProfileImg.jpg"),

      showMore: false,
      showMoreText: "More",
      // postDescText: "",
      postStates: {}, // Local state for each post
    };
  },

  created() {
    this.lodData();
    this.getAllPost();
  },

  // mounted() {
  // this.getAllPost();
  // },

  computed: {
    // truncatedDescription() {
    //   const max_length = 100;
    //   if (this.postDescText && this.postDescText.length > max_length) {
    //     return this.postDescText.substring(0, max_length) + "...";
    //   }
    //   return this.postDescText;
    // },
    // oldDescText() {
    //   return this.postDescText;
    // },
  },

  methods: {
    // async getAllPost() {
    //   try {
    //     const response = await axios.get(`${this.apiUrl}posts`, {
    //       headers: {
    //         Authorization: `Bearer ${this.token}`,
    //       },
    //     });

    //     this.allPosts = response.data.data;

    //     // console.log(this.allPosts);
    //   } catch (error) {
    //     console.error("Error fetching posts:", error);
    //   }
    // },
    // getDesc(desc) {
    //   // console.log("Description: ", desc);
    //   this.postDescText = desc;
    // },

    // toggleDescription() {
    //   this.showMore = !this.showMore;
    //   this.showMoreText = this.showMore ? "Less" : "More";
    // },

    truncatedDescription(post) {
      const max_length = 100;
      if (post.description && post.description.length > max_length) {
        return post.description.substring(0, max_length) + "...";
      }
      return post.description;
    },
    postDescText(post) {
      return post.description;
    },
    getShowMore(post) {
      return this.postStates[post.id]
        ? this.postStates[post.id].showMore
        : false;
    },
    getShowMoreText(post) {
      return this.postStates[post.id]
        ? this.postStates[post.id].showMore
          ? "Less"
          : "More"
        : "More";
    },
    toggleDescription(post) {
      this.$set(this.postStates, post.id, {
        showMore: !this.getShowMore(post),
      });
    },

    async getAllPost() {
      try {
        const response = await axios.get(
          `${this.apiUrl}posts/likes-desc?likes=desc&users=desc`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        this.allPosts = response.data.data;

        // console.log(this.allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },

    async loadMorePosts() {
      try {
        this.isLoadingMorePosts = true;

        const page = Math.ceil(this.allPosts.length / 15) + 1;
        const pageSize = 15;
        const response = await axios.get(`${this.apiUrl}posts/likes-desc?likes=desc&users=desc`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          params: {
            page: page,
            pageSize: pageSize,
          },
        });

        const currentPosts = response.data.data;

        if (currentPosts.length > 0) {
          this.allPosts = [...this.allPosts, ...currentPosts];
        }
      } catch (error) {
        console.error("Error fetching more posts:", error);
      } finally {
        this.isLoadingMorePosts = false;
      }
    },

    formatCreatedAt(timestamp) {
      const currentDate = new Date();
      const createdAtDate = new Date(timestamp);
      const timeDifference = currentDate - createdAtDate;

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      if (years > 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
      } else if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
      } else if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
      } else if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
      } else if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
      } else {
        return "Just now";
      }
    },

    lodData() {
      this.token = localStorage.getItem("authToken");
      // console.log("this is home page show token", this.token);
    },

    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },

    handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200
      ) {
        this.loadMorePosts();
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.custome-outline-input {
  outline: 2px solid rgb(137, 137, 137);
  border: none;
}

.custome-outline-input:focus {
  outline: 2px solid rgb(39, 38, 38);
  border: none;
}
.custome-outline {
  outline: 1px solid rgb(75, 75, 75);
  color: black;
  font-weight: 600;
}

.custome-outline:hover {
  background-color: rgb(47, 47, 46);
  color: white;
}
/* .custom-hover-img {
  transition: transform 0.3s ease-in-out;
}
.custom-hover-img:hover {
  transform: scale(1.2);
} */
</style>
