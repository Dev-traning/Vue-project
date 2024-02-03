<template>
  <div>
    <div
      class="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <div class="w-100 mb-2">
        <button
          type="button"
          class="btn btn-warning w-100 fs-4"
          style="color: white"
          @click="logout"
        >
          Elite Account
        </button>
      </div>

      <div
        class="my-2 w-100 d-flex justify-content-center align-items-center bg-white p-3"
      >
        <div
          class="w-100"
          style="
            background-color: whitesmoke;
            height: 12rem;
            position: relative;
            cursor: pointer;
          "
          @click="logout"
        >
          <div
            class="d-flex gap-3 w-100 align-items-start justify-content-start h-100"
          >
            <div class="w-25">
              <img
                src="./assets/profile-no-img.99d6b3a5.99d6b3a5.png"
                alt="profile-no-img"
                style="width: 20%; height: 3rem; mix-blend-mode: darken"
              />
            </div>

            <p
              class="position-absolute fs-6"
              style="left: 3.5rem; top: 1rem; color: gray"
            >
              Please share your Restroworls stories
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DummyCenterCreatePost",

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

<style scoped></style>
