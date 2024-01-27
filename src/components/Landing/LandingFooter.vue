<template>
  <div class="mt-5 custom-main-container" style="margin: 0rem 8rem">
    <div class="d-flex justify-content-between my-5 custom-container">
      <div class="">
        <img src="./assets/Scroll Group 48.png" alt="restroworld-image" />
      </div>

      <div class="d-flex justify-content-center gap-5 custom-margin">
        <h5>Terms & Conditions</h5>
        <h5>Privacy Policy</h5>
        <h5>License</h5>
        <h5>Cookies</h5>
      </div>
    </div>

    <div style="border-bottom: 2px solid rgb(64, 63, 63)"></div>

    <div
      class="d-flex justify-content-between align-items-center mt-5 custom-icon-content"
    >
      <h5>Copyright 2023 @ Restroworld Ui</h5>
      <div class="custom-icon-margin">
        <img src="./assets/Group 2963.png" alt="facebook-image" />
        <img src="./assets/Group 2967.png" alt="linkdin-image" />
        <img src="./assets/Group 2964.png" alt="instagram-image" />
        <img src="./assets/Group 2969.png" alt="youtube-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandginFooter",
};
</script>

<style scoped>
@media (max-width: 999px) {
  .custom-container {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .custom-margin {
    margin-top: 5rem;
  }
}
@media (max-width: 760px) {
  .custom-main-container {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media (max-width: 760px) {
  .custom-margin {
    padding: 0rem 2rem;
    flex-wrap: wrap;
  }
  .custom-icon-content {
    flex-direction: column;
  }
  .custom-icon-margin {
    margin-top: 2rem;
  }
}
</style>
