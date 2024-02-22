<template>
  <div>
    <div
      class="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <div class="w-100 mb-2">
        <button
          type="button"
          class="btn btn-warning w-100 fs-4 rounded-0"
          style="color: white"
          @click="logout"
        >
          Elite Account
        </button>
      </div>

      <div
        class="my-2 w-100 d-flex justify-content-center align-items-center bg-white p-4"
      >
        <div
          class="w-100 border-light-md theme-dark-bg"
          style="
            background-color: whitesmoke;
            height: 10rem;
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
                class="shadow-sm rounded-3"
                src="./assets/profile-no-img.99d6b3a5.99d6b3a5.png"
                alt="profile-no-img"
                style="
                  width: 2.2rem;
                  height: 2rem;
                  mix-blend-mode: darken;
                  margin: 0.6rem 0.6rem;
                  object-fit: cover;
                "
              />
            </div>

            <p
              class="position-absolute fs-6 mb-0"
              style="left: 3.5rem; top: 1.1rem; color: gray"
            >
              Please share your Restroworld stories!
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
