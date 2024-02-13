<template>
  <div>
    <div v-if="token === ''">
      <!-- <h1>Token does not exist, show something else or nothing</h1> -->
    </div>

    <div v-else>
      <DummyHome />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DummyHome from "./DummyHome.vue";

export default {
  name: "DummySignin",

  data() {
    return {
      dummyData: [],
      token: "",

      // apiUrl: "https://api.restroworld.com/api/",
      apiUrl: "https://uatapi.restroworld.com/public/api/",
    };
  },

  created() {
    this.loadData();
  },

  methods: {
    loadData() {
      axios
        .post(`${this.apiUrl}login`, {
          email: "restroworld@gmail.com",
          password: "12345678",
          remember_me: "1",
        })
        .then((response) => {
          const authToken = response.data.data.authorization;

          localStorage.setItem("authToken", authToken);

          this.token = localStorage.getItem("authToken");

          // console.log(this.token);
        })
        .catch((error) => {
          console.log("not store the token : ", error);
        });
    },
  },
  components: { DummyHome },
};
</script>

<style scoped></style>
