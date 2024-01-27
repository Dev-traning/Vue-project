<template>
  <main class="w-100">
    <div
      class="mt-5 d-flex justify-content-center align-items-center custom-flex-sm-wrap"
    >
      <div
        class="custom-width w-50 d-flex justify-content-center align-items-center flex-column"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie-2.png"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          The restaurant landscape has witnessed a transformative shift with the
          advent of Restroworld, a pioneering global platform tailored
          exclusively for the restaurant industry. In a digital era where
          connectivity defines success, Restroworld emerges as a game-changer,
          fostering a thriving ecosystem for both restaurateurs and vendors.In
          conclusion, Restroworld isn’t just a platform; it's a movement
          reshaping the restaurant industry. It encapsulates the essence of
          globalization, collaboration, and progress, propelling businesses.
        </p>
      </div>

      <div
        class="custom-width w-50 d-flex justify-content-center align-items-center flex-column mx-3"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie-1.png"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          The restaurant landscape has witnessed a transformative shift with the
          advent of Restroworld, a pioneering global platform tailored
          exclusively for the restaurant industry. In a digital era where
          connectivity defines success, Restroworld emerges as a game-changer,
          fostering a thriving ecosystem for both restaurateurs and vendors.In
          conclusion, Restroworld isn’t just a platform; it's a movement
          reshaping the restaurant industry. It encapsulates the essence of
          globalization, collaboration, and progress, propelling businesses.
        </p>
      </div>

      <div
        class="custom-width w-50 d-flex justify-content-center align-items-center flex-column"
      >
        <img
          src="./assets/medium-shot-smiley-woman-taking-selfie.png"
          alt="medium-shot-smiley-woman-taking-selfie"
          class="w-100"
        />

        <p class="text-start" style="color: rgb(75, 75, 75)">
          The restaurant landscape has witnessed a transformative shift with the
          advent of Restroworld, a pioneering global platform tailored
          exclusively for the restaurant industry. In a digital era where
          connectivity defines success, Restroworld emerges as a game-changer,
          fostering a thriving ecosystem for both restaurateurs and vendors.In
          conclusion, Restroworld isn’t just a platform; it's a movement
          reshaping the restaurant industry. It encapsulates the essence of
          globalization, collaboration, and progress, propelling businesses.
        </p>
      </div>
    </div>

    <div class="d-flex mt-5 w-100 justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <h1
          class="fw-bold text-center"
          style="font-size: 1.3rem; letter-spacing: 1.5px"
        >
          <span class="text-danger">Benefits Of</span> Restroworld Platform
        </h1>
        <p class="text-center" style="color: rgb(75, 75, 75)">
          First Global Restaurant Community For Restaurant Industry.
        </p>
      </div>
    </div>

    <div class="custom-padding">
      <div class="my-5">
        <h3 class="fw-bolder">For Restaurant Owners:</h3>

        <div class="my-5">
          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Efficient Hiring :</span> Simplifies
            the hiring process by allowing restaurant owners to find and hire
            suitable candidates through the platform.
          </p>

          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Vendor Connections :</span> Connects
            restaurant owners with nearby vendors, reducing transportation costs
            and time, and contributing to a lower carbon footprint.
          </p>

          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Business Opportunities :</span>
            Provides a platform for buying, selling, and franchising
            restaurants, expanding opportunities for business growth.
          </p>

          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Marketing Platform :</span> Allows
            restaurant owners to showcase and market their establishments on
            Restroworld.
          </p>
        </div>
      </div>

      <div class="d-flex flex-column my-5">
        <h3 class="fw-bolder">For Manpower (Chefs, Captains, Waiters, etc.)</h3>
        <div class="my-5">
          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Swift Job Search:</span> Enables job
            seekers to upload resumes, get noticed, and swiftly apply for
            suitable jobs within the restaurant industry.
          </p>
          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Job Listings:</span> Displays a
            comprehensive job list, providing individuals with various job
            options to apply for.
          </p>
        </div>
      </div>

      <div class="d-flex flex-column mt-5">
        <h3 class="fw-bolder">For Vendors/Suppliers:</h3>
        <div class="my-5">
          <p class="fw-bolder fs-5" style="color: rgb(75, 75, 75)">
            <span class="text-black fs-3">Business Expansion:</span>
            Facilitates vendors in finding restaurants to satisfy their needs,
            contributing to the expansion of their businesses.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LandingCard",
};
</script>

<style scoped>
@media (max-width: 999px) {
  .custom-flex-sm-wrap {
    flex-direction: column !important;
  }
  .custom-width {
    width: 75% !important;
  }

  .custom-width p {
    padding: 1rem;
  }
  .custom-padding {
    padding: 1rem;
  }
}

@media (max-width: 799px) {
  .custom-width {
    width: 100% !important;
  }
}
</style>
