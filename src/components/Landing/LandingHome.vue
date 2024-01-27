<template>
  <div style="background-color: white">
    <LandingNavBar />

    <div style="background-color: white">
      <div class="custom-container" style="margin-top: 3.7rem">
        <LandingSlider />
      </div>

      <div class="custom-loading-content" style="margin: 0rem 8rem">
        <LandingContent />
      </div>

      <div class="w-100" style="background-color: rgb(241, 250, 255)">
        <div class="margin-middle-content" style="margin: 0rem 8rem">
          <LandingMiddle />
        </div>
      </div>

      <div class="margin-card-content" style="margin: 0rem 8rem">
        <LandingCard />
      </div>

      <div>
        <LandingCard2 />
      </div>

      <div>
        <LandingFooter />
      </div>
    </div>
  </div>
</template>

<script>
import LandingCard from "./LandingCard.vue";
import LandingCard2 from "./LandingCard2.vue";
import LandingContent from "./LandingContent.vue";
import LandingFooter from "./LandingFooter.vue";
import LandingMiddle from "./LandingMiddle.vue";
import LandingNavBar from "./LandingNavBar.vue";
import LandingSlider from "./LandingSlider.vue";

export default {
  name: "LandingHome",
  components: {
    LandingNavBar,
    LandingSlider,
    LandingContent,
    LandingMiddle,
    LandingCard,
    LandingCard2,
    LandingFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap");

* {
  font-family: "Open Sans", sans-serif;
}

@media (max-width: 768px) {
  .custom-container {
    margin-top: 0 !important;
  }
}

@media (max-width: 889px) {
  .margin-middle-content,
  .margin-card-content {
    margin: 0rem !important;
  }
}

@media (max-width: 1479px) {
  .custom-loading-content {
    margin: 0rem 5rem !important;
  }
}

@media (max-width: 524px) {
  .custom-loading-content {
    margin: 0rem !important;
    padding: 1rem;
  }
}
</style>
