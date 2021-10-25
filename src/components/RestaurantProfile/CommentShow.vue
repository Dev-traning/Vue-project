<template>
  <div>
    <div v-for="comentsshows in info" v-bind:key="comentsshows.id">
      {{ comentsshows.id }}ff
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostFeed",

  data() {
    return {
      info: "",
    };
  },
  methods: {
    getData() {
      axios
        .get("posts/comment/20")

        .then((result) => {
          this.info = result.data.data;

          console.warn(result);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>