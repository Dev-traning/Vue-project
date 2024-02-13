<template>
  <div>
    <div class="sidebar w-25 h-100 p-2" :class="{ 'is-open': isSidebarOpen }">
      <div class="mt-3 d-flex align-items-center justify-content-between">
        <div class="pl-2">
          <img
            src="./assets/Scroll Group 48.png"
            alt="logo of RedPrix"
            style="object-fit: contain; width: 80%"
          />
        </div>

        <button
          type="button"
          class="btn-close pe-2 fs-4 fw-bold"
          aria-label="Close"
          @click="$emit('closeSidebar')"
        ></button>
        <!-- <h1 class="custom-text-color fs-3 fs fw-bolder">RedPrix</h1> -->
      </div>

      <ul class="py-0 px-0 my-3 mx-0 ms-2">
        <li class="my-3 w-50 list-unstyled">
          <!-- <img src="../Profile_Screens/assets/Home_selected.svg" alt=""/> -->
          <router-link to="/" class="text-decoration-none mx-0 my-0">
            <div
              class="home-logo d-flex justify-conent-center align-items-center"
              mouseover="label1"
              role="link"
            >
              <span class="fs-4 fw-bold custom-text-color" id="block1">
                - Home</span
              >
            </div>
          </router-link>
        </li>

        <li class="my-3 w-50 list-unstyled">
          <!-- <img src="../Profile_Screens/assets/Home_selected.svg" alt=""/> -->
          <button
            @click="logout"
            class="text-decoration-none mx-0 my-0"
            style="border: none; background: none"
          >
            <div
              class="home-logo d-flex justify-conent-center align-items-center"
              mouseover="label1"
              role="link"
            >
              <span class="fs-4 fw-bold custom-text-color" id="block1">
                - Log-In
              </span>
            </div>
          </button>
        </li>

        <!-- <img src="../Profile_Screens/assets/Home_selected.svg" alt=""/> -->
        <li class="my-3 w-50 list-unstyled">
          <router-link to="/RegisterNew" class="text-decoration-none mx-0 my-0">
            <div
              class="home-logo d-flex justify-conent-center align-items-center"
              mouseover="label1"
              role="link"
            >
              <span class="fs-4 fw-bold custom-text-color" id="block1">
                - Sign-up</span
              >
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
export default {
  name: "NavBar",
  data() {
    return {
      isSidebarOpen: false,
    };
  },

  mounted() {
    document.addEventListener("click", this.handleDocumentClick);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
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

    openSidebar() {
      this.isSidebarOpen = true;
    },

    closeSidebar() {
      console.log("Closing sidebar");
      this.isSidebarOpen = false;
    },

    handleDocumentClick(event) {
      if (this.isSidebarOpen && !this.$el.contains(event.target)) {
        this.closeSidebar();
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

.sidebar {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  z-index: 1000;
}

/* .sidebar.is-open {
          left: 0;
      } */

.profile-logo {
  margin-left: 5rem;
  width: 5%;
  text-align: center;
  margin-top: 0%;
}

.custom-text-color {
  color: #252323;
}

@media (max-width: 870px) {
  .sidebar {
    width: 35% !important;
  }
}

@media (max-width: 650px) {
  .sidebar {
    width: 45% !important;
  }
}

@media (max-width: 499px) {
  .sidebar {
    width: 50% !important;
  }
}

@media (max-width: 422px) {
  .sidebar {
    width: 55% !important;
  }
}

@media (max-width: 380px) {
  .sidebar {
    width: 65% !important;
  }
}

@media (max-width: 320px) {
  .sidebar {
    width: 70% !important;
  }
}
</style>
