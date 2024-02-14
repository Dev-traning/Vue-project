<template>
  <div>
    <div v-for="i in banners" :key="i.src" class="img-div">
      <a @click="redirect(i.link)" style="cursor: pointer">
        <img :src="i.src" class="img-fluid bg-cover" alt="Image" />
      </a>
    </div>
  </div>
</template>

    
<script>
export default {
  name: "RightAdBanner",
  data() {
    return {
      banners: [
        {
          src: require("./assets/Ad_Redjinni.png"),
          link: "http://tinyurl.com/new-Redjinni",
        },

        {
          src: require("./assets/Ad_Ibsf.png"),
          link: "http://tinyurl.com/new-Ibsf-1",
        },

        {
          src: require("./assets/Ad_Restroworld.png"),
          link: "http://tinyurl.com/Ib-Restroworld",
        },

        {
          src: require("./assets/Ad_Redprix.png"),
          link: "http://tinyurl.com/Ib-Redprix",
        },

        {
          src: require("./assets/Ad_Red_Restro.png"),
          link: "http://tinyurl.com/Ib-Red-Restro",
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
  margin: 6rem auto;
  overflow: hidden;
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
