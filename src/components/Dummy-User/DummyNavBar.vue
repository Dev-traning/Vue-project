<template>
  <main class="custom-res-navbar">
    <!-- Navbar for larger screens -->
    <div class="container-xl d-none d-md-flex justify-content-center w-100">
      <nav
        class="d-flex w-100 justify-content-around align-items-center fixed-top"
        style="background: white; padding: 1.5rem 0rem"
      >
        <div class="row align-items-center">
          <div class="col-sm-5">
            <RouterLink
              to="/"
              class="d-flex justify-conent-center align-items-center"
            >
              <img
                src="./assets/Scroll Group 48.png"
                alt="logo of RedPrix"
                class="w-100"
                style="object-fit: contain"
              />
            </RouterLink>
          </div>

          <div class="col-sm-7">
            <h3 class="fw-bold fs-4 text-primary">
              First Global Restaurant Community
            </h3>
          </div>
        </div>

        <ul class="d-flex gap-5">
          <li class="list-unstyled fs-4 p-2 bg-white rounded custom-hover">
            <button
              class="text-decoration-none text-black"
              style="border: none; background: none"
              @click="logout"
            >
              Log-Out
            </button>
          </li>

          <li class="list-unstyled fs-4 p-2 bg-white rounded custom-hover">
            <RouterLink
              to="/RegisterNew"
              class="text-decoration-none text-black"
            >
              Sign-up
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Navbar for smaller screens -->
    <nav
      class="navbar navbar-expand-md navbar-light d-md-none p-3 justify-content-between"
      style="background-color: white"
    >
      <div class="container">
        <RouterLink to="/" class="navbar-brand">
          <img
            src="./assets/Scroll Group 48.png"
            alt="logo of RedPrix"
            class="w-100 custom-logo"
            style="object-fit: contain"
          />
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- Use the SideNavigation component -->
      <DummySideNavBar
        v-if="isSideNavigationOpen"
        @closeSidebar="closeSidebar"
      />
    </nav>
  </main>
</template>

<script>
import DummySideNavBar from "./DummySideNavBar.vue";
export default {
  name: "DummyNavBar",
  data() {
    return {
      isSideNavigationOpen: false,
    };
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

    toggleNavbar() {
      this.isSideNavigationOpen = true;
    },

    closeSidebar() {
      this.isSideNavigationOpen = false;
    },
  },
  components: { DummySideNavBar },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

* {
  font-family: "Roboto Slab", serif;
}

.custom-hover:hover {
  /* background-color: rgb(253, 251, 249) !important; */
  border: 1px solid black;
}

@media (max-width: 457px) {
  .custom-logo {
    width: 75% !important;
  }
}

@media (max-width: 767px) {
  .custom-res-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>
