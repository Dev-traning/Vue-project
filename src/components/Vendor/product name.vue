<template>
  <div>
    <div class="card-body pl-4 w-100 bg-success border-0 d-flex rounded-3">
      <a href="default-settings.html" class="d-inline-block mt-2"
        ><i class="ti-arrow-left font-sm text-white"></i
      ></a>
      <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">Edit Profile</h4>
    </div>
    <div class="card-body p-lg-3 p-4 w-100 border-0">
      <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
        <div class="row mb-2">
          <div class="col-lg-6">
            <div class="mb-2 w-100">
              <input
                type="file"
                name="file"
                id="file"
                class="input-file"
                @change="onFileSelected"
              />
              <label for="file" class="erb-image-wrapper">
                <img
                  :src="`${vendor.photo}`"
                  class="w-100 rounded-3"
                  v-if="vendor.photo"
                />
                <img
                  src="../../assets/blank.png"
                  class="w-100 rounded-3"
                  v-else
                />
                <div style="position: absolute; right: 19px; top: 5px">
                  <i
                    class="feather-edit large-icon me-2 d-block text-white mt-2"
                  ></i>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    class="input-file"
                    @change="onFileSelected"
                  />
                </div>
              </label>
            </div>
          </div>
          <div class="col-lg-6 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Contact person Name</label
              >
              <input type="text" class="form-control" v-model="vendor.name" />
              <label class="mont-font fw-600 font-xsss">Company Name</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.business_name"
              />
              <label class="mont-font fw-600 font-xsss">Email</label>
              <input type="text" class="form-control" v-model="vendor.email" />

              <label class="mont-font fw-600 font-xsss">Address</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.address"
              />

              <label class="mont-font fw-600 font-xsss">Main Office City</label>

              <select
                style="
                  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                  font-size: 1rem;
                "
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                v-model="vendor.native_city_id.id"
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
            <label class="mont-font fw-600 font-xsss">Country</label>
            <select
              style="
                padding: 0.375rem 1.75rem 0.375rem 0.75rem;
                font-size: 1rem;
              "
              class="form-select"
              aria-required="true"
              aria-invalid="false"
              v-model="vendor.country.id"
              @change="getState()"
            >
              <option value="" disabled selected>Country</option>
              <option
                v-for="country in list"
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
                class="form-select"
                aria-required="true"
                aria-invalid="false"
                v-model="vendor.state.id"
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
                v-model="vendor.current_city_id.id"
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
          <div class="col-lg-12 mb-0">
            <label class="mont-font fw-600 font-xsss"
              >List Your Product With Rates</label
            >
          </div>
          <div class="row" v-for="(input, k) in vendor.product_name" :key="k">
            <div class="col-lg-6 mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Product Name"
                v-model="input.name"
              />
            </div>
            <div class="col-lg-4 mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Product Rate"
                v-model="input.rate"
              />
            </div>
            <div class="col-lg-2 mb-2">
              <i
                class="feather-trash-2 font-lg btn-round-sm me-2 p-0 btn btn-light"
                @click="remove(k)"
                v-show="k || (k && vendor.product_name.length > 1)"
              ></i>
              <i
                class="feather-plus font-lg btn-round-sm me-2 p-0 btn btn-light"
                @click="add(k)"
                v-show="k == vendor.product_name.length - 1"
              ></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss"
                >Can Provide Goods How Much Time</label
              >
              <input
                type="text"
                class="form-control"
                v-model="vendor.time_limit"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Remarks</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.comments"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-2">
            <b-button
              type="submit"
              style="background-color: #004898 !important"
              class="font-xsssss fw-600 ps-3 p-3 pe-3 lh-32 mt-1 mb-0 text-uppercase rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"
              >Update</b-button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "VendorEditProfile",

  data() {
    return {
      list: [],
      state: [],
      city: [],

      vendor: {
        name: "",
        email: "",
        mobile_no: "",
        photo: "",
        address: "",
        country_id: "101",
        state_id: "",
        native_city_id: "",
        current_city_id: "",
        gst_no: "",
        comments: "",
        type: "",
        qualification: "",
        experience: "",
        resume: "",
        product_name: [
          {
            name: "",
            rate: "",
          },
        ],
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("token");
    if (!user) {
      this.$router.push({ name: "/home" });
    }
    const result = await axios.get("vendor/profile");

    this.vendor = result.data.data;
    this.getData();
  },
  methods: {
    add() {
      this.vendor.product_name.push([
        {
          name: "",
          rate: "",
        },
      ]);
      console.log(this.vendor.product_name);
    },

    remove(index) {
      this.vendor.product_name.splice(index, 1);
    },

    onFileSelected(event) {
      this.vendor.photo = event.target.files[0];
    },

    async handalSubmit() {
      var itemId = this.$route.params.id;
      const photo = new FormData();
      // photo.append("photo", this.vendor.photo, this.vendor.photo.name);

      photo.append("business_name", this.vendor.business_name);
      photo.append("name", this.vendor.name);
      photo.append("email", this.vendor.email);
      photo.append("address", this.vendor.address);
      photo.append("gst_no", this.vendor.gst_no);
      photo.append("comments", this.vendor.comments);
      photo.append("type", this.vendor.type);
      photo.append("country_id", this.vendor.country.id);
      photo.append("state_id", this.vendor.state.id);
      photo.append("native_city_id", this.vendor.native_city_id.id);
      photo.append("current_city_id", this.vendor.current_city_id.id);
      photo.append("mobile_no", this.vendor.mobile_no);
      photo.append("product_name[0][name]", this.vendor.product_name[0].name);
      photo.append("product_name[0][rate]", this.vendor.product_name[0].rate);

      const response = await axios.post("vendor/vendor/" + itemId, photo, {
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
      });
      console.log(response);
      alert("Record has been stored successfully.");
    },

    getData() {
      // axios.get("countries?is_light=true").then((result) => {
      //   this.list = result.data.data;
      //   console.warn(result);
      //   this.getState();
      //   console.warn("sonu result get country");
      // });

      axios.get(`countries?is_light=1`).then((result) => {
        this.list = result.data.data;
        // console.log("Countries: ", this.list);
        if (this.vendor.country.id) {
          this.getState();
          // console.log("Country Id: ", this.country_id);
        }
      });
    },

    async getState() {
      // axios
      //   .get("states_of_country?is_light=1" + this.vendor.country.id, {
      //     params: { country_id: this.vendor.country.id },
      //   })
      //   .then((result) => {
      //     this.state = result.data.data;
      //     console.warn(result);
      //     this.getCity();
      //     console.warn("sonu result get state");
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
                country_id: this.vendor.country.id,
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

        if (this.vendor.state.id) {
          // console.log("State Id: ", this.state_id);
          this.getCity();
        }
      } catch (error) {
        console.log("Error in Loading States: ", error);
      }
    },
    async getCity() {
      // axios
      //   .get("cities_of_state?is_light=1" + this.vendor.state.id, {
      //     params: { state_id: this.vendor.state.id },
      //   })
      //   .then((result) => {
      //     this.city = result.data.data;
      //     console.warn(result);
      //     console.warn("sonu result get city");
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
                state_id: this.vendor.state.id,
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
};
</script>