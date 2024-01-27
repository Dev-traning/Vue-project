<template>
  <main>
    <div class="main-container" style="height: 25rem">
      <div class="custom-image-phone">
        <img
          src="./assets/Group 2905.png"
          alt="phone-image"
          class="w-100 custom-bg-image"
        />
        <img
          src="./assets/Group 2904.png"
          alt="single phone image"
          class="custom-single-bg-image w-50"
        />
      </div>

      <div
        class="d-flex flex-column w-50 position-relative custom-get-app"
        style="margin: 0rem 8rem; bottom: 22rem"
      >
        <h2 class="fw-bolder">Get The App</h2>
        <p class="fw-bolder fs-5 w-50" style="color: rgb(75, 75, 75)">
          Join Our Community Of Over 1K Plus Restaurants And VendorsDownload The
          Restroworld App For Android Today!
        </p>
        <img
          src="./assets/google-play-badge.png"
          alt="google-play-badge"
          class="custom-image"
          style="height: 7rem; width: 15%; object-fit: fill"
        />
      </div>
    </div>

    <div
      class="mt-5 d-flex justify-content-center align-items-center custom-flex-sm-wrap"
      style="margin: 0rem 8rem"
    >
      <div
        class="w-50 d-flex justify-content-center align-items-center flex-column custom-content-width"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie-2.jpg"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
          style="height: 23rem"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          Furthermore, Restroworld transcends being merely a marketplace; it’s a
          thriving community fostering collaboration, learning, and growth.
          Through forums, webinars, and knowledge-sharing initiatives, industry
          experts, aspiring entrepreneurs, and seasoned veterans converge to
          exchange insights, trends, and best practices, nurturing a culture of
          continuous improvement.
        </p>
      </div>

      <div
        class="w-50 d-flex justify-content-center align-items-center flex-column mx-3 custom-content-width"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie-1.jpg"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
          style="height: 23rem"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          On the flip side, vendors gain access to an extensive network of
          restaurants spanning continents. From established chains to cozy local
          eateries, the platform acts as a gateway for vendors to showcase their
          offerings to a diverse clientele, fostering growth and collaborations
          across borders. The platform also pledges to champion social causes,
          supporting initiatives that empower communities and foster positive
          change.
        </p>
      </div>

      <div
        class="w-50 d-flex justify-content-center align-items-center flex-column custom-content-width"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie-2.jpg"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
          style="height: 23rem"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          User experiences within Restroworld have been nothing short of
          transformative. Restaurant owners express elation at discovering niche
          vendors offering unique solutions that transcend geographical
          boundaries. Testimonials flood in, citing increased efficiency,
          cost-effectiveness, and elevated customer satisfaction resulting from
          collaborations initiated on the platform.
        </p>
      </div>
    </div>

    <div
      class="d-flex justify-content-center flex-column align-items-center mt-5"
      style="background-color: rgb(50, 61, 119)"
    >
      <h1 class="text-white text-center fw-bold my-3">
        Restroworld Is Waiting For You
      </h1>
      <p class="fw-bolder fs-5 text-white my-3 text-center">
        "Join The Culinary Revolution: Explore Opportunities, Connect With
        Experts, And Elevate Your Restaurant Journey With Restroworld!"
      </p>
      <button
        type="button"
        class="btn btn-light p-2 my-5 fw-bold custom-btn"
        style="width: 15%; color: rgb(50, 61, 119)"
      >
        Sign Up
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "LandingCard",
};
</script>

<style scoped>
@media (max-width: 520px) {
  .custom-btn {
    width: 35% !important;
  }
}

@media (max-width: 699px) {
  .custom-bg-image {
    display: none;
  }

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 35rem !important;
    margin-bottom: 2rem;
  }

  .custom-image-phone {
    display: flex;
    justify-content: center;
  }
  .custom-get-app {
    top: 5rem;
  }
}

@media (min-width: 699px) {
  .custom-single-bg-image {
    display: none;
  }
}

@media (max-width: 999px) {
  .custom-flex-sm-wrap {
    flex-wrap: wrap;
    margin: 0 !important;
  }
  .custom-content-width {
    width: 75% !important;
  }
}

@media (max-width: 499px) {
  .custom-content-width {
    width: 75% !important;
  }
}

@media (max-width: 1299px) {
  .custom-get-app {
    bottom: 15rem !important;
  }
  .custom-get-app p {
    width: 75% !important;
  }

  .custom-image {
    width: 25% !important;
    height: 4rem !important;
    position: relative;
  }
}

@media (max-width: 899px) {
  .main-container {
    margin-top: 6rem !important;
  }
}
</style>
