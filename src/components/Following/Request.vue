<template>
  <div>
    <table class="table ">
      <div v-if="isEmpty">
        <p class="text-center p-5 m-5">No Request</p>
      </div>
      <tr v-for="(requests, itemindex) in request" v-bind:key="requests.id">
        <td class="d-flex">
          <img
            :src="`${requests.profile_photo}`"
            class="rounded-circle"
            width="55px"
            height="55px"
            v-if="requests.profile_photo"
          />
          <img
            src="../../assets/profile-no-img.png"
            class="rounded-circle"
            width="55px"
            height="55px"
            v-else
          />
          <h2 class="m-1 ml-3 text-dark font-xss">
            {{ requests.full_name }}
            <span class="d-block font-xssss text-grey-500"
              >{{ requests.city.name }} {{ requests.state.name }}
              {{ requests.country.name }}</span
            >
          </h2>
        </td>
        <td>
          <button
            v-on:click="requestareject(requests, requests.id, index, itemindex)"
            style=""
            class="p-1 text-white border-0 rounded-xxxl font-xssss bg-danger btn-request"
          >
            Remove
          </button>
          <button
            v-on:click="requestaccept(requests, requests.id, index, itemindex)"
            style="background-color:green"
            class="p-1 text-white border-0 rounded-xxxl font-xssss btn-request"
          >
            Accept
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import jQuery from "jquery";
import axios from "axios";
export default {
  Name: "Request",
  data() {
    return {
      request: "",
    };
  },
  methods: {
    getData() {
      axios.get("users/my-follow-requests").then((result) => {
        this.request = result.data.data;
        console.warn("requests api run", result);
      });
    },
    async requestaccept(_, id, index, itemindex) {
      var postid = id;

      const response = axios
        .post("users/follow-action-type", {
          follower_id: postid,
          action_type: "1",
        })
        .then(() => {
          this.request.splice(index, 1);
          let count = this.request.length;
          this.request[itemindex].total = count;
        });

      console.log(response);
    },
    async requestareject(_, id, index, itemindex) {
      var postid = id;
      const response = axios
        .post("users/follow-action-type", {
          follower_id: postid,
          action_type: "2",
        })
        .then(() => {
          this.request.splice(index, 1);
          let count = this.request.length;
          this.request[itemindex].total = count;
        });
      console.log(response);
    },
  },

  mounted() {
    this.getData();
  },

  computed: {
    isEmpty: function() {
      return jQuery.isEmptyObject(this.request);
    },
  },
};
</script>
