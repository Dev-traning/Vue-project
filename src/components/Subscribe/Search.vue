<template>
  <div
    style="background-color: hsl(32deg 100% 50%);"
    class="card w-100 shadow-md rounded-lg border-0 ps-4   pe-4   mb-3 subscribe"
  >
    <div class="row">
      <div class="col-8">
        <p class="mb-0 mt-1 text-white font-xsss fw-500 ">
          Coupon Code: REST500
        </p>
      </div>
      <div class="col-4 text-right">
        <a
          v-b-modal.subscribe
          class="font-xsss w-100 fw-500 text-center lh-28 mt-1 mb-1 rounded-3 ls-2 bg-suscribe d-inline-block text-white me-1 ms-auto"
          >Make this an Elite Account</a
        >
      </div>
      <div>
        <!-- no-close-on-backdrop -->
        <b-modal
          scrollable
          show-close="ftrue"
          hide-footer
          id="subscribe"
          centered
          ref="modal"
          size="lg"
        >
          <div class="modal-header">
            <button
              @click="paymentCancel()"
              type="button"
              class="closee"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="text-center">
            <b-alert show variant="warning" v-if="failMsg" class="p-1">{{
              failMsg
            }}</b-alert>

            <a href="#">
              <h3
                style="color: #004898;   margin-left: 4px;  font-weight: bold;"
                class="pl-4 pr-4 pb-2 pt-2"
              >
                <u>Make this An Elite Account</u>
              </h3>
            </a>
          </div>
          <form ref="form" class="pl-5 pr-5">
            <div class="row">
              <div class="col">
                <b-form-group
                  class=" mb-2 mt-0"
                  label="First Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                    id="name-input"
                    v-model="user.first_name"
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group
                  class=" mb-2 mt-0"
                  label="Last Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                    id="name-input"
                    v-model="user.last_name"
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <b-form-group
                  class=" mb-2 mt-0"
                  label="Mobile No"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                    id="name-input"
                    v-model="user.mobile_no"
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col">
                <b-form-group
                  class=" mb-2 mt-0"
                  label="Email"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                    id="name-input"
                    v-model="users.email"
                    autocomplete="off"
                    readonly
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <b-form-group
                  class=" mb-2 mt-0"
                  label="Address"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    placeholder="Optinal"
                    class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                    id="name-input"
                    v-model="user.address"
                    autocomplete="off"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-group
              class=" mb-2 mt-0"
              label="GST No."
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                placeholder="Optinal"
                class="rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0"
                id="name-input"
                v-model="gst"
                autocomplete="off"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="mb-2 mt-0"
              label="Plan"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <input
                type="text"
                class="form-control"
                placeholder="For 1 Year (Rs. 999.00/-)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                disabled
              />
            </b-form-group>
            <a v-on:click="isHidden = !isHidden" class="btn p-0 m-0">
              <u v-if="!couponerr">I have a promo code</u>
              <p class="p-0 m-0 text-warning" v-else>{{ couponerr }}</p>
            </a>
            <div v-if="isHidden" class="promo-box">
              <div class="input-group ">
                <input
                  id="Coupes"
                  ref="removecou"
                  v-model="coupon_code"
                  type="text"
                  class="form-control"
                  placeholder="Enter Coupon Code"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <b-button
                    class="subscribe-button"
                    v-on:click="applyCoupon($event)"
                    >Apply</b-button
                  >
                </div>
              </div>
            </div>
            <!-- <b-form-group class="   mb-1 mt-0"
                  label="Total Payable amount"
                  label-for="name-input"
                  invalid-feedback="Name is required">
                  <b-form-input
                     class="  rounded-xxxxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md  "
                     id="name-input" placeholder="Rs.999.00/-" autocomplete="off" v-if="coupon" v-model="coupon.data.amount_pay" disabled></b-form-input>
                  <b-form-input
                     class="  rounded-xxxxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md  "
                     id="name-input" placeholder="Rs.999.00/-" autocomplete="off" v-else v-model="amount_pay" disabled></b-form-input>
               </b-form-group> -->

            <div class="form-group mt-2 mb-0">
              <p class="border p-1 rounded mb-0 pb-0">
                {{ symbol }} {{ amount_payPrint }}
              </p>
            </div>
          </form>
          <form
            method="POST"
            class="pl-5 pr-5"
            id="paymentForm"
            :action="payuUrl"
          >
            <input type="hidden" name="key" v-model="mkey" size="64" />
            <input type="hidden" name="txnid" v-model="txnid" size="64" />
            <input type="hidden" name="amount" v-model="amount_pay" size="64" />
            <input
              type="hidden"
              name="productinfo"
              v-model="productInfo"
              size="64"
            />
            <input
              type="hidden"
              name="firstname"
              v-model="users.first_name"
              size="64"
            />
            <input
              type="hidden"
              name="service_provider"
              value="payu_paisa"
              size="64"
            />
            <input type="hidden" name="email" v-model="users.email" size="64" />
            <input
              type="hidden"
              name="phone"
              v-model="users.mobile_no"
              size="64"
            />
            <input
              type="hidden"
              name="lastname"
              v-model="users.last_name"
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

            <b-button
              @click="updateProfile($event)"
              style="background-color: #004898!important"
              class="  fw-400 ps-3 pe-3 lh-32 mt-3 mb-4 rounded-xxxxl ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100"
              >{{ loading ? "Processing..." : "Create Payment" }}</b-button
            >
          </form>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  Name: "Search",

  data() {
    return {
      plan: { name: "Plan 3" },
      rate: "1",
      selected: "",
      key: "",
      isHidden: false,
      users: "",
      bussines: "",
      fullName: "",
      symbol: "",
      amount_payPrint: "",
      email: "",
      productInfo: "1 Year Plan",
      total: "10",
      gst: "",
      coupon_code: "",
      coupon: "",
      amount_pay: "999",
      couponerr: "",
      subscribest: [],
      message: "Everyone come and see how good I look!",

      // testing Mode

      // payuUrl:'https://test.payu.in/_payment',
      // mkey: "rjQUPktU",
      // saltKey:'e5iIg1jwi8',
      // surl: "https://garba.info/home/User/Success",
      // furl: "https://garba.info/home/User/Fail",

      // secure Mode

      payuUrl: "https://secure.payu.in/_payment",
      mkey: "nxpvv9VZ",
      saltKey: "3oFxUMtWG2",
      surl: "https://restroworld.com/Home/User/PaymentSuccess",
      // surl: "https://restroworld.com/home/User/Success",
      furl: "https://www.restroworld.com/home/User/Fail",
      txnid: this.makeid(),
      id: "",
      mobile_no: "",
      lastName: "",
      firstName: "",
      hash: this.hash,
      loading: "",
      failMsg: "",
    };
  },

  methods: {
    paymentCancel() {
      this.subscribest = [];
      this.$refs["modal"].hide();
    },

    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

    onChange(event) {
      console.log(event);
    },

    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    },

    getData() {
      axios
        .get("user/plan", {
          params: { country_id: this.user.country_id },
        })
        .then((result) => {
          this.plan = result.data.data;
          this.amount_pay = result.data.data[0].countries.pivot.amount;
          this.symbol = result.data.data[0].countries.currency_symbol;
          this.amount_payPrint = result.data.data[0].countries.pivot.amount;
        });
    },

    updateProfile() {
      this.loading = true;
      const UpdateProfile = new FormData();
      UpdateProfile.append("first_name", this.users.first_name);
      UpdateProfile.append("last_name", this.users.last_name);
      UpdateProfile.append("mobile_no", this.user.mobile_no);
      UpdateProfile.append("country_id", this.user.country_id);
      UpdateProfile.append("state_id", this.user.state_id);
      UpdateProfile.append("city_id", this.user.city_id);
      UpdateProfile.append("address", this.user.address);
      const response = axios
        .post("users/" + this.users.id, UpdateProfile)
        .then((result) => {
          if (result.data.status_code == 200) {
            this.signInButtonPressed();
            setTimeout(
              function(scope) {
                scope.loading = false;
              },
              5000,
              this
            );
          }
        })
        .catch((error) => {
          this.failMsg =
            error.response.data.message + "Please Update Profile!!!";
          this.loading = false;
        });

      console.log(response);
    },

    signInButtonPressed() {
      var data =
                          this.mkey +
                          "|" +
                          this.txnid +
                          "|" +
                          this.amount_pay +
                          "|" +
                          this.productInfo +
                          "|" +
                          this.users.first_name +
                          "|" +
                          this.users.email +
                          "|||||||||||";
                        var sha512 = require("js-sha512");
                        var salt = this.saltKey;
                        var hash = sha512(data + salt);
                        if (hash) {
                          localStorage.setItem("hash", hash);
                          localStorage.setItem("expireSession", "sesion12dgtdb");
                        }
                        console.log(hash);
                        console.log(data);

                        document.getElementById("hash").value = hash;
      if(this.user.country_id == '101')
            {
                       // document.getElementById("paymentForm").submit();
                        document.getElementById("paymentForm").submit();  
                          //  <<-- only this line un commented and another line Un comment To Payumoney start
        


      }
      
      else{
        
     
      if(hash){
       
        var options = {
        key: "rzp_live_tazg9e4O5sAPdQ",
        // key: "rzp_test_EpNayKPHUEGLMY",
        amount: this.amount_pay * 100,

        currency: this.currency1,
        //  currency: 'INR', 
        // name: this.first_name,
        description: "Restroworld Transection",
        image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
        handler: function (response) {
          this.paymentId = response.razorpay_payment_id;
          this.orderId = response.razorpay_order_id;
          this.signature = response.razorpay_signature;

          if (response.razorpay_payment_id) {
          
                // alert("PaymentSuccess");
                // window.location.href =  window.location.origin + "/Home/User/PaymentSuccess";
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
                window.location.href = "http://restroworld.com/Home/User/PaymentSuccess"

          } 
          else {
            
            window.location.href = "https://restroworld.com/Home/User/Fail"

          }
        }.bind(this),
        prefill: {
          name: this.first_name,
          email: this.email,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    }

      
          // document.getElementById("paymentForm").submit();
   
      }
    },

    applyCoupon() {
      
      axios
        .get("apply-coupon/1", {
          params: {
            country_id: this.user.country_id,
            coupon_code: this.coupon_code,
          },
        })
        .then((response) => {
          this.coupon = response.data;
          this.amount_pay = response.data.payable_amount;
          this.amount_payPrint = response.data.payable_amount;
          
          
          this.couponerr = this.coupon.message;
          localStorage.setItem("copondetails", JSON.stringify(response.data));
          localStorage.setItem("coponde",this.coupon_code);

        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.status_code == 422) {
            this.couponerr = error.response.data.message;
            this.coupon_code = "";
            this.$refs.removecou.reset();
          }
          console.log(error);
        });
    },

    getcurrency(){
      
      axios.get('countries/' + this.users.country.id).then( (result) => {

        console.log(result.data.data.currency);
        this.currency1  = result.data.data.currency;

      })


   }
  },
  mounted() {
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
    this.getcurrency();
    // console.log("name",this.users.country.id);
    this.getData();
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
