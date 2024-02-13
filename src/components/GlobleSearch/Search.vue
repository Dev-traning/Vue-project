<template>
  <div>
    <b-form-input
      size="sm"
      class="mr-sm-2 title_message nav-search"
      v-model="searchQuery"
      @input="getSearch()"
      placeholder="Search"
      autocomplete="off"
    ></b-form-input>

    <div class="panel panel-default" v-if="searchQuery">
      <div
        class="panel-footer"
        v-if="searchQuery"
        style="
          position: absolute;
          z-index: 1000;
          border: 1px solid #ccc;
          background: #fff;
        "
      >
        <span
          style="
            font-weight: bolder;
            font-style: 1.5rem;
            color: rgb(0, 72, 152);
          "
          v-if="resultQuery"
          class="nav-search fw-500 bold"
          >User</span
        >
        <br />

        <p
          v-for="item in resultQuery.slice(0, 5)"
          :key="item.id"
          style="
            margin: -1px 0 0 0;
            font-size: 14px;
            color: #333;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: 0 0 3px 3px;
            max-height: 350px;
            overflow-y: auto;
            box-shadow: 2px 2px 4px rgb(0 0 0 / 8%), inset 0 0 0 0.6px #d2d2d2;
            padding: 0.75px;
          "
        >
          <a
            class="nav-search fw-500 font-xsss text-grey-500"
            v-bind:href="'/profile/' + item.id"
            >{{ item.full_name }}</a
          >
        </p>

        <!-- post Start  -->
        <span
          style="
            font-weight: bolder;
            font-style: 1.5rem;
            color: rgb(0, 72, 152);
          "
          class="nav-search fw-500 bold"
          >Post</span
        >
        <br />

        <p
          v-for="item in post.slice(0, 5)"
          :key="item.id"
          style="
            margin: -1px 0 0 0;
            font-size: 14px;
            color: #333;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border-radius: 0 0 3px 3px;
            max-height: 350px;
            overflow-y: auto;
            box-shadow: 2px 2px 4px rgb(0 0 0 / 8%), inset 0 0 0 0.6px #d2d2d2;
            padding: 0.75px;
          "
        >
          <a
            class="nav-search fw-500 font-xsss text-grey-500"
            v-bind:href="'/posts/' + item.id"
            >{{ item.title }}</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  Name: "Search",
  data() {
    return {
      firstName: "",

      searchQuery: null,
      allusers: [],
      post: [],
    };
  },

  methods: {
    getSearch() {
      axios
        .post("global-search", {
          search: this.searchQuery,
        })
        .then((result) => {
          this.post = result.data.data.post;
          this.allusers = result.data.data.user;

          console.log("helo", this.post);
        });
    },

    getData() {
      this.users = JSON.parse(localStorage.getItem("UserDetails"));

      axios
        .get("users?search")

        .then(() => {})
        .catch((error) => {
          if (error.response.data.status_code == "401") {
            axios.get("logout");
            localStorage.clear();
            this.$store.dispatch("user", null);
            this.$router.push("/");
            //               this.$swal.fire({
            //   icon: 'warning',
            //   title: 'Oops...',
            //   text: 'Something went wrong Please Login Again!',
            //   confirmButtonColor: '#0048a5',
            //   confirmButtonPadding: '10px'

            // })
          }
        });
    },
  },

  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.allusers.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.full_name.toLowerCase().includes(v));
        });
      } else {
        return this.allusers;
      }
    },
  },

  mounted() {
    this.getData();
  },
};
</script>