<template>
  <div>
    <DummyNavBar />

    <div class="container-xl w-100 custom-container" style="margin-top: 7rem">
      <div class="row custom-res-row">
        <div class="col-sm-3 custom-res-col">
          <DummyLeftSide />
        </div>
        <div class="col-sm-9 pl-0 custom-res-col">
          <DummyCenterCreatePost />

          <div class="row custom-res-right-row">
            <div class="col-sm-8 custom-res-right-col">
              <DummyAllPost />
            </div>

            <div class="col-sm-4 pl-0 custom-res-right-col">
              <DummyRightSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DummyNavBar from "./DummyNavBar.vue";
import DummyLeftSide from "./DummyLeftSide.vue";
import DummyRightSide from "./DummyRightSide.vue";
import DummyCenterCreatePost from "./DummyCenterCreatePost.vue";
import DummyAllPost from "./DummyAllPostDetails.vue";

export default {
  name: "DummyHome",
  data() {
    return {
      token: "",
    };
  },

  components: {
    DummyNavBar,
    DummyLeftSide,
    DummyRightSide,
    DummyCenterCreatePost,
    DummyAllPost,
  },

  created() {
    this.lodData();
  },

  methods: {
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
* {
  font-family: Montserrat, sans-serif;
}

@media (max-width: 999px) {
  .custom-res-row {
    display: flex !important;
    flex-direction: column !important;
  }

  .custom-res-col {
    width: 100% !important;
    padding: 8px !important;
  }
}

@media (max-width: 732px) {
  .custom-res-right-row {
    display: flex !important;
    flex-direction: column !important;
  }

  .custom-res-right-col {
    width: 100% !important;
    padding: 8px !important;
  }
}

@media (max-width: 767px) {
  .custom-container {
    margin-top: 2rem !important;
  }
}
</style>
