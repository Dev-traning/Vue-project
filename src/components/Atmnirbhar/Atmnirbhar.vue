<template>
  <div>
    <div class="main-content right-chat-active">
      <div class="middle-sidebar-left">
        <div class="row">
          <div class="col-sm-12">
            <div class="card-body w-100 bg-success border-0 text-center">
              <h4 class="font-xss text-white fw-600  mb-0 ">
                ATMANIRBHAR
              </h4>
            </div>
            <div class="card w-100 shadow-xss rounded-xxl border-0 p-4">
              <p class="font-xsss fw-500 text-grey-500 text-center mb-2">
                I hereby apply for becoming <b>Atmnirbhar</b>
              </p>

              <p class="font-xs fw-500 text-grey-500 text-center mb-3 ">
                <u>Below are my details</u>
              </p>

              <!-- <b-alert v-model="suuualert" variant="success" dismissible>
                {{ succses }}
              </b-alert>

              <b-alert
                class="p-1"
                v-model="showDismissibleAlert"
                variant="danger"
                dismissible
              >
                {{ errmsg }}
              </b-alert> -->

              <form enctype="multipart/form-data">
                <div class="row">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >User Name
                      </label>
                      <input type="text" class="form-control" v-model="name" />
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Bussiness Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="business_name"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-lg-4 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss">Email</label>
                      <input type="text" class="form-control" v-model="email" />
                    </div>
                  </div>
                  <div class="col-lg-4 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss">Mobile</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mobile_no"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss">GST No.</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="gst_no"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >business Address</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="business_address"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Parmanent Address</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="address"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss">State</label>
                      <select
                        style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;"
                        class="form-select"
                        aria-required="true"
                        aria-invalid="false"
                        v-model="state_id"
                        @change="getCity()"
                      >
                        <option value="" disabled selected>State </option>
                        <option
                          v-for="item in state"
                          :value="item.id"
                          v-bind:key="item.id"
                          >{{ item.name }}</option
                        >
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss">City</label>
                      <select
                        style="padding: 0.375rem 1.75rem 0.375rem 0.75rem; font-size: 1rem;"
                        class="form-select"
                        aria-required="true"
                        aria-invalid="false"
                        v-model="city_id"
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

                <div class="row mt-2">
                  <div class="col-lg-4 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Current Occupation</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="current_occupation"
                      />
                    </div>
                  </div>
                  <div class="col-lg-8 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Net Annual Income INR

                        <input type="checkbox" v-model="is_checked" />

                        <small id="emailHelp" class="text-muted">
                          (I declear that my annual income is less than Rs.3
                          LPA)</small
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="net_annual_income"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Education (Please Specify)</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="education"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Upload Highest Digree Certificate
                      </label>

                      <b-form-file @change="onFileSelected"></b-form-file>
                    </div>
                  </div>
                </div>

                <div class="row ">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Adhar Card Number</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="aadharcard_number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Upload Adhar Card Photo
                      </label>
                      <b-form-file @change="adharpro"></b-form-file>
                    </div>
                  </div>
                </div>

                <div class="row ">
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Pancard Number</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="pancard_number"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 ">
                    <label class="mont-font fw-600 font-xsss"
                      >Upload PanCard</label
                    >
                    <b-form-file @change="pancardselect"></b-form-file>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Sales Manager Code</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="sales_manager_code"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 ">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Upload GST Certificate</label
                      >
                      <b-form-file @change="gstcrt"></b-form-file>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 mt-2 text-center">
                    <b-button
                      @click="convertBoolean"
                      v-b-modal.modal-1
                      type="button"
                      style="background-color: #004898 !important"
                      class=" font-xssss fw-600 ps-3 pe-3 lh-32 mt-1 mb-0 w-100 rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto p-2"
                      >{{ loading ? "PROCESSING..." : "SUBMIT" }}</b-button
                    >
                  </div>
                </div>
              </form>
            </div>
            <div>
              <b-modal
                id="modal-1"
                title="BootstrapVue"
                hide-footer
                hide-header
                size="lg"
              >
                <p class="my-4 mont-font fw-600 font-sm mx-2 uppercase">
                  Summary
                </p>
                <b-alert v-model="suuualert" variant="success">
                  {{ succses }}
                </b-alert>

                <b-alert
                  class="p-1"
                  v-model="showDismissibleAlert"
                  variant="danger"
                >
                  {{ errmsg }}
                </b-alert>
                <div class="row ">
                  <div class="col-lg-6 mx-2">
                    <div class="">
                      <label class="mont-font fw-600 font-xsss"
                        >Enter Number of Coupons:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="number_of_coupon_code"
                        placeholder="Coupon should be in the range of 50 to 500"
                      />
                    </div>
                  </div>
                </div>
                <p class="my-4 mont-font fw-600 font-xsss mx-2">
                  Total Amount to Pay: ₹{{
                    number_of_coupon_code ? number_of_coupon_code * 200 : 0
                  }}
                </p>
                <b-button
                  v-on:click="handalSubmit"
                  class="mx-2 fw-600 mont-font font-xsss"
                  type="button"
                  style="background-color: #004898 !important; margin-bottom: 20px"
                  >Pay Now</b-button
                ></b-modal
              >
              <form
                method="POST"
                class="pl-5 pr-5"
                id="paymentForm"
                :action="payuUrl"
              >
                <input type="hidden" name="key" v-model="mkey" size="64" />
                <input type="hidden" name="txnid" v-model="txnid" size="64" />
                <input
                  type="hidden"
                  name="amount"
                  v-model="amount_pay"
                  size="64"
                />
                <input
                  type="hidden"
                  name="productinfo"
                  v-model="productInfo"
                  size="64"
                />
                <input
                  type="hidden"
                  name="firstname"
                  v-model="first_name"
                  size="64"
                />
                <input
                  type="hidden"
                  name="service_provider"
                  value="payu_paisa"
                  size="64"
                />
                <input type="hidden" name="email" v-model="email" size="64" />
                <input
                  type="hidden"
                  name="phone"
                  v-model="mobile_no"
                  size="64"
                />
                <input
                  type="hidden"
                  name="lastname"
                  v-model="last_name"
                  size="64"
                />
                <input type="hidden" name="surl" v-model="surl" />
                <input type="hidden" name="furl" v-model="furl" />
                <input
                  type="hidden"
                  name="hash"
                  id="hash"
                  v-model="hash"
                  size="64"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  Name: "Atmnirbhar",
  data() {
    return {
      number_of_coupon_code: "",
      check: "",
      errmsg: "",
      state: "",
      city: "",
      valuCo: "",
      name: "",
      email: "",
      mobile_no: "",
      address: "",
      state_id: "",
      city_id: "",
      business_name: "",
      business_address: "",
      current_occupation: "",
      net_annual_income: "",
      country_id: "",
      education: "",
      education_certificate: "",
      pancard_number: "",
      pancard_doc: "",
      aadharcard_number: "",
      aadharcard_doc: "",
      is_checked: false,
      is_checked_boolean: 0,
      gst_no: "",
      gst_no_proof_doc: "",
      showDismissibleAlert: false,
      sales_manager_code: "",
      suuualert: false,
      payuUrl: "https://test.payu.in/_payment",
      mkey: "rjQUPktU",
      saltKey: "e5iIg1jwi8",
      surl: window.location.origin + "/home/User/AtmPaySuc",
      furl: window.location.origin + "/home/User/Fail",

      // payuUrl: "https://secure.payu.in/_payment",
      // mkey: "nxpvv9VZ",
      // saltKey: "3oFxUMtWG2",
      // surl: window.location.origin + "/home/User/Success",
      // furl: window.location.origin + "/home/User/Fail",

      txnid: this.makeid(),
      hash: this.hash,
      first_name: "",
      last_name: "",
      productInfo: "1 Year Plan",
      amount_pay: 10000,
    };
  },

  methods: {
    convertBoolean() {
      this.is_checked_boolean = this.is_checked ? 1 : 0;
    },
    onFileSelected(event) {
      this.education_certificate = event.target.files[0];
    },
    pancardselect(event) {
      this.pancard_doc = event.target.files[0];
    },
    gstcrt(event) {
      this.gst_no_proof_doc = event.target.files[0];
    },

    adharpro(event) {
      this.aadharcard_doc = event.target.files[0];
    },

    // handalSubmit(){

    //     if(this.check==true){
    //        this.valuCo='1'
    //     }else if(this.check==false){
    //        this.valuCo='0'
    //     }

    //     console.log( this.photo)

    // },
    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

    async handalSubmit() {
      const atmnirbhar = new FormData();
      atmnirbhar.append("name", this.name);
      atmnirbhar.append("email", this.email);
      atmnirbhar.append("mobile_no", this.mobile_no);
      atmnirbhar.append("address", this.address);
      atmnirbhar.append("state_id", this.state_id);
      atmnirbhar.append("city_id", this.city_id);
      atmnirbhar.append("business_name", this.business_name);
      atmnirbhar.append("business_address", this.business_address);
      atmnirbhar.append("current_occupation", this.current_occupation);
      atmnirbhar.append("net_annual_income", this.net_annual_income);
      atmnirbhar.append("country_id", "101");
      atmnirbhar.append("education", this.education);
      atmnirbhar.append("education_certificate", this.education_certificate);
      atmnirbhar.append("pancard_number", this.pancard_number);
      atmnirbhar.append("pancard_doc", this.pancard_doc);
      atmnirbhar.append("aadharcard_number", this.aadharcard_number);
      atmnirbhar.append("aadharcard_doc", this.aadharcard_doc);
      atmnirbhar.append("gst_no", this.gst_no);
      atmnirbhar.append("gst_no_proof_doc", this.gst_no_proof_doc);
      atmnirbhar.append("is_checked", this.is_checked_boolean);
      atmnirbhar.append("sales_manager_code", this.sales_manager_code);
      this.showDismissibleAlert = false;
      this.suuualert = false;
      const response = await axios
        .post("dsa/dsas", atmnirbhar)
        .then((response) => {
          this.errmsg = "";
          this.suuualert = true;
          this.succses = response.data.message;

          if (response.data.status_code == 201) {
            let coupon = {
              number_of_coupon_code: this.number_of_coupon_code,
              dsa_plan_id: "2",
            };
            axios
              .post("dsa/plan", coupon)
              .then((response) => {
                console.log(response);
                if (response.data.status_code == 201) {
                  var data =
                    this.mkey +
                    "|" +
                    this.txnid +
                    "|" +
                    this.amount_pay +
                    "|" +
                    this.productInfo +
                    "|" +
                    this.first_name +
                    "|" +
                    this.email +
                    "|||||||||||";
                  var sha512 = require("js-sha512");
                  var salt = this.saltKey;
                  var hash = sha512(data + salt);
                  if (hash) {
                    localStorage.setItem("hash", hash);
                    localStorage.setItem("expireSession", "sesion12dgtdb");
                  }
                  // console.log(hash);
                  // console.log(data);
                  document.getElementById("hash").value = hash;
                  document.getElementById("paymentForm").submit();
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
          // if (response.data.status_code == 201) {
          //   var data =
          //     this.mkey +
          //     "|" +
          //     this.txnid +
          //     "|" +
          //     this.amount_pay +
          //     "|" +
          //     this.productInfo +
          //     "|" +
          //     this.first_name +
          //     "|" +
          //     this.email +
          //     "|||||||||||";
          //   var sha512 = require("js-sha512");
          //   var salt = this.saltKey;
          //   var hash = sha512(data + salt);
          //   if (hash) {
          //     localStorage.setItem("hash", hash);
          //     localStorage.setItem("expireSession", "sesion12dgtdb");
          //   }
          //   // console.log(hash);
          //   // console.log(data);
          //   document.getElementById("hash").value = hash;
          //   document.getElementById("paymentForm").submit();
          // }
        })
        .catch((error) => {
          this.errmsg = "";
          this.succses = "";
          this.errmsg = error.response.data.message;
          console.log(error);
          this.showDismissibleAlert = true;
        });
      console.log(response);
    },
    getCity() {
      axios
        .get("cities_of_state?is_light=1" + this.state_id, {
          params: { state_id: this.state_id },
        })
        .then((result) => {
          this.city = result.data.data;
        });
    },
  },

  mounted() {
    this.usersOldData = JSON.parse(localStorage.getItem("UserDetails"));
    this.state_id = this.usersOldData.state.id;
    this.city_id = this.usersOldData.city.id;
    axios
      .get("states_of_country?is_light=1", {
        params: { country_id: "101" },
      })
      .then((result) => {
        this.state = result.data.data;
        if (this.state_id) {
          this.getCity();
        }
      });
  },
};
</script>

<style scoped>
table td {
  position: relative;
}

table td input {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
}

.myModal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>
