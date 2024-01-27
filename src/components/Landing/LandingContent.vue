<template>
  <main class="custom-main-container">
    <div class="d-flex justify-content-between gap-5 my-5 w-100 custom-heading">
      <div class="d-flex flex-column w-75" style="color: rgb(75, 75, 75)">
        <h1 class="fw-bold" style="font-size: 1.3rem; letter-spacing: 1.5px">
          Looking For Anything For Your Restaurants ?
        </h1>
        <p class="fs-5" style="letter-spacing: 1.5px">
          Uncover Endless Possibilities For Your Restaurant At Your Fingertips.
          From Premium Ingredients ToTop-Notch Services, We Have Everything You
          Need For Culinary Excellence And Operational Success.
        </p>
      </div>

      <div class="w-25 custom-btn-div">
        <button class="btn btn-danger custom-btn" style="width: 55%">
          EXPLORE NOW >>
        </button>
      </div>
    </div>

    <div
      class="w-100 my-4"
      style="border-bottom: 2px solid rgb(75, 74, 74)"
    ></div>

    <div class="d-flex flex-column">
      <div
        class="d-flex flex-column justify-content-center align-items-center mb-4"
      >
        <h1 class="fw-bold" style="font-size: 1.3rem; letter-spacing: 1.5px">
          <span class="text-danger">Who</span> We Are ?
        </h1>
        <p class="fs-5" style="letter-spacing: 1.5px; color: rgb(75, 75, 75)">
          First Global Restaurant Community For Restaurant Industry.
        </p>
      </div>

      <div class="d-flex flex-column w-75">
        <h3 style="color: rgb(75, 75, 75)">
          <p class="fs-5" style="letter-spacing: 1.5px">
            <span class="fs-4 fw-bolder"> Introduction : </span> Restroworld
            emerges as a solution to address the prevalent challenges in
            restaurant management and communication, targeting a reduction in
            the alarming rate of restaurant closures within their first year of
            operation.
          </p>
        </h3>

        <h3 style="color: rgb(75, 75, 75)">
          <p class="fs-5" style="letter-spacing: 1.5px">
            <span class="fs-4 fw-bolder"> Global Community : </span> Positioning
            itself as the inaugural global community for the Restaurant and
            Hospitality industry, Restroworld introduces three primary
            categories: Restaurant Owners or Managers, Vendors/Suppliers, and
            Manpower (including chefs, captains, and waiters).
          </p>
        </h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "LandingContent",
};
</script>

<style scoped>
@media (max-width: 1370px) {
  .custom-btn {
    width: 75% !important;
  }
}

@media (max-width: 799px) {
  .custom-btn {
    width: 100% !important;
  }

  .custom-main-container {
    margin-top: 6rem !important;
  }
}

@media (max-width: 499px) {
  .custom-heading {
    flex-direction: column;
  }
  .custom-btn-div {
    width: 100% !important;
  }
}
</style>
