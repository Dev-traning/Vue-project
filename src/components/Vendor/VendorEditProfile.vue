<template>
  <div class="rounded-lg shadow-md mt-2">
    <div class="card-body w-100 bg-success border-0 d-flex rounded-3">
      <h4 class="font-xss text-white fw-600 mb-0">Update Profile</h4>
    </div>
    <div class="card-body p-lg-3 p-4 w-100 border-0">
      <b-alert v-model="suuualert" variant="success" dismissible>
        {{ succses }}
      </b-alert>

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        {{ errmsg }}
      </b-alert>
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
              <label for="file" class=" erb-image-wrapper ">
                <!-- <img :src="`${vendor.photo}`" class="w-100 rounded-3" v-if="vendor.photo"/>
                         <img src="../../assets/blank.png" class="w-100 rounded-3" v-else/>  -->

                <div v-if="!imurl">
                  <img
                    :src="vendor.photo"
                    class="w-100 rounded-3"
                    v-if="vendor.photo"
                  />
                  <img
                    src="../../assets/blank.png"
                    class="w-100 rounded-3"
                    v-else
                  />
                </div>
                <img :src="imurl" class="w-100 rounded-3" v-else-if="imurl" />
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

              <label class="mont-font fw-600 font-xsss"
                >Business Category</label
              >
              <input
                type="text"
                class="form-control"
                v-model="vendor.business_category"
              />

              <label class="mont-font fw-600 font-xsss">Mobile No</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.mobile_no"
              />

              <label class="mont-font fw-600 font-xsss">Company Name</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.business_name"
              />

              <label class="mont-font fw-600 font-xsss">Email</label>
              <input type="text" class="form-control" v-model="vendor.email" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-2">
            <label class="mont-font fw-600 font-xsss">Address</label>
            <input type="text" class="form-control" v-model="vendor.address" />
          </div>

          <div class="col-lg-6 mb-2">
            <label class="mont-font fw-600 font-xsss">Main Office City</label>
            <select
              style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; "
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
                >{{ item.name }}</option
              >
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 mb-2">
            <label class="mont-font fw-600 font-xsss">Country</label>
            <select
              style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; "
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
                >{{ country.name }}</option
              >
            </select>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">State</label>
              <select
                style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; "
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
                  >{{ item.name }}</option
                >
              </select>
            </div>
          </div>
          <div class="col-lg-4 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">Current City</label>
              <select
                style=" padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem; "
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
                  >{{ item.name }}</option
                >
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
          <!-- <div class="row" v-for="(input,k, index) in vendor.product_name" :key="k==index"> <input type="text" v-model="input.name"/> </div>-->
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
              <label class="mont-font fw-600 font-xsss">About You</label>
              <input
                type="text"
                class="form-control"
                v-model="vendor.comments"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="">
              <label class="mont-font fw-600 font-xsss">GST No.</label>
              <input
                type="text"
                placeholder="Optional"
                class="form-control"
                v-model="vendor.gst_no"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-2">
            <b-button
              type="submit"
              style="background-color: #004898 !important"
              class=" font-xsssss fw-600 ps-3    lh-32 mt-1 mb-0 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"
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
      imurl: "",
      errmsg: "",
      succses: "",
      suuualert: false,
      showDismissibleAlert: false,

      vendor: {
        name: "",
        email: "",
        business_category: "",
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
            name: ["sonu"],
            rate: [],
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
    if (result.data.data.product_name == false) {
      result.data.data.product_name = [
        {
          name: null,
          rate: null,
        },
      ];
    }

    this.vendor = result.data.data;
    this.getData();
  },
  methods: {
    add() {
      this.vendor.product_name.push([
        {
          name: [],
          rate: [],
        },
      ]);
      console.log("print here", this.vendor.product_name);
    },

    remove(index) {
      this.vendor.product_name.splice(index, 1);
    },

    onFileSelected(event) {
      this.vendor.photo = event.target.files[0];
      this.imurl = window.URL.createObjectURL(event.target.files[0]);
    },

    async handalSubmit() {
      var itemId = this.$route.params.id;
      const photo = new FormData();
      if (this.vendor.photo.name) {
        photo.append("photo", this.vendor.photo, this.vendor.photo.name);
      }

      photo.append("business_name", this.vendor.business_name);
      photo.append("business_category", this.vendor.business_category);
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
      // photo.append(products)
      //  photo.append("product_name[0][name]", this.vendor.product_name[0].name);

      //  var products = {};
      this.vendor.product_name.forEach((value, index) => {
        var myProd = `product_name[${index}][name]`;
        var myRates = `product_name[${index}][rate]`;
        var value1 = value.name; //this.vendor.product_name[i].name
        var value2 = value.rate;

        photo.append(myProd, value1);
        photo.append(myRates, value2);
        //  photo[myProd] = value1
        //  photo[myRates] = value2
      });

      const response = await axios
        .post("vendor/vendor/" + itemId, photo, {
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
        })
        .catch((error) => {
          this.errmsg = error.response.data.message;
          console.log(error);
          this.showDismissibleAlert = true;
        });

      console.log(response);
    },

    getData() {
      axios.get("countries?is_light=true").then((result) => {
        this.list = result.data.data;
        console.warn(result);
        this.getState();
      });
    },

    getState() {
      axios
        .get("states_of_country?is_light=1" + this.vendor.country.id, {
          params: { country_id: this.vendor.country.id },
        })
        .then((result) => {
          this.state = result.data.data;
          console.warn(result);
          this.getCity();
        });
    },
    getCity() {
      axios
        .get("cities_of_state?is_light=1" + this.vendor.state.id, {
          params: { state_id: this.vendor.state.id },
        })
        .then((result) => {
          this.city = result.data.data;
          console.warn(result);
        });
    },
  },
};
</script>
