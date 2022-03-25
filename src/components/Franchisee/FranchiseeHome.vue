<template>
  <div v-if="this.users.user_type === '6'">
    <div class="card w-100 shadow-md rounded-lg border-0 mb-3 ">
      <div class="card-body d-flex align-items-center p-3 ">
        <h4 class="fw-700 mb-0 font-xssss text-grey-900">Franchise Provider</h4>
        <router-link
          class="fw-600 ms-auto font-xssss text-primary"
          v-if="is_subscribed === user.is_subscribed"
          to="/FranchiseeShow"
          >See All
        </router-link>
        <a
          class="fw-600 ms-auto font-xssss text-primary"
          v-b-modal.subscribealert
          v-else
          >See All</a
        >
      </div>
    </div>

    <div class="row">
      <div class="container">
        <div class="row">
          <div
            class="col-12"
            v-for="item in franchise.slice(0, 2)"
            v-bind:key="item.id"
          >
            <div
              class="p-1 mb-3 overflow-hidden bg-white border-0 card w-100 hover-card shadow-md rounded-lg"
            >
              <div class="card-image w-100">
                <img
                  :src="item.medias.path"
                  alt="event"
                  class="w-100"
                  width="250.5"
                  height="187.88"
                  v-if="item.medias.path"
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
                    {{ item.restaurant.name }}
                    <span class=" ls-3 d-block font-xsssss text-grey-500 fw-500"
                      >12 Jan, 2021</span
                    >
                  </h4>
                </div>

                <h4 class="mt-2 text-center font-xssss fw-500 text-grey-500">
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
      franchise: "",
      users: "",
      is_subscribed: true,
    };
  },
  methods: {
    getData() {
      this.users = JSON.parse(localStorage.getItem("UserDetails"));

      axios
        .get("restaurants/give-franchise?per_page=2&page=1")

        .then((result) => {
          console.log(result);
          this.franchise = result.data.data;
        });
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
