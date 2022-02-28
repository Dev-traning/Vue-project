<template>
  <div>
    <table class="table">
      <div v-if="isEmpty">
        <p class="text-center p-5 m-5">No Following</p>
      </div>

      <tr v-for="(followees, itemindex) in follow" v-bind:key="followees.id">
        <td class="d-flex">
          <img
            :src="`${followees.profile_photo}`"
            class="rounded-circle"
            width="55px"
            height="55px"
            alt=""
          />
          <h2 class="m-1 ml-3 text-dark font-xss">
            {{ followees.full_name }}
            <span class="d-block font-xssss text-grey-500"
              >{{ followees.city.name }} {{ followees.state.name }}
              {{ followees.country.name }}</span
            >
          </h2>
        </td>
        <td>
          <b-button
            v-on:click="
              followeesRemove(followees, followees.id, index, itemindex)
            "
            variant="outline-danger"
            class="p-1 rounded-xxxl font-xssss"
            style="float:right; margin:12px 0; height:30px; width:6rem;"
            >Unfollow</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import jQuery from "jquery";
import axios from "axios";
export default {
  Name: "Follower",
  data() {
    return {
      follow: "",
      current_id: "",
    };
  },
  methods: {
    getData() {
      axios.get("user-followees/" + this.current_id).then((result) => {
        this.follow = result.data.data;
        console.warn("followees api run", result);
      });
    },
    async followeesRemove(_, id, index, itemindex) {
      var postid = id;
      const response = axios
        .post("users/unfollow", {
          followee_id: postid,
        })
        .then(() => {
          this.follow.splice(index, 1);
          let count = this.follow.length;
          this.follow[itemindex].total = count;
        });

      console.log(response);
    },
  },
  computed: {
    isEmpty: function() {
      return jQuery.isEmptyObject(this.follow);
    },
  },
  mounted() {
    let path = window.location.href;
    let segment = path.split("/");
    this.current_id = segment[4];
    this.getData();
  },
};
</script>

<style>
.table > :not(caption) > * > {
  padding: 0.3rem 0.3rem;
}
/* 
.table td, .table th{
   padding: 0!important;
} */

.table {
  padding: 0.3rem 0.3rem;
}
</style>
