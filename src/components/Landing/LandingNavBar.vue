<template>
  <main>
    <!-- Navbar for larger screens -->
    <div class="d-none d-md-flex justify-content-center">
      <nav
        class="d-flex w-100 justify-content-between p-4 fixed-top"
        style="background: white"
      >
        <div class="d-flex justify-content-start pl-2">
          <RouterLink
            to="/"
            class="d-flex justify-conent-center align-items-center"
          >
            <img
              src="./assets/Scroll Group 48.png"
              alt="logo of RedPrix"
              class="w-75"
              style="object-fit: contain"
            />
          </RouterLink>
        </div>

        <ul class="d-flex gap-5">
          <!-- <li class="list-unstyled fs-4">
              <RouterLink to="/" class="text-decoration-none text-black"
                >Home</RouterLink
              >
            </li> -->

          <li class="list-unstyled fs-4 p-2 bg-white rounded custom-hover">
            <RouterLink to="/login" class="text-decoration-none text-black"
              >Log-in</RouterLink
            >
          </li>

          <li class="list-unstyled fs-4 p-2 bg-white rounded custom-hover">
            <RouterLink
              to="/RegisterNew"
              class="text-decoration-none text-black"
              >Sign-up</RouterLink
            >
          </li>

          <!-- <li class="list-unstyled fs-4">
              <RouterLink
                to="/maincontactUs"
                class="text-decoration-none text-black"
                >Contact</RouterLink
              >
            </li> -->
        </ul>
      </nav>
    </div>

    <!-- Navbar for smaller screens -->
    <nav
      class="navbar navbar-expand-md navbar-light d-md-none p-3 justify-content-between"
      style="background-color: white"
    >
      <div class="d-d-flex justify-content-start pl-2 w-50">
        <RouterLink
          to="/"
          class="d-flex justify-conent-center align-items-center"
        >
          <img
            src="./assets/Scroll Group 48.png"
            alt="logo of RedPrix"
            class="w-50 custom-logo"
            style="object-fit: contain"
          />
        </RouterLink>
      </div>

      <div>
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
      <LandingSideNavBar
        v-if="isSideNavigationOpen"
        @closeSidebar="closeSidebar"
      />
    </nav>
  </main>
</template>

<script>
import LandingSideNavBar from "./LandingSideNavBar.vue";

export default {
  name: "LandingNavBar",
  data() {
    return {
      isSideNavigationOpen: false,
    };
  },

  methods: {
    toggleNavbar() {
      this.isSideNavigationOpen = true;
    },

    closeSidebar() {
      this.isSideNavigationOpen = false;
    },
  },
  components: { LandingSideNavBar },
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
</style>
