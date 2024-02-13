<template>
  <div style="margin-left: 0.8rem" class="w-100 sticky-top">
    <div v-for="i in banners" :key="i.src" class="img-div">
      <a @click="redirect(i.link)" style="cursor: pointer">
        <img :src="i.src" class="img-fluid bg-cover" alt="Image" />
      </a>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "LeftAdBanner",
  data() {
    return {
      banners: [
        {
          src: require("./assets/Ad_Ib.png"),
          link: "http://tinyurl.com/new-Ib",
        },

        {
          src: require("./assets/Ad_Delight.png"),
          link: "http://tinyurl.com/Ib-Delight",
        },

        {
          src: require("./assets/Ad_Ai.png"),
          link: "http://tinyurl.com/Ib-App-Url",
        },

        {
          src: require("./assets/Ad_Ib_Hrms.png"),
          link: "http://tinyurl.com/new-Hrms",
        },

        {
          src: require("./assets/Ad_Ib_Crm.png"),
          link: "http://tinyurl.com/Ib-Crm",
        },
      ],
      single_banner: null,
    };
  },
  methods: {
    redirect(url) {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.img-div {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  margin: 6rem auto;
  transition: box-shadow 0.3s;
}

.img-div img {
  height: 24.5rem;
  transition: transform 0.5s;
}

.img-div:hover {
  box-shadow: 0px 0px 0.5px #bab9b9;
}

.img-div:hover,
.img-div img {
  transform: scale(1.018);
}

@media only screen and (max-width: 992px) {
  .img-div {
    display: none;
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
  .img-div img {
    height: 19rem;
    transition: transform 0.5s;
  }
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
