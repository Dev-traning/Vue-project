<template>
  <div>
    <div class="card w-100 shadow-md rounded-lg border-0 mb-3 ">
      <div class="card-body d-flex align-items-center p-3 ">
        <h4
          class="fw-700 mb-0 font-xssss text-grey-900"
          v-if="this.users.user_type === '6' || this.users.user_type === '8'"
        >
          Manpower
        </h4>

        <h4
          class="fw-700 mb-0 font-xssss text-grey-900"
          v-if="this.users.user_type === '7'"
        >
          Restaurant
        </h4>

        <!-- <router-link  class="fw-600 ms-auto font-xssss text-primary"  v-if="is_subscribed === user.is_subscribed" to="/ManpowerShow" >See All </router-link>
         <a   class="fw-600 ms-auto font-xssss text-primary"  v-b-modal.subscribealert v-else>See All</a >   -->

        <div
          class="fw-600 ms-auto font-xssss text-primary"
          v-if="is_subscribed === user.is_subscribed"
        >
          <router-link
            class="text-primary"
            v-if="this.users.user_type === '6' || this.users.user_type === '8'"
            to="/ManpowerShow"
            >See All
          </router-link>
          <router-link
            class="text-primary"
            v-if="this.users.user_type === '7'"
            :to="'/SMRShow/' + this.user.user_type"
            >See All</router-link
          >
        </div>

        <div class="fw-600 ms-auto font-xssss text-primary" v-else>
          <a class="text-primary" v-b-modal.subscribealert>See All</a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-12" v-for="item in manpower" v-bind:key="item.id">
            <div
              class="p-1 mb-3 overflow-hidden bg-white border-0 card w-100 hover-card shadow-md rounded-lg"
            >
              <div class="card-image w-100">
                <img
                  :src="item.user.profile_photo"
                  alt="event"
                  class="w-100"
                  width="250.5"
                  height="187.88"
                  v-if="item.user.profile_photo"
                />

                <img
                  src="../../assets/no_image_available.jpg"
                  alt="event"
                  class="w-100"
                  width="250.5"
                  height="187.88"
                  v-else
                />
              </div>
              <div class="pb-0  mt-1 ps-0 pe-0">
                <div class="p-0 rounded-xxl theme-dark-bg">
                  <h4
                    class="pl-3 mb-0 fw-700 font-xss ls-3 lh-27 text-grey-800"
                  >
                    {{ item.name }}
                    <span class=" ls-3 d-block font-xsssss text-grey-500 fw-500"
                      >12 Jan, 2021</span
                    >
                  </h4>
                </div>

                <h4 class="mt-2 text-center font-xssss fw-500 text-grey-500">
                  <span class="d-block lh-25 mb-1">{{
                    item.comments.slice(0, 65)
                  }}</span>

                  <!-- <span class="d-block lh-30">Restaurant leader?</span> -->

                  <router-link
                    type="button"
                    class="btn btn-link text-decoration-none m-0 p-0"
                    v-if="is_subscribed === user.is_subscribed"
                    :to="'/read-more/' + item.user_type_text + '/' + item.id"
                    >Read More</router-link
                  >
                  <button
                    type="button"
                    class="btn btn-link text-decoration-none m-0 p-0"
                    v-b-modal.subscribealert
                    v-else
                  >
                    Read More
                  </button>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "SMRhome",
  data() {
    return {
      manpower: "",
      users: "",
      is_subscribed: true,
    };
  },
  methods: {
    getData() {
      this.users = JSON.parse(localStorage.getItem("UserDetails"));
      this.users = JSON.parse(localStorage.getItem("UserDetails"));

      if (this.users.user_type === "6" || this.users.user_type === "8") {
        axios.get("mp/manpowers?per_page=2&page=1").then((result) => {
          this.manpower = result.data.data;
        });
      } else {
        axios
          .get("restaurants/restaurants?per_page=2&page=1")
          .then((result) => {
            this.manpower = result.data.data;
          });
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.getData();
  },
};
</script>
