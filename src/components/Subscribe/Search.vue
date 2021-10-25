<template>
   <div style="background-color: hsl(32deg 100% 50%);" class="card w-100 shadow-xss rounded-xxl border-0 ps-4   pe-4   mb-3 subscribe">
      <div class="row">
         <div class="col-8">
            <p class="mb-0 mt-1 text-white font-xsss fw-500 ">Coupon Code: RWFIRST</p>
         </div>
         <div class="col-4 text-right">
            <a   v-b-modal.subscribe class="font-xsss w-100 fw-500 text-center lh-28 mt-1 mb-1 rounded-3 ls-2 bg-suscribe d-inline-block text-white me-1 ms-auto">Make this an Elite Account</a>
         </div>
         <div>
            <!-- no-close-on-backdrop -->
            <b-modal scrollable show-close="ftrue"   hide-footer id="subscribe" centered ref="modal"    size="lg"  >
            <div class="modal-header">
               <button @click="paymentCancel()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="text-center">
               <b-alert show variant="warning" v-if="failMsg">{{failMsg}}</b-alert>
               <!-- <b  style="font-size: 50px !important; " ><span class="space1" style="color: #004898">Restro</span><span class="space1" style="color: #c41e16">world</span></b>
                  <p style="color: black; font-size: 14px; margin-left: 4px; margin-top: -18px; font-weight: bold;" class=""> India's First Global Restaurant Community </p> -->
               <a href="#">
                  <h3 style="color: #004898;   margin-left: 4px;  font-weight: bold;" class="pl-4 pr-4 pb-2 pt-2" ><u>Make this An Elite Account</u></h3>
               </a>
            </div>
            <form ref="form" class="pl-5 pr-5"  >
               <div class="row">
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="First Name" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="users.first_name" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="Last Name" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="users.last_name" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
               </div>
               <div class="row">
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="Mobile No" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="users.mobile_no" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="Email" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="users.email" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
               </div>
               <div class="row">
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="Country" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="country" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label=" State" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="state" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
                  <div class="col">
                     <b-form-group class=" mb-2 mt-0" label="City" label-for="name-input" invalid-feedback="Name is required" >
                        <b-form-input class=" rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="city" autocomplete="off"></b-form-input>
                     </b-form-group>
                  </div>
               </div>
               <b-form-group class=" mb-2 mt-0" label="GST No." label-for="name-input" invalid-feedback="Name is required" >
                  <b-form-input placeholder="Optinal" class="rounded-xxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md mb-0 mt-0" id="name-input" v-model="gst" autocomplete="off"></b-form-input>
               </b-form-group>
               <b-form-group class="mb-2 mt-0" label="Plan"   label-for="name-input"  invalid-feedback="Name is required"  >
                  <input type="text" class="form-control" placeholder="For 1 Year (Rs. 999.00/-)" aria-label="Recipient's username" aria-describedby="basic-addon2" disabled>
                  <!-- <select name="LeaveType" @change="onChange($event)" v-model="selected"  class="form-select  rounded-xxxxl p-2 ps-2 font-xsss text-grey-600 fw-500 border-light-md "   >
                     <option   v-for="item in plan" v-bind:key="item.id" value="" >{{item.name}} For {{item.plan_validity_text}} (Rs.{{item.countries.pivot.amount}}/-)</option>
                       </select> -->
                  <!-- <select name="LeaveType" @change="onChange($event)" v-model="plan[1].name"  class="form-select  rounded-xxxxl p-2 ps-2 font-xsss text-grey-600 fw-500 border-light-md "   >
                     <option   v-for="item in plan" v-bind:key="item.id" :value="plan[1].name" >{{item.name}} For {{item.plan_validity_text}} (Rs.{{item.countries.pivot.amount}}/-)</option>
                       </select> -->
               </b-form-group>
               <a v-on:click="isHidden = !isHidden" class="btn p-0 m-0">
                  <u v-if="!couponerr">I have a promo code</u>
                  <p class="p-0 m-0 text-warning"  v-else>{{couponerr}} </p>
               </a>
               <div v-if="isHidden" class="promo-box">
                  <div class="input-group ">
                     <input ref="removecou" v-model="coupon_code" type="text" class="form-control" placeholder="Enter Coupon Code" aria-label="Recipient's username" aria-describedby="basic-addon2">
                     <div class="input-group-append" v-if="!coupon">
                        <b-button class="subscribe-button"  v-on:click="applyCoupon($event)">Apply</b-button>
                     </div>
                     <div class="input-group-append" v-else>
                        <button type="button" class="btn btn-danger remove-button"  @click="reset()">Remove</button>
                     </div>
                  </div>
               </div>
               <b-form-group class="   mb-1 mt-0"
                  label="Total Payable amount"
                  label-for="name-input"
                  invalid-feedback="Name is required">
                  <b-form-input
                     class="  rounded-xxxxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md  "
                     id="name-input" placeholder="Rs.999.00/-" autocomplete="off" v-if="coupon" v-model="coupon.data.amount_pay" disabled></b-form-input>
                  <b-form-input
                     class="  rounded-xxxxl p-2 ps-2 font-xssss text-grey-500 fw-500 border-light-md  "
                     id="name-input" placeholder="Rs.999.00/-" autocomplete="off" v-else v-model="amount_pay" disabled></b-form-input>
               </b-form-group>
               <!-- <b-button type="submit" style="background-color: #004898!important" class="  fw-700 ps-3 pe-3 lh-32  mt-3 mb-4 rounded-xxxxl ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100">Create Payment</b-button> -->
            </form>
            <form   method='POST' class="pl-5 pr-5" id="paymentForm" action='https://secure.payu.in/_payment'>
               <input type="hidden" name="key" v-model="mkey"  size="64" />
               <input type="hidden" name="txnid"  v-model="txnid" size="64" />
               <input type="hidden" name="amount" v-model="amount_pay" size="64" />
               <input type="hidden" name="productinfo"  v-model="productInfo"  size="64" />
               <input type="hidden" name="firstname"  v-model="users.first_name"   size="64"/>
               <input type="hidden" name="service_provider" value="payu_paisa" size="64" /> 
               <input type="hidden" name="email" v-model="email"  size="64"/>
               <input type="hidden" name="phone" v-model="mobile_no"   size="64"/>
               <input type="hidden" name="lastname"  v-model="users.last_name"  size="64"/>
               <input type="hidden" name="surl" v-model="surl" />
               <input type="hidden" name="furl" v-model="furl"  />
               <input type="hidden" name="hash" id="hash" v-model="hash" size="64">
               <!-- <div class="pay-now-button-outer">
                  <button class="btn btn-primary fontBold" @click="paymentcreate();signInButtonPressed();" type="button" target="_blank">PAY NOW</button>
                  </div> -->
               <b-button @click="paymentcreate($event);updateProfile($event)" style="background-color: #004898!important" class="  fw-400 ps-3 pe-3 lh-32 mt-3 mb-4 rounded-xxxxl ls-2 bg-success d-inline-block text-white me-1 ms-auto w-100">{{loading ? "Processing..." : "Create Payment"}}</b-button>
            </form>
            </b-modal>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";

export default {
  Name: "Search",

  data() {
    return {
      plan: { name: "Plan 3" },
      rate: "1",
      selected: '',
      key: '',
      isHidden: false,
      users: '',
      bussines: "Coco Cola",
      fullName: "Rahul Kumar",
      mobile: "7897954794",
      email: "rajukumar@gmail.com",
      productInfo: "1 Year Plan",
      total: "10",
      country: "India",
      state: "Gujrat",
      city: "Surat",
      gst: '',
      coupon_code: '',
      coupon: '',
      amount_pay: "999",
      couponerr: '',
      // subscribe: '',
      subscribest: [],

      message: "Everyone come and see how good I look!",
      mkey: "nxpvv9VZ",
      //productInfo: "Verification order",
      txnid: this.makeid(),
      //amount: 1,
      id: "2222222",
      // email: "test@test.com",
      mobile_no: '',
      lastName: "Kumar",
      firstName: "Sonu",
      surl: "https://garba.info/home/User/Success",
      furl: "https://garba.info/home/User/Fail",
      hash: this.hash,
      loading: '',
      failMsg: '',
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
      console.log("all data", event);
    },

    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    },

    getData() {
      axios.get("user/plan").then((result) => {
        this.plan = result.data.data;
       
      });
    },

    updateProfile() {
      axios.post("users/" + this.users.id, { first_name: "test" });
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
        this.email +
        "|||||||||||";

      var sha512 = require("js-sha512");
      var salt = "3oFxUMtWG2";
      var hash = sha512(data + salt);
      if (hash) {
        require("../../../app/route.js")();
      }
      console.log(hash);
      console.log(data);
      document.getElementById("hash").value = hash;

      document.getElementById("paymentForm").submit();
    },
    applyCoupon() {
      axios
        .get("apply-coupon/1", {
          params: { coupon_code: this.coupon_code },
        })
        .then((response) => {
          this.coupon = response.data;
          this.amount_pay = response.data.data.amount_pay;

          this.couponerr = this.coupon.message;

          console.log("data", response.data);
        })
        .catch((error) => {
          if (error.response.data.status_code == 422) {
            this.couponerr = error.response.data.message;
            this.coupon_code = "";
            this.$refs.removecou.reset();
          }
          console.log(error);
        });
    },
    async paymentcreate() {
      this.loading = true;
      const response = await axios
        .post("/subscription", { plan_id: "1", coupon_code: this.coupon_code })
        .then((result) => {
          if (result.data.status_code == 201) {
            localStorage.setItem("subscribe", JSON.stringify(result.data.data));
            this.signInButtonPressed();
            this.loading = false;
          }
        })

        .catch((error) => {
          if (error) {
            setTimeout(
              function (scope) {
                scope.loading = false;
              },
              1000,
              this
            );
            this.subscribest = error.response.data.status_code;
            this.failMsg =
              "Your subscription process is in progress. Please try After 5 Minutes";
            return;
          }

          console.log(error);
        });

      console.log(response);
    },
  },
  mounted() {
    this.hash =
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
      this.email +
      "|||||||||||";
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
   //  this.subscribe = JSON.parse(localStorage.getItem("UserDetails"));

    this.getData();
  },
};
</script>
 