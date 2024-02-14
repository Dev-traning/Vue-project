<template>
  <body class="color-theme-blue mont-font">
    <div>
      <!-- navigation left -->
      <!-- <Nav /> -->
      <!-- navigation left -->
      <!-- main content -->
      <div class="main-content right-chat-active">
        <div class="middle-sidebar-bottom">
          <div class="middle-sidebar-left">
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="p-0 bg-white border-0 card w-100 shadow-xss rounded-xxl"
                >
                  <div
                    class="p-0 m-3 overflow-hidden card-body h250 rounded-xxl"
                  >
                    <img
                      src="../../assets/images/cover-img.png"
                      alt="image"
                      width="1100"
                    />
                  </div>
                  <div class="p-0 card-body position-relative">
                    <figure
                      class="avatar position-absolute w100 z-index-1"
                      style="top: -40px; left: 30px"
                    >
                      <!-- <img src="../../assets/images/user-12.png" alt="image" class="float-right p-1 bg-white rounded-circle w-100"> -->

                      <!-- <img :src="`${list.profile_photo}`" alt="image" class="float-right p-1 bg-white rounded-circle w-100" v-if="list.profile_photo"  /> -->
                      <div class="col-lg-4">
                        <img
                          :src="`${list.profile_photo}`"
                          width="90px"
                          height="90px"
                          class="overflow-hidden shadow-sm rounded-xxxl"
                          v-if="list.profile_photo"
                        />
                        <img
                          src="../../assets/profile-no-img.png"
                          width="90px"
                          height="90px"
                          class="overflow-hidden shadow-sm rounded-xxxl"
                          v-else
                        />
                      </div>
                    </figure>
                    <h4 class="mt-2 mb-4 fw-700 font-sm mb-lg-0 pl-15">
                      {{ list.full_name }}
                      <button
                        v-if="users.id == opUserId"
                        v-b-modal.edit-user
                        type="button"
                        class="btn text-white font-xsssss fw-700 ps-3 pe-3 p-1 rounded-3 bg-primary d-inline-block m-0 p-0"
                        @click="userData()"
                      >
                        Edit Profile
                      </button>

                      <button
                        v-on:click="followlike(users.id)"
                        v-if="list.relation === 'Follow'"
                        type="button"
                        class="btn text-white font-xsssss fw-700 ps-3 pe-3 p-1 rounded-3 bg-primary d-inline-block m-0 p-0"
                      >
                        Follow
                      </button>

                      <span
                        class="mt-1 mb-3 fw-500 font-xssss text-grey-500 d-block"
                        >{{ list.user_type_text }}</span
                      >
                    </h4>
                  </div>
                  <div
                    class="p-0 mb-0 shadow-none card-body d-block w-100 border-top-xs"
                  >
                    <ul
                      class="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="list-inline-item me-5">
                        <a
                          class="pt-2 pb-3 pl-3 fw-700 font-xsss text-primary-500 ls-1 d-inline-block"
                          data-toggle="tab"
                          >Post<span
                            class="mt-0 text-center d-block font-xsssss fw-500 lh-3 text-info-500"
                            >{{ list.post_count }}</span
                          ></a
                        >
                      </li>
                      <li class="list-inline-item me-5">
                        <router-link :to="'/Profile/' + user.id + '/Follow'"
                          ><b-button
                            variant="link"
                            class="text-decoration-none pt-2 pb-3 pl-3 fw-700 font-xsss text-primary-500 ls-1 d-inline-block m-0"
                            data-toggle="tab"
                            v-b-modal.modal-1
                            >Followers<span
                              class="mt-0 text-center d-block font-xsssss fw-500 lh-3 text-info-500"
                              >{{ list.followers_count }}</span
                            ></b-button
                          ></router-link
                        >
                      </li>
                      <li class="list-inline-item me-5">
                        <router-link :to="'/Profile/' + user.id + '/Following'">
                          <b-button
                            variant="link"
                            class="text-decoration-none pt-2 pb-3 pl-3 fw-700 font-xsss text-primary-500 ls-1 d-inline-block"
                            data-toggle="tab"
                            v-b-modal.modal-1
                            >Following<span
                              class="mt-0 text-center d-block font-xsssss fw-500 lh-3 text-info-500"
                              >{{ list.followings_count }}</span
                            ></b-button
                          ></router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <Followers />
              </div>
              <!-- <div>
  <b-button v-b-modal.modal-scrollable>Launch scrolling modal</b-button>

  <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div> -->

              <!-- <div class="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                        <div class="mt-3 mb-3 border-0 card w-100 shadow-xss rounded-xxl">
                           <div class="p-4 card-body d-block">
                              <h4 class="mb-3 fw-700 font-xsss text-grey-900">About</h4>
                              <p class="mb-0 fw-500 text-grey-500 lh-24 font-xssss">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                           </div>
                           <div class="card-body border-top-xs d-flex">
                              <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                              <h4 class="mt-0 fw-700 text-grey-900 font-xssss">Private <span class="mt-1 d-block font-xssss fw-500 lh-3 text-grey-500">What's up, how are you?</span></h4>
                           </div>
                           <div class="pt-0 card-body d-flex">
                              <i class="feather-eye text-grey-500 me-3 font-lg"></i>
                              <h4 class="mt-0 fw-700 text-grey-900 font-xssss">Visble <span class="mt-1 d-block font-xssss fw-500 lh-3 text-grey-500">Anyone can find you</span></h4>
                           </div>
                           <div class="pt-0 card-body d-flex">
                              <i class="feather-map-pin text-grey-500 me-3 font-lg"></i>
                              <h4 class="mt-1 fw-700 text-grey-900 font-xssss">Flodia, Austia </h4>
                           </div>
                           <div class="pt-0 card-body d-flex">
                              <i class="feather-users text-grey-500 me-3 font-lg"></i>
                              <h4 class="mt-1 fw-700 text-grey-900 font-xssss">Genarel Group</h4>
                           </div>
                        </div>
                     </div> -->
              <div class="col-xl-12 col-xxl-12 col-lg-8">
                <MyPost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      scrollable
      show-close="ftrue"
      title=""
      class="font-xl h700"
      hide-footer
      id="edit-user"
      centered
      ref="modal"
      size="lg"
      height="50rem"
    >
      <button
        @click="close()"
        type="button"
        class="closee"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <h3 class="mt-4 text-primary text-center font-xs fw-600 ms-3">
        Update User Profile
      </h3>

      <div class="p-4 border-0 card-body p-lg-3 w-100">
        <form v-on:submit.prevent="handalSubmit" enctype="multipart/form-data">
          <div class="row">
            <div class="col-lg-6">
              <div class="w-100">
                <input
                  type="file"
                  name="file"
                  id="file"
                  class="input-file"
                  @change="onFileSelected"
                />
                <label for="file" class="erb-image-wrapper">
                  <img
                    :src="list.profile_photo"
                    class="w-100 rounded-3"
                    height="250"
                    width="100"
                    v-if="list.profile_photo"
                  />
                  <img
                    src="../../assets/noim.png"
                    class="w-100 rounded-3"
                    height="250"
                    width="100"
                    v-else
                  />

                  <div style="position: absolute; right: 19px; top: 5px">
                    <i
                      class="mt-2 text-white feather-edit large-icon me-2 d-block"
                    ></i>
                  </div>
                </label>
              </div>
            </div>

            <div class="mb-2 col-lg-6">
              <div class="">
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control border-grey-400 rounded-3"
                  v-model="list.first_name"
                />
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control border-grey-400 rounded-3"
                  v-model="list.last_name"
                />
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >Mobile No</label
                >
                <input
                  type="text"
                  class="form-control border-grey-400 rounded-3"
                  v-model="list.mobile_no"
                />
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >Main Office City</label
                >
                <input
                  type="text"
                  class="form-control border-grey-400 rounded-3"
                  v-model="list.city_id"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label class="mont-font text-grey-400 fw-600 font-xsss"
                >Birth Date</label
              >
              <input
                type="text"
                placeholder="_ _ /_ _ /_ _ _ _"
                name="date"
                class="form-control border-grey-400 rounded-3 single-date-field"
                v-model="list.birth_date"
              />
            </div>
            <div class="col">
              <label class="mont-font text-grey-400 fw-600 font-xsss"
                >Gender</label
              ><br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input mt-1"
                  v-model="list.gender"
                  :value="list.gender"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                />
                <label class="form-check-label" for="inlineRadio1">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input mt-1"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Female</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input mt-1"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label" for="inlineRadio3">Other</label>
              </div>
            </div>
            <div class="col-12">
              <label class="mont-font text-grey-400 fw-600 font-xsss"
                >About</label
              >
              <input
                type="text"
                class="form-control border-grey-400 rounded-3"
                v-model="list.about"
              />
              <label class="mont-font text-grey-400 fw-600 font-xsss"
                >Address</label
              >
              <input
                type="text"
                class="form-control border-grey-400 rounded-3"
                v-model="list.address"
              />
            </div>
          </div>

          <div class="row">
            <div class="mb-2 col-lg-4">
              <label class="mont-font text-grey-400 fw-600 font-xsss"
                >Country</label
              >
              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                v-model="list.country.id"
                @change="getState()"
              >
                <option value="" disabled selected>Country</option>
                <option
                  v-for="country in countryname"
                  :value="country.id"
                  v-bind:key="country.id"
                >
                  {{ country.name }}
                </option>
              </select>
            </div>

            <div class="mb-2 col-lg-4">
              <div class="">
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >State</label
                >
                <select
                  style="
                    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                    font-size: 1rem;
                  "
                  class="form-select"
                  aria-required="true"
                  aria-invalid="false"
                  v-model="list.state.id"
                  @change="getCity()"
                >
                  <option value="" disabled selected>State</option>
                  <option
                    v-for="item in state"
                    :value="item.id"
                    v-bind:key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="mb-2 col-lg-4">
              <div class="">
                <label class="mont-font text-grey-400 fw-600 font-xsss"
                  >City</label
                >
                <select
                  style="
                    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                    font-size: 1rem;
                  "
                  class="form-select"
                  aria-required="true"
                  aria-invalid="false"
                  v-model="list.city.id"
                >
                  <option value="" disabled selected>City</option>
                  <option
                    v-for="item in city"
                    :value="item.id"
                    v-bind:key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="ml-1 mr-1 row">
            <button
              class="text-center text-white btn bg-info fw-500 font-xss"
              @click="$bvModal.hide('edit-user')"
            >
              {{ loading ? "Please Wait..." : "Update" }}
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </body>
</template>
<script>
import axios from "axios";

import { mapGetters } from "vuex";
// import Nav from "../Nav.vue";
import Followers from "../Following/Followers.vue";
import MyPost from "../RestaurantProfile/MyPost.vue";

export default {
  name: "Profile",
  components: {
    //  Nav,
    Followers,
    MyPost,
  },

  data() {
    return {
      list: [
        {
          first_name: "",
          last_name: "",
          mobile_no: "",
          birth_date: "",
          gender: "",
          country: { id: "" },
          state: { id: "" },
          city: { id: "" },
          address: "",
          pin_code: "",
          photo: "",
          male: "",
        },
      ],
      users: "",
      state: "",
      opUserId: "",
      countryname: "",
      city: "",
      url: "",
      loading: "",
      type: ["Manpower,Restaurant"],
    };
  },

  methods: {
    close() {
      this.$refs["modal"].hide();
    },
    onFileSelected(event) {
      this.list.photo = event.target.files[0];
      this.list.profile_photo = window.URL.createObjectURL(
        event.target.files[0]
      );
    },

    getData() {
      this.users = JSON.parse(localStorage.getItem("UserDetails"));

      this.opUserId = this.$route.params.id;

      axios.get("users/" + this.opUserId).then((result) => {
        this.list = result.data.data;
      });
    },
    handalSubmit() {
      const UpdateProfile = new FormData();
      if (this.list.photo) {
        UpdateProfile.append("photo", this.list.photo, this.list.photo.name);
      }

      UpdateProfile.append("first_name", this.list.first_name);
      UpdateProfile.append("last_name", this.list.last_name);
      UpdateProfile.append("mobile_no", this.list.mobile_no);
      UpdateProfile.append("birth_date", this.list.birth_date);
      UpdateProfile.append("gender", this.list.gender);
      UpdateProfile.append("country_id", this.list.country.id);
      UpdateProfile.append("state_id", this.list.state.id);
      UpdateProfile.append("city_id", this.list.city.id);
      UpdateProfile.append("address", this.list.address);
      UpdateProfile.append("pin_code", this.list.pin_code);
      this.loading = true;
      const response = axios
        .post("users/" + this.users.id, UpdateProfile)

        .then((result) => {
          this.list = result.data.data;
          this.list.push();
        });
      setTimeout(
        function (scope) {
          scope.loading = false;
        },
        1000,
        this
      );

      console.log(response);
    },
    country() {
      // axios.get("countries?is_light=true").then((result) => {
      //   this.countryname = result.data.data;

      //   this.getState();
      // });

      axios.get(`countries?is_light=1`).then((result) => {
        this.countryname = result.data.data;
        // console.log("Countries: ", this.list);
        if (this.list.country.id) {
          this.getState();
          // console.log("Country Id: ", this.country_id);
        }
      });
    },
    async getState() {
      // axios
      //   .get("states_of_country?is_light=1", {
      //     params: { country_id: this.list.country.id },
      //   })
      //   .then((result) => {
      //     this.state = result.data.data;

      //     this.getCity();
      //   });

      // console.log("Country Id On Change: ", this.country_id);
      try {
        this.state = [];
        let allStates = [];
        let continueState = true;
        let page = 1;

        while (continueState) {
          const response = await axios.get(
            `rw-states_of_country?page=${page}&is_light=1&per_page=1000`,
            {
              params: {
                country_id: this.list.country.id,
              },
            }
          );
          // console.log("Response of States: ", response);

          const stateData = response.data && response.data.data;

          if (!stateData || stateData.length === 0) {
            // No more countries to fetch, break the loop
            continueState = false;
          } else {
            allStates = [...allStates, ...stateData];
            page++;
          }
        }

        this.state = allStates;

        // console.log("All States: ", this.state);

        if (this.list.state.id) {
          // console.log("State Id: ", this.state_id);
          this.getCity();
        }
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },
    async getCity() {
      // axios
      //   .get("cities_of_state?is_light=1" + this.list.state.id, {
      //     params: { state_id: this.list.state.id },
      //   })
      //   .then((result) => {
      //     this.city = result.data.data;

      //   });

      // console.log("State Id On Change: ", this.state_id);
      try {
        this.city = [];
        let allCities = [];
        let continueCity = true;
        let page = 1;

        while (continueCity) {
          const response = await axios.get(
            `rw-cities_of_state?is_light=1&page=${page}&per_page=1000`,
            {
              params: {
                state_id: this.list.state.id,
              },
            }
          );
          // console.log("Response of Cities: ", response);

          const cityData = response.data && response.data.data;

          if (!cityData || cityData.length === 0) {
            // No more countries to fetch, break the loop
            continueCity = false;
          } else {
            allCities = [...allCities, ...cityData];
            page++;
          }
        }

        this.city = allCities;

        // console.log("All Cities: ", this.city);
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },

    followlike() {
      this.searID = this.$route.params.id;
      axios.post("users/follow", {
        followee_id: this.searID,
      });
      this.list.relation = "Requested";
    },
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
    this.getData(), this.country();
  },

  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style scoped>
.erb-image-wrapper {
  height: 250px;
}
.erb-image-wrapper img {
  height: 100%;
  width: 100%;
  object-position: top;
  object-fit: fill !important;
}
.field-inline-block {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
</style>