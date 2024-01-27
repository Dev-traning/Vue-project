<template>
  <main
    class="d-flex align-items-center min-vh-100 py-3 py-md-0"
    style="
      background-color: #fff;
      background-image: url(/img/slide_bg_pattern.cfd7254b.png);
    "
  >
    <LandingNavBar />

    <div class="mt-5"><span>&nbsp;</span></div>

    <div class="container mt-5">
      <div class="card login-card rounded mt-5">
        <div class="row no-gutters ml-1 p-3">
          <div class="col-md-5 shadow-sm">
            <img
              src="../assets/pexels-dids-5360447.jpg"
              alt="spacial -login page wallpaper"
              class="login-card-img"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>

      <div class="howwork">
        <h1 class="h1 mb-5">How Restroworld Work</h1>
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <img
            class="img"
            alt="wallpaper"
            src="../../src/assets/Group 50.png"
          />
        </div>
        <p class="p">
          Billions of Restaurants, Vendors, Chefs, Captains and many more are<br />
          waiting for you at Restroworld.
        </p>
      </div>

      <div class="expolre">
        <label>Discover Restroworld</label>
        <div class="tbl mt-5">
          <!-- <LandingPage/> -->
          <table>
            <tr>
              <th></th>
              <th
                style="
                  background-color: #4d4d4d;
                  color: white;
                  text-align: center;
                  border-radius: 26px;
                "
              >
                Free Registration
              </th>
              <th
                style="
                  background-color: #4d4d4d;
                  color: white;
                  text-align: center;
                  border-radius: 26px;
                "
              >
                Elite Membership
              </th>
            </tr>
            <tr>
              <td>Can do sign-up</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Post on Restroworld social media feed</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Can create jobs and view all the CVs.</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Restaurant job board</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Restaurant vendor directory</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Restaurant manpower directory</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Restaurant franchise opportunities</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
            <tr>
              <td>Buy and sell used restaurant equipment</td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-xmark"
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
              <td style="text-align: center">
                <font-awesome-icon
                  icon="fa-solid fa-circle-check "
                  size="xl"
                  color="#4d4d4d"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <register_component></register_component>

      <!-- what is Restroworld  -->
      <!-- <div class="mt-5"><span>&nbsp;</span></div>


         <div class="mt-5 text-center"  >
            <label style=" color: rgb(34, 34, 34); font-weight: 900 bolder; font-size: 4vh;"  class="  w-200 fw-900" >What Is   </label>  <label style=" color: rgb(34, 34, 34); font-size: 4vh; " class="  w-900 fw-900"> &nbsp;<span class="space1" style="color: #004898 !important">Restro</span><span class="space1" style="color: #c41e16 !important">world</span> ?</label>
       </div>

         <div class="mt-1"><span>&nbsp;</span></div>

        <div style="display: flex;align-items: center; justify-content: center;">
         <div class="card login-card rounded mt-5" style="max-width: 1100px;">

               
            <div class="row  p-4  ">
               <div class="mb-5" >
                  <img   src="../assets/logo-2.jpg" style="height: fit-content;  position: relative;" alt="login" class="login-card-img "/> 
              
               </div>
                  <div class="header text-center mb-4"> <label for="content-title " style="font-size: 2.2vh;" class=" w-900 fw-700">
                  Restroworld: Restroworld is the first global community specially designed for the Restaurant Industry.
               </label></div>
               <div>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color" >
                     The restaurant landscape has witnessed a transformative shift with the advent of Restroworld, a pioneering global platform tailored exclusively for the restaurant industry. In a digital era where connectivity defines success, Restroworld emerges as a game-changer, fostering a thriving ecosystem for both restaurateurs and vendors.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     At its core, Restroworld stands as an unparalleled community, serving as a nexus where every facet of the restaurant industry converges. Whether you’re a seasoned restaurateur seeking innovative solutions or a vendor aiming to expand your clientele, Restroworld offers an expansive marketplace and networking haven.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Imagine a digital agora where restaurateurs explore a myriad of vendors worldwide, encompassing diverse solutions ranging from technology to ingredients, and marketing to equipment. This dynamic marketplace not only offers a treasure trove of options but also cultivates a global synergy, enabling restaurateurs to curate bespoke solutions tailored to their specific needs.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     On the flip side, vendors gain access to an extensive network of restaurants spanning continents. From established chains to cozy local eateries, the platform acts as a gateway for vendors to showcase their offerings to a diverse clientele, fostering growth and collaborations across borders.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Restroworld, in essence, redefines the dynamics of the restaurant industry by amplifying connectivity and efficiency. By amalgamating cutting-edge technology and a user-centric approach, it streamlines operations and catalyzes innovation. Restaurant owners find solace in the ease of discovering, vetting, and engaging with vendors, while vendors revel in the opportunity to showcase their offerings to a global audience.

                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Furthermore, Restroworld transcends being merely a marketplace; it’s a thriving community fostering collaboration, learning, and growth. Through forums, webinars, and knowledge-sharing initiatives, industry experts, aspiring entrepreneurs, and seasoned veterans converge to exchange insights, trends, and best practices, nurturing a culture of continuous improvement.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     User experiences within Restroworld have been nothing short of transformative. Restaurant owners express elation at discovering niche vendors offering unique solutions that transcend geographical boundaries. Testimonials flood in, citing increased efficiency, cost-effectiveness, and elevated customer satisfaction resulting from collaborations initiated on the platform.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Vendors, too, share success stories, recounting how Restroworld catapulted their businesses onto a global stage, allowing them to forge partnerships they’d only dreamed of. The platform’s intuitive interface, robust search functionalities, and personalized recommendations garner praise, making it a go-to destination for businesses seeking growth and innovation.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Beyond the tangible benefits, Restroworld has sparked a paradigm shift in the restaurant industry's ethos. It champions inclusivity, diversity, and sustainability. Restaurants leveraging the platform gravitate towards eco-friendly practices, sourcing locally, and embracing cultural diversity in their menus, all facilitated through connections made on Restroworld.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     Looking ahead, Restroworld envisions an even more interconnected and vibrant ecosystem. Future iterations promise enhanced AI-driven matchmaking, predictive analytics, and augmented reality experiences, further revolutionizing how restaurants discover and engage with vendors. The platform also pledges to champion social causes, supporting initiatives that empower communities and foster positive change.
                  </p>
                  <p style="font: 1em; font-weight:700; " class="bg-light  text-center para-color">
                     In conclusion, Restroworld isn’t just a platform; it's a movement reshaping the restaurant industry. It encapsulates the essence of globalization, collaboration, and progress, propelling businesses towards a future where boundaries cease to exist. As it continues to evolve and innovate, Restroworld stands as a testament to the power of connectivity, community, and visionary entrepreneurship in shaping industries for the better.
                  </p>
               </div>
             </div>
         </div></div>-->

      <div class="mt-1"><span>&nbsp;</span></div>
    </div>
  </main>
</template>
<script>
import LandingNavBar from "./Landing/LandingNavBar.vue";
import register_component from "./register-component.vue";
export default {
  name: "Register",
  components: {
    register_component,
    LandingNavBar,
  },
};
</script>
<style scoped>
.howwork {
  grid-row: 2/3;
  text-align: center;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 60vh;
  margin: 10% 0%;
}

.howwork h1 {
  grid-row: 1/2;
  font-weight: 700;
  font-size: 2.7rem;
  color: #4d4d4d;
}

.howwork img {
  grid-row: 2/3;
  /* position: absolute; */
  height: 370px;
  margin-top: 3%;
  /* margin-left: -20%; */
  width: 100%;
  object-fit: contain;
}

.howwork p {
  grid-row: 3/4;
  font-weight: 600;
  color: #707070;
  margin-top: 0px;
}
.expolre {
  grid-row: 3/4;
  text-align: center;
  margin-top: 10%;
}

.tbl {
  /* display: grid;
  grid-template-columns: 15% 70% 15%;
  width: 100%-20px; */
  font-size: 1rem;
  width: 100%;
}

.expolre label {
  font-weight: 700;
  font-size: 50px;
  color: #4d4d4d;
}

table {
  margin-top: 4rem;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  grid-column: 2/3;
  border-collapse: separate;
  border-spacing: 50px 0;
  font-weight: 400;
}

td,
th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 8px;
}
@media screen and (min-width: 0px) and (max-width: 767.98px) {
  .howwork h1 {
    grid-row: 1/2;
    font-weight: 700;
    font-size: 1.7rem;
    color: #4d4d4d;
  }

  .upper {
    max-width: 92%;
    margin-left: 4%;
    height: fit-content;
    padding-top: 1.5rem;
    border-radius: 10px;
  }

  table {
    margin-top: 4rem;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    /* width: 100%; */
    grid-column: 2/3;
    border-collapse: separate;
    border-spacing: 50px 0;
    font-weight: 400;
    /* max-width: 100%; */
    display: contents;
  }
  .expolre label {
    font-weight: 700;
    font-size: 2rem;
    color: #4d4d4d;
  }
}

@media screen and (min-width: 0px) and (max-width: 400.98px) {
  .upper {
    max-width: 92%;
    margin-left: 4%;
    height: fit-content;
    padding-top: 1.5rem;
    border-radius: 10px;
  }
}
.login-card .form-control {
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
}
.text-reset {
  color: #0048a5 !important;
}
hr {
  margin-top: 0rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgb(0 72 165);
}
.para-color {
  color: rgba(0, 0, 0, 0.693);
  font-family: "Open Sans", sans-serif;
  margin-bottom: 3%;
}
.para-color:last-child {
  margin-bottom: 0%;
}

/*# sourceMappingURL=login.css.map */
</style>
