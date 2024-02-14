<template>
  <div>
    <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
      <h4 class="font-xs text-white fw-600 ms-4 mb-0">Sale My Restaurant</h4>
    </div>
    <div
      class="card-body p-lg-3 p-4 w-100 border-0"
      v-if="is_subscribed === user.is_subscribed"
    >
      <b-alert v-model="suuualert" variant="success" dismissible>
        {{ succses }}
      </b-alert>

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ errmsg }}
      </b-alert>

      <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Category/Type</label>

              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                v-model="smrData.restaurant_type_id"
                class="form-select"
                aria-required="true"
                aria-invalid="false"
              >
                <option value="" disabled selected>Select</option>
                <option
                  v-for="item in typs"
                  :value="item.id"
                  v-bind:key="item.id"
                >
                  {{ item.type }}
                </option>
              </select>
            </div>
            <div v-if="smrData.restaurant_type_id == 1">
              <label class="mont-font fw-600 font-xsss"
                >Please Type Other</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.restaurant_type"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-2">
            <label class="mont-font fw-600 font-xsss"
              >Country{{ smrData.country.id }}</label
            >
            <select
              style="
                padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                font-size: 1rem;
              "
              class="form-select"
              aria-required="true"
              aria-invalid="false"
              v-model="smrData.country.id"
              @change="getState()"
            >
              <option value="" disabled selected>Country</option>
              <option
                v-for="country in countrys"
                :value="country.id"
                v-bind:key="country.id"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">State</label>
              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                v-model="smrData.state.id"
                class="form-select"
                aria-required="true"
                aria-invalid="false"
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
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Current City</label>
              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                v-model="smrData.city.id"
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
        <div class="row">
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Opening Since</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.operate_since"
              />
            </div>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Runnig Or Closed</label
              ><br />
              <!-- <input type="text" class="form-control" v-model="smrData.is_closed"> -->

              <div class="form-check form-check-inline mt-2">
                <input
                  class="form-check-input"
                  v-model="smrData.is_closed"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="0"
                />
                <label class="form-check-label" for="inlineRadio1">No</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  v-model="smrData.is_closed"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="1"
                />
                <label class="form-check-label" for="inlineRadio2">Yes</label>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Turnover P.M</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.turnover"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Cuurrent Cost P.M</label
              >
              <input type="text" class="form-control" v-model="smrData.cost" />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <label class="mont-font fw-600 font-xsss">Profit Per Month</label>
            <input type="text" class="form-control" v-model="smrData.profit" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Expected Price</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.expected_price"
              />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Price Will include List</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.price_include_list"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Contact Person name</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_name"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Mobile No.</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_phone"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Email Id</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_email"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Upload Image</label>
              <b-form-group label-cols-sm="0" label-size="sm">
                <b-form-file
                  id="file-small"
                  @change="onFileSelected"
                ></b-form-file>
              </b-form-group>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <router-link
              type="button"
              to="/SellrestEdit"
              style="background-color: rgb(136 143 150 / 88%) !important"
              class="font-xsssss fw-600 ps-3 pe-3 lh-32 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
              >Cancel</router-link
            >
            <b-button
              type="submit"
              style="background-color: #004898 !important"
              class="font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
              >Save
            </b-button>
          </div>
        </div>
      </form>
    </div>
    <div class="card-body p-lg-3 p-4 w-100 border-0" v-else>
      <b-alert show variant="warning"
        >You need to subscribe to acceess this facility</b-alert
      >

      <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
        <div class="row">
          <!-- <div class="col-lg-12 mb-2">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Restarant Name</label>
            <input type="text" class="form-control" v-model="smrData.restaurant.contact_name">
         </div>
      </div> -->
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Category/Type</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.restaurant_type_id"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-2">
            <label class="mont-font fw-600 font-xsss">Country</label>
            <select
              style="
                padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                font-size: 1rem;
              "
              class="form-select"
              aria-required="true"
              aria-invalid="false"
              v-model="smrData.country_id"
              @change="getState()"
              disabled
            >
              <option value="" disabled selected>Country</option>
              <option
                v-for="country in countrys"
                :value="country.id"
                v-bind:key="country.id"
              >
                {{ country.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">State</label>
              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                v-model="smrData.state.id"
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                @change="getCity()"
                disabled
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
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Current City</label>
              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                v-model="smrData.city.id"
                disabled
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
        <div class="row">
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Opening Since</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.operate_since"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-4 mb-2">
            <!-- <div class="">
            <label class="mont-font fw-600 font-xsss">Runnig Or Closed</label>
            <input type="text" class="form-control" v-model="smrData.is_closed" disabled>
         </div> -->

            <div class="">
              <label class="mont-font fw-600 font-xsss">Select</label><br />

              <div class="form-check form-check-inline mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="0"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Per Month</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="1"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Per Year</label
                >
              </div>
              <!-- <input type="text" class="form-control" v-model="per"> -->
              <!-- <b-form-checkbox class="p-0 m-0 " v-model="per"    value="1"  unchecked-value="0" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Per Month /Year</b-form-checkbox> -->
            </div>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Turnover P.M</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.turnover"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Cuurrent Cost P.M</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.cost"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <label class="mont-font fw-600 font-xsss">Profit Per Month</label>
            <input
              type="text"
              class="form-control"
              v-model="smrData.profit"
              disabled
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Expected Price</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.expected_price"
                disabled
              />
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Price Will include List</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.price_include_list"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Contact Person name</label
              >
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_name"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Mobile No.</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_phone"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Email Id</label>
              <input
                type="text"
                class="form-control"
                v-model="smrData.contact_email"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Upload Image</label>
              <b-form-group label-cols-sm="0" label-size="sm">
                <b-form-file
                  id="file-small"
                  @change="uploadresume"
                  disabled
                ></b-form-file>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 mt-0">
            <b-button
              type="button"
              style="background-color: rgb(136 143 150 / 88%) !important"
              class="font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
              >Cancel</b-button
            >
            <b-button
              type="submit"
              style="background-color: #004898 !important"
              class="font-xsssss fw-600 ps-3 p-2 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto float-right"
              >Save
            </b-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "EditProfile",

  data() {
    return {
      is_subscribed: true,
      typs: "",
      countrys: "",
      state: "",
      city: "",
      smrData: {
        restaurant_type_id: "",
        restaurant_type: "",
        operate_since: "",
        country_id: "",
        state_id: "",
        city_id: "",
        turnover: "",
        cost: "",
        profit: "",
        expected_price: "",
        price_include_list: "",
        contact_name: "",
        contact_phone: "",
        contact_email: "",
        is_closed: "",
      },
      images: "",
      errmsg: "",
      succses: "",
      suuualert: false,
      showDismissibleAlert: false,
    };
  },
  async mounted() {
    axios.get("restaurants/my-smr").then((result) => {
      this.smrData = result.data.data;
      this.GetId = result.data.data.id;
    });
    this.restaType();

    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
    this.getData();
  },
  methods: {
    onFileSelected(event) {
      this.smrData.photo = event.target.files[0];
    },

    async handalSubmit() {
      if (this.smrData.restaurant_type_id == 1) {
        this.dataOld = this.smrData.restaurant_type;
      } else {
        this.dataOld = "";
      }
      const photo = new FormData();
      if (this.smrData.photo) {
        photo.append("images[0]", this.smrData.photo, this.smrData.photo.name);
      }
      photo.append("restaurant_type_id", this.smrData.restaurant_type_id);
      photo.append("restaurant_type", this.dataOld);
      photo.append("operate_since", this.smrData.operate_since);
      photo.append("country_id", this.smrData.country.id);
      photo.append("state_id", this.smrData.state.id);
      photo.append("city_id", this.smrData.city.id);
      photo.append("turnover", this.smrData.turnover);
      photo.append("cost", this.smrData.cost);
      photo.append("profit", this.smrData.profit);
      photo.append("expected_price", this.smrData.expected_price);
      photo.append("price_include_list", this.smrData.price_include_list);
      photo.append("contact_name", this.smrData.contact_name);
      photo.append("contact_phone", this.smrData.contact_phone);
      photo.append("contact_email", this.smrData.contact_email);
      photo.append("is_closed", this.smrData.is_closed);

      const response = await axios
        .post("restaurants/sell-my-restaurant/" + this.GetId, photo, {
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },

          header: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.succses = response.data.message;
          this.suuualert = true;
          this.$router.push("/SellrestEdit");
        })
        .catch((error) => {
          this.errmsg = error.response.data.message;
          console.log(error);
          this.showDismissibleAlert = true;
        });
      console.log(response);
    },

    restaType() {
      axios.get("admin/restaurantType").then((result) => {
        this.typs = result.data.data;

        console.warn("restaurantType", result);
      });
    },

    getData() {
      // axios.get("countries?is_light=true").then((result) => {
      //   this.countrys = result.data.data;
      //   console.warn("sonu result get country", result);
      //   this.getState();
      // });

      axios.get(`countries?is_light=1`).then((result) => {
        this.countrys = result.data.data;
        // console.log("Countries: ", this.list);
        if (this.smrData.country.id) {
          this.getState();
          // console.log("Country Id: ", this.country_id);
        }
      });
    },

    async getState() {
      // axios
      //   .get("states_of_country?is_light=1" + this.smrData.country.id, {
      //     params: { country_id: this.smrData.country.id },
      //   })
      //   .then((result) => {
      //     this.state = result.data.data;
      //     console.warn("sonu result get state", result);
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
                country_id: this.smrData.country.id,
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

        if (this.smrData.state.id) {
          // console.log("State Id: ", this.state_id);
          this.getCity();
        }
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },
    async getCity() {
      // axios
      //   .get("cities_of_state?is_light=1" + this.smrData.state.id, {
      //     params: { state_id: this.smrData.state.id },
      //   })
      //   .then((result) => {
      //     this.city = result.data.data;
      //     console.warn("sonu result get city", result);
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
                state_id: this.smrData.state.id,
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
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>