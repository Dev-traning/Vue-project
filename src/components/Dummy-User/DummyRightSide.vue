<template>
  <div>
    <div class="w-100 my-3">
      <div
        class="shadow bg-body px-3 py-2 rounded-3 d-flex w-100 justify-content-start align-itmes-center flex-column"
      >
        <div class="p-2 d-flex align-itmes-center justify-content-between">
          <h4 class="p-0 m-0 fs-6 fw-bolder">Manpower</h4>
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
        <div class="p-2 d-flex align-itmes-center justify-content-between">
          <h4 class="p-0 m-0 fs-6 fw-bolder">Franchise Provider</h4>
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
        class="d-flex justify-content-center flex-column align-itmes-center w-100 mt-4"
      >
        <div class="row">
          <div class="col-sm-6 custom-res-col-6 fs-6" style="font-weight: 500">
            <p
              class="text-end m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              About
            </p>
            <p
              class="text-end m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              FranchiseePrivacy
            </p>
            <p
              class="text-end m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              Cancellation
            </p>
          </div>

          <div class="col-sm-6 custom-res-col-6 fs-6" style="font-weight: 500">
            <p
              class="text-start m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              UsAtmnirbhar
            </p>
            <p
              class="text-start m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              Policy
            </p>
            <p
              class="text-start m-0 p-0"
              style="border: none; background: none; color: gray"
            >
              Terms & Conditions
            </p>
          </div>
        </div>

        <div
          class="d-flex justify-content-center align-itmes-center fs-6"
          style="font-weight: 500"
        >
          <a href="#">support@restroworld.com</a>
        </div>

        <div
          class="d-flex justify-content-center align-itmes-center fs-6"
          style="color: gray; font-weight: 500"
        >
          <p style="color: gray">
            <span class="text-danger">
              <span class="text-primary">Restro</span>world</span
            >
            Corporation © 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DummyRightSide",

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
@media (max-width: 580px) {
  .custom-res-col-6 {
    width: 50% !important;
  }
}
</style>
