<template>
  <div class="my-3 w-100">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1
        class="fw-bold mt-5 text-center"
        style="font-size: 1.3rem; letter-spacing: 1.5px"
      >
        How <span class="text-danger">Restroworld</span> Work
      </h1>
      <p class="fs-5 text-black text-center" style="letter-spacing: 1.5px">
        First Global Restaurant Community For Restaurant Industry.
      </p>
    </div>

    <div
      class="d-flex justify-content-center align-items-center gap-5 custom-flex-wrap"
    >
      <p
        class="text-center custom-para"
        style="width: 45%; color: rgb(75, 75, 75)"
      >
        Restroworld operates as a global community for the restaurant and
        hospitality industry, offering free and elite memberships. It features
        two business partner models: Atmanirbhar for individuals aged 18-30 to
        earn profits by selling elite membership coupons, and Franchise for
        city-exclusive partners with special support. Benefits include
        streamlined hiring for restaurant owners, job opportunities for
        manpower, and business expansion for vendors. The platform fosters
        connections, facilitates transactions, and provides unique opportunities
        for growth within the industry.
      </p>
      <img
        src="./assets/Group 2954.png"
        alt="How-Restroworld-Work
"
        class=""
        style="width: 35%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingMiddle",
};
</script>

<style>
@media (max-width: 890px) {
  .custom-flex-wrap {
    flex-direction: column-reverse;
  }
}

@media (max-width: 699px) {
  .custom-para {
    width: 75% !important;
  }
}
</style>
