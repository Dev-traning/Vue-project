<template>
  <header
    class="navbar navbar-inverse navbar-fixed-top bs-docs-nav   navbar-expand-lg navbar-light fixed-top  bg-light text-dark shadow-lg  bg-info rounded"
    role="banner"
  >
    <div class="container">
      <div class="navbar-header">
        <h2 style="font-size: 40px !important; margin: unset !important;">
          <b
            ><router-link to="/home"
              ><span class="space1" style="color: #004898">Restro</span
              ><span class="space1" style="color: #c41e16"
                >world</span
              ></router-link
            ></b
          >
        </h2>
      </div>
      <div class="title_message">
        <p
          style="    margin: 0 0 0 24px;
                     font-weight: 700;
                     color: #004898"
        >
          First Global Restaurant Community
        </p>
      </div>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search class="d-none d-sm-block" />

          <!-- <a href="#" class="p-2 text-center ms-auto menu-icon show" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-bs-toggle="dropdown"><span class="dot-count bg-warning"></span><i class="feather-bell font-xl text-current"></i></a> -->

          <a
            class="p-0 ms-3 menu-icon d-none d-sm-block "
            v-bind:href="'/home/User'"
            ><img src="../assets/home-icon.png" alt="user" class="w40 rounded "
          /></a>
          <b-nav-item-dropdown right>
            <template #button-content>
              <a class="p-0 ms-1 menu-icon rounded-xxl">
                <img
                  :src="user.profile_photo"
                  alt="user"
                  height="40"
                  class="w40 rounded"
                  v-if="user.profile_photo"
                />
                <img
                  src="../assets/profile-no-img.png"
                  alt="user"
                  height="40 rounded"
                  class="w40"
                  v-else
                />
              </a>
            </template>
            <b-dropdown-item
              v-bind:href="'/EditProfile/' + users.restaurant.id"
              v-if="users.restaurant"
              >My Account</b-dropdown-item
            >
            <b-dropdown-item
              v-bind:href="
                '/ManpowerListings/ManpowerEditProfile/' + users.manpower.id
              "
              v-else-if="users.manpower"
              >My Account</b-dropdown-item
            >
            <b-dropdown-item
              v-bind:href="
                '/VendorListing/VendorEditProfile/' + users.vendor.id
              "
              v-else-if="users.vendor"
              >My Account</b-dropdown-item
            >

            <b-dropdown-item v-bind:href="'/home/User/setting'"
              >Settings</b-dropdown-item
            >
            <b-dropdown-item v-bind:href="'/home/User/privecy'"
              >Privacy</b-dropdown-item
            >
            <b-dropdown-item v-bind:href="'/home/User/help'"
              >Help</b-dropdown-item
            >
            <b-dropdown-item
              href="javascript:void(0)"
              @click="modalShow = !modalShow"
              >Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <div>
      <b-modal
        v-model="modalShow"
        @ok="handleClick"
        centered
        size="lg"
        class="modal"
        cancel-variant="none"
        ok-title="YES"
        cancel-title="NO"
      >
        <header class="font-xs mt-2 mb-4 text-uppercase font-weight-bold">
          Sign Out
        </header>
        <span class="font-xs">Are you sure you want to Sign out?</span>
      </b-modal>
    </div>
  </header>
</template>

<script>
import Search from "../components/GlobleSearch/Search.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Nav",
  components: { Search },
  data() {
    return {
      users: "",
      modalShow: false,
    };
  },

  methods: {
    async handleClick() {
      await axios.get("logout");
      localStorage.clear();
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  .title_message {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
  }
}
</style>
