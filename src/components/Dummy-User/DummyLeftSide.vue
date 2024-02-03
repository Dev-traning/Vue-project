<template>
  <div class="w-100">
    <div
      class="shadow bg-body px-3 py-2 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="d-flex flex-column">
        <h1 class="p-0 m-0 fs-3" style="font-weight: 500">
          {{ currentUser.full_name }}
        </h1>
        <p class="p-0 fs-5" style="font-weight: 500">Restronent</p>
        <button
          @click="logout"
          type="button"
          class="btn btn-primary w-50 fs-5"
          style="font-weight: 500"
        >
          View Profile
        </button>
      </div>

      <div
        class="w-100 my-3"
        style="border-bottom: 2px solid rgb(65, 64, 64)"
      ></div>

      <div class="w-100 d-flex justify-content-center align-itmes-center">
        <p
          class="text-start w-100 fs-4"
          style="font-weight: 500; color: rgb(65, 64, 64)"
        >
          Billions of Restaurants, Vendors, Chefs, Captains are waiting for you
          at Restroworld.
        </p>
      </div>
    </div>

    <div
      class="shadow bg-body px-3 py-2 mt-3 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="p-2 d-flex align-itmes-center justify-content-between">
        <h4 class="p-0 m-0 fs-6 fw-bolder" style="color: black">Vender</h4>
        <h4
          @click="logout"
          class="p-0 m-0 text-primary fs-6 fw-bolder"
          style="cursor: pointer"
        >
          see all
        </h4>
      </div>
    </div>

    <div
      class="shadow bg-body px-3 py-2 mt-4 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div
        class="p-2 d-flex align-itmes-center justify-content-between"
        style="overflow: hidden"
      >
        <img
          src="./assets/restroworldCardImg.jpg"
          alt="restroworldCardImg"
          class="w-100 custom-hover-img"
        />
      </div>

      <div class="p-1 rounded-3" style="background-color: whitesmoke">
        <h5 class="pl-3 fw-bold">Aayush Sales</h5>
        <h6 class="pl-3">12 Jan, 2021</h6>
      </div>

      <button
        @click="logout"
        class="text-primary"
        style="border: none; background: none"
      >
        Read More
      </button>
    </div>

    <div
      class="shadow bg-body px-3 py-2 mt-4 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div
        class="p-2 d-flex align-itmes-center justify-content-between"
        style="overflow: hidden"
      >
        <img
          src="./assets/restroworldCardImg.jpg"
          alt="restroworldCardImg"
          class="w-100 custom-hover-img"
        />
      </div>

      <div class="p-1 rounded-3" style="background-color: whitesmoke">
        <h5 class="pl-3 fw-bold">Durga Kitchen equipments</h5>
        <h6 class="pl-3">12 Jan, 2021</h6>
      </div>

      <button
        @click="logout"
        class="text-primary"
        style="border: none; background: none"
      >
        Read More
      </button>
    </div>

    <div
      class="shadow bg-body px-3 py-2 my-4 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
    >
      <div class="p-2 d-flex align-itmes-center justify-content-between">
        <h4 class="p-0 m-0 fs-6 fw-bolder">Sale My Restaurant</h4>
        <h4
          @click="logout"
          class="p-0 m-0 text-primary fs-6 fw-bolder"
          style="cursor: pointer"
        >
          see all
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

      apiUrl: "https://api.restroworld.com/api/",
      // apiUrl: "https://uatapi.restroworld.com/public/api/",
      defaultProfileImg: require("./assets/profile-no-img.99d6b3a5.99d6b3a5.png"),
      defaultPostImage: require("./assets/ProfileImg.jpg"),
    };
  },

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
  transform: scale(1.2);
}
</style>
