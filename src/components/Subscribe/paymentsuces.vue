<template>
   <div class="card w-100 shadow-xss rounded-xxl border-0 ps-4   pe-4   mb-3 subscribe">
      <div class="row">
          <!-- <div class="col-9">
            <p class="mb-0 mt-1 text-white font-xsss fw-700 ">Coupon Code: RestFree</p>
          </div>
        <div class="col-3 text-right">
            <a  v-b-modal.subscribe class="font-xsss w-100 fw-700 text-center lh-28 mt-1 mb-1 text-uppercase rounded-3 ls-2 bg-suscribe d-inline-block text-white me-1 ms-auto">Subscribe Now</a>
         </div> -->




   <div>
 
            <div class="text-center">
               <b  style="font-size: 50px !important; " ><span class="space1" style="color: #004898">Restro</span><span class="space1" style="color: #c41e16">world</span></b>
               <p style="color: black; font-size: 14px; margin-left: 4px; margin-top: -18px; font-weight: bold;" class=""> India's First Global Restaurant Community </p>
               <h3 style="color: #004898;   margin-left: 4px;  font-weight: bold;" class="pl-4 pr-4 pb-2"> SUBSCRIBE NOW</h3>
            </div>
            <form id="paymentForm" action='https://test.payu.in/_payment' method='post'>
               Merchent key- <input name="key" v-model="mkey"  size="64" /><br>
               txnid -<input name="txnid"  v-model="txnid" size="64" /><br>
              amount-  <input name="amount" v-model="amount" size="64" /><br>
               productinfo -<input name="productinfo"  v-model="productInfo"  size="64" /><br>
               firstname-<input name="firstname"  v-model="firstName"   size="64"/><br>
               service_provider -<input name="service_provider" value="payu_paisa" size="64" /> <br>
              email-  <input name="email" v-model="email"  size="64"/><br>
              phone- <input name="phone" v-model="phone"   size="64"/><br>
               lastname<input name="lastname"  v-model="lastName"  size="64"/><br>
               surl<input name="surl" value="https://www.restroworld.com/" size="64" /><br>
               furl<input name="furl" value="https://www.restroworld.com/" size="64" /><br>
              hash- <input name="hash" id="hash" v-model="hash" size="64"><br>

                
               <div class="pay-now-button-outer">
                  <button class="btn btn-primary fontBold" v-on:click="signInButtonPressed()" type="button" target="_blank">PAY NOW</button>
               </div>
            </form>


 
 
         </div>
      </div>
   </div>
</template>
<script>
 

export default {
  Name: "Search",

  data() {
    return {
      plan: [],
      selected: "",

      message: "Everyone come and see how good I look!",
      mkey: "nxpvv9VZ",
      productInfo: "Verification order",
      txnid: this.makeid(),
      amount: 1,
      id: "2222222",
      email: "test@test.com",
      phone: 9999999999,
      lastName: "Kumar",
      firstName: "Sonu",
      surl: "https://restroworld.com/",
      hash: this.hash,
    };
  },

  methods: {
    makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

    signInButtonPressed() {  var data = this.mkey + "|" + this.txnid + "|" + this.amount + "|" +  this.productInfo + "|" + this.firstName + "|" + this.email +  "|||||||||||";

      var sha512 = require("js-sha512");
      var salt = "3oFxUMtWG2";
      var hash = sha512(data + salt);
      console.log(hash);
      console.log(data);
      document.getElementById("hash").value = hash;

      document.getElementById("paymentForm").submit();
     
    }, },
  async mounted() {

     this.hash =this.mkey + "|" + this.txnid + "|" + this.amount + "|" +  this.productInfo + "|" + this.firstName + "|" + this.email +  "|" + this.id + "||||||||||"
 
    let user = localStorage.getItem("token");
    if (!user) {
      this.$router.push({ name: "/" });
    }
    this.getData();
  },
};
</script>
<style scoped>
.subscribe {
  background-color: hsl(32deg 100% 50%);
}
</style>