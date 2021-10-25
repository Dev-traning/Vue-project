<template>
  <div>
    <Nav />
    <div
      class="container-sm rounded-xxl p-4 border border-primary"
      style="margin-top: 100px"
    >
      <table v-for="item in list" v-bind:key="item.id">
        <tr>
          <td>
            <p class="text-danger">Post id - {{ item.id }}</p>
          </td>
        </tr>
        <td>
          <p class="text-primary">Like Count {{ item.likes_count }}</p>
          <button class="text-danger" v-on:click="likepost(item.id)">
            Like
          </button>
        </td>
        <tr>
          <td>
            <p class="text-info">Posts Description {{ item.description }}</p>
          </td>
          <td>
            <button class="text-danger" v-on:click="deletePosts(item.id)">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td v-for="item in item.medias" v-bind:key="item.id">
            <img :src="`${item.path}`" width="100"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Nav from "../components/Nav.vue";

export default {
  name: "PostsShow",
  components: { Nav },
  data() {
    return {
      list: [],
      LikeShow: [],
      comment: [],
    };
  },
  methods: {
    getData() {
      axios.get("posts/my-posts").then((result) => {
        this.list = result.data.data;
        console.warn(result);
        console.warn("sonu result get");
      });
    },
    deletePosts(id) {
      axios.delete("posts/" + id).then(() => {
        this.getData();
        alert("Record(s) has been deleted successfully");
      });
    },
    likepost(id) {
      axios.post("posts/like/" + id).then(() => {
        this.getData();
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script> 