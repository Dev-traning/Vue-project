<template>
  <div style="background-color: white">
    <div class="custom-container" style="margin-top: 3.7rem">
      <div class="w-100">
        <img
          src="./assets/slider-bg-img.png"
          alt="slide-image"
          class="w-100 custom-slide-image"
          style=""
        />
      </div>

      <div
        class="my-2 d-flex flex-column position-absolute end-70 custom-responsive"
        style="margin: 0rem 8rem; width: 45%; top: 28%"
      >
        <h1
          class="d-flex flex-column fw-bold"
          style="font-size: 1.5rem; letter-spacing: 1.5px"
        >
          <span>
            Restroworld Is The
            <span class="text-primary">First GlobalCommunity</span></span
          >
          <span>For Restaurant Industry.</span>
        </h1>

        <p class="fs-5" style="letter-spacing: 1.5px">
          As The Name Suggests "Restroworld" Is Basically "Restro" "World" Where
          Every Single Individual Who Is Working WithThe Restaurant Industry Can
          Connect With Each Other At Global As Well As Local Level.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSlider",
};
</script>

<style scoped>
@media (max-width: 1199px) {
  .custom-responsive {
    top: 20% !important;
  }
}

@media (max-width: 999px) {
  .custom-responsive {
    top: 15% !important;
  }
  .custom-slide-image {
    height: 23rem;
  }
}

@media (max-width: 768px) {
  .custom-container {
    margin-top: 0 !important;
  }
  .custom-responsive {
    margin: 0 !important;
    padding: 1rem;
    width: 65% !important;
  }
}

@media (max-width: 559px) {
  .custom-responsive {
    width: 100% !important;
  }
}
</style>
