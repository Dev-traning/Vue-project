<template>
  <div id="app" v-cloak>
    <head>
      <meta
        name="keywords"
        content="restaurant software,
restaurant solution,
restaurant jobs,
chef restaurant,
waiter restaurant,
restaurant staff,
restaurant marketing,
social media marketing for restaurant , 
restaurant supply and equipment,
restaurants in surat,
"
      />
    </head>
    <!-- Begin page content -->

    <main>
      <router-view />
    </main>
    <notifications group="foo" class="noti" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  async created() {
    // var toakne = "Bearer "

    const response = await axios.get("user");

    //  this.users = response.data;
    this.$store.dispatch("user", response.data);
  
  },
};
</script>
 
<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-64FRJ0RXXW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-64FRJ0RXXW');
</script> -->
<style>
.vue-notification {
  padding: 100px;
  margin: 0 105px 105px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}

.noti {
  margin-top: 100px;
  margin-right: 20px;
}
</style>
<style>
  main {
    position: relative;
  }

  @media (max-width: 960px) {
    main {
      overflow: hidden;
    }
  }
</style>
 
 


