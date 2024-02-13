<template>
  <div class="w-100">
    <div
      class="shadow bg-body p-2 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="d-flex flex-column ms-1">
        <h1 class="p-0 m-0 fs-3" style="font-weight: 500">
          {{ currentUser.full_name }}
        </h1>
        <p class="p-0 fs-5" style="font-weight: 500">Restaurant</p>
        <button
          @click="logout"
          type="button"
          class="btn btn-primary w-50 fs-5"
          style="font-weight: 500"
        >
          View Profile
        </button>
      </div>

      <div class="w-100 my-3 border-bottom"></div>

      <div class="pb-3 text-center d-block w-100 ps-3 pe-3">
        <div class="clearfix"></div>
        <p class="mt-0 mb-1 text-left fw-600 font-xsss text-grey-600 p-1">
          Billions of Restaurants, Vendors, Chefs, Captains are waiting for you
          at Restroworld.
        </p>
        <div class="clearfix mb-2"></div>
      </div>
    </div>

    <div
      class="shadow bg-body px-3 py-2 mt-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="p-2 d-flex align-itmes-center justify-content-between">
        <h4 class="p-0 m-0 fs-6 fw-bolder" style="color: black">Vender</h4>
        <h4
          @click="logout"
          class="p-0 m-0 text-primary fs-6 fw-bolder"
          style="cursor: pointer"
        >
          See All
        </h4>
      </div>
    </div>

    <div
      class="shadow bg-body px-1 py-1 mt-4 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div
        class="py-1 d-flex align-itmes-center justify-content-between"
        style="overflow: hidden"
      >
        <img
          src="./assets/restroworldCardImg.jpg"
          alt="restroworldCardImg"
          class="w-100 custom-hover-img"
        />
      </div>

      <div class="p-1" style="background-color: whitesmoke">
        <h5 class="ps-3 fw-bold mb-0">Aayush Sales</h5>
        <h6 class="ps-3 fs-6 mb-1">12 Jan, 2021</h6>
      </div>

      <button
        @click="logout"
        class="text-primary py-2"
        style="border: none; background: none"
      >
        Read More
      </button>
    </div>

    <div
      class="shadow bg-body px-1 py-1 mt-4 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div
        class="py-1 d-flex align-itmes-center justify-content-between"
        style="overflow: hidden"
      >
        <img
          src="./assets/restroworldCardImg.jpg"
          alt="restroworldCardImg"
          class="w-100 custom-hover-img"
        />
      </div>

      <div class="p-1" style="background-color: whitesmoke">
        <h5 class="ps-3 fw-bold mb-0">Durga Kitchen equipments</h5>
        <h6 class="ps-3 mb-1">12 Jan, 2021</h6>
      </div>

      <button
        @click="logout"
        class="text-primary py-2"
        style="border: none; background: none"
      >
        Read More
      </button>
    </div>

    <div
      class="shadow bg-body px-3 py-2 my-4 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="p-2 d-flex align-itmes-center justify-content-between">
        <h4 class="p-0 m-0 fs-6 fw-bolder">Sale My Restaurant</h4>
        <h4
          @click="logout"
          class="p-0 m-0 text-primary fs-6 fw-bolder"
          style="cursor: pointer"
        >
          See All
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DummyLeftSide",

  data() {
    return {
      token: "",
      currentUser: {},

      // apiUrl: "https://api.restroworld.com/api/",
      apiUrl: "https://uatapi.restroworld.com/public/api/",
      defaultProfileImg: require("./assets/profile-no-img.99d6b3a5.99d6b3a5.png"),
      defaultPostImage: require("./assets/ProfileImg.jpg"),
    };
  },
  components: {},

  created() {
    this.lodData();
  },

  mounted() {
    this.getCurrentUser();
  },

  methods: {
    async getCurrentUser() {
      try {
        const response = await axios.get(`${this.apiUrl}user`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });

        this.currentUser = response.data;

        // console.log(this.currentUser);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },

    lodData() {
      this.token = localStorage.getItem("authToken");
      //   console.log("this is home page show token", this.token);
    },

    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.custom-hover-img {
  transition: transform 0.3s ease-in-out;
}
.custom-hover-img:hover {
  transform: scale(1.1);
}
</style>
