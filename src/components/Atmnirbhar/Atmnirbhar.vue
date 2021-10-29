<template>
<div >
 
    <div class="main-content right-chat-active">
   <div class="middle-sidebar-left">
      <div class="row">
         <div class="col-sm-12 ">
            <div class="card w-100 shadow-xss rounded-xxl border-0 p-4"  >

                 <div class="card-body p-2 mb-2  w-100 bg-success border-0 rounded-3 text-center">
                     <h4 class="font-xsss text-white fw-600  mb-0 ">Become Atmnirbhar</h4>

                  </div>
                  <p class="font-xsss fw-500 text-grey-500 text-center mb-2">I hereby apply for becoming <b>Atmnirbhar</b></p>

                  <p class="font-xs fw-500 text-grey-500 text-center mb-3 "><u>Below are my details</u></p>

             <form @submit.prevent="handalSubmit" enctype="multipart/form-data">
  
  
   
  
   <div class="row">
       <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">business name </label>
            <input type="text" class="form-control" value="pending api">
         </div>
      </div>
      <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Name </label>
            <input type="text" class="form-control" v-model="users.first_name" >
         </div>
      </div>
        <div class="col-lg-4 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Contact No</label>
            <input type="text" class="form-control" v-model="users.mobile_no" >
         </div>
      </div>
   </div>
    <div class="row">
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Email</label>
            <input type="text" class="form-control" v-model="users.email" >
         </div>
      </div>
        <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">GST No.</label>
            <input type="text" class="form-control" value="pending api">
         </div>
      </div>
   </div>
   
     <div class="row">
      <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">City</label>
            <input type="text" class="form-control" value="pending api">
         </div>
      </div>
        <div class="col-lg-6 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">State</label>
            <input type="text" class="form-control" value="pending api">
         </div>
      </div>
   </div>

    <div class="row mt-2">
      <div class="col-lg-12 ">
         <div class="">
            <label class="mont-font fw-600 font-xsss">Select No. Of Code Your Requirment(50-500)</label>
          
         </div>
      </div>
    
       
    
<div class="pl-3 pr-3 table-responsive-sm">

   
      <table class="table table-bordered">
  <thead >
    <tr >
      <th scope="col"  ></th>
      <th scope="col" class="table-light">Coupon</th>
      <th scope="col" class="table-light">MRP</th>
      <th scope="col" class="table-light">Total</th>

       
    </tr>
  </thead>
<tbody>
   <tr   >
      <th scope="row">No. Of Coupon</th>
      <td><input type="number" placeholder="Please type Of No" v-model="noOfcoupon"></td>
      <td>{{mrp}}</td>
  
      <td>{{+noOfcoupon * +mrp}} </td>
   </tr>
   <tr   >
      <th scope="row">Bonus Code</th>
      <td>
         <input type="number" readonly class="form-control-plaintext" id="staticEmail2" :value="noOfcoupon">
      </td>
      <td>0</td>
      <td>0</td>
   </tr>
   <tr   >
      <th scope="row">IGST 18%</th>
      <td colspan="2"></td>
      <td>{{+noOfcoupon * +mrp / 100 * 18}}</td>
   </tr>
   <tr class="table-primary">
      <th></th>
      <th colspan="2"  scope="row">Amount</th>
      <th  scope="row">{{+noOfcoupon * +mrp / 100 * 18 + +noOfcoupon * +mrp}}</th>
   </tr>
</tbody>
   

</table>
</div>
  

   </div>


     <div class="row">
      <div class="col-lg-12 mt-0 text-center">
         <b-button  
            type="submit"
            style="background-color: #004898 !important"
            class=" font-xsssss fw-600  ps-3   pe-3 lh-32 mt-1 mb-0   rounded-3 ls-2 bg-success d-inline-block text-white me-1 ms-auto "
            >{{loading ? "Processing..." : "Pay Now"}}</b-button>
      
      </div>
   </div>

</form>



    <form   method='POST' class="pl-5 pr-5" id="paymentForm" action='https://secure.payu.in/_payment'>
               <input type="hidden"  name="key" v-model="mkey"  size="64" />
               <input type="hidden"  name="txnid"  v-model="txnid" size="64" />
               <input type="hidden"  name="amount"   size="64" :value="+noOfcoupon * +mrp / 100 * 18 + +noOfcoupon * +mrp"/>
               <input type="hidden"  name="productinfo"  v-model="productInfo"  size="64" />
               <input type="hidden"  name="firstname"  v-model="users.first_name"   size="64"/>
               <input type="hidden"  name="service_provider" value="payu_paisa" size="64" /> 
               <input type="hidden"  name="email" v-model="email"  size="64"/>
               <input type="hidden"  name="phone" v-model="mobile_no"   size="64"/>
               <input type="hidden"  name="lastname"  v-model="users.last_name"  size="64"/>
               <input type="hidden"  name="surl" v-model="surl" />
               <input type="hidden"  name="furl" v-model="furl"  />
               <input type="hidden"  name="hash" id="hash" v-model="hash" size="64">
               
            </form>


            </div>
         </div>
      </div>
   </div>

</div>
</div>
</template>
<script>
export default {
    Name:'Atmnirbhar',
    data() {
    return {
       noOfcoupon:'',
       mrp: '200',
       users:'',
       loading: '',
        message: "Everyone come and see how good I look!",
      mkey: "nxpvv9VZ",
       productInfo: "1 Year Plan",
      txnid: this.makeid(),
       mobile: "7897954794",
      email: "rajukumar@gmail.com",
       id: "2222222",
       mobile_no: '',
      lastName: "Kumar",
      firstName: "Sonu",
      surl: "https://www.restroworld.com/home/User/AtmPaySuc",
      furl: "https://www.restroworld.com/home/User/Fail",
      hash: this.hash,
      amount_pay: '',
      }},

      methods:{

   makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

          signInButtonPressed() {

             this.amount_pay = +this.noOfcoupon * +this.mrp / 100 * 18 + +this.noOfcoupon * +this.mrp

      var data =
        this.mkey + "|" + this.txnid +  "|" +  this.amount_pay +  "|" + this.productInfo + "|" + this.users.first_name + "|" + this.email + "|||||||||||";

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

         handalSubmit(){
          
  
 
              this.loading = true;
            if(this.noOfcoupon > 49 && this.noOfcoupon < 501){
 
 this.signInButtonPressed();
this.$swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Api Pending',
  showConfirmButton: false,
  timer: 4500
})
 

            }else {

               this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Are you select '+ this.noOfcoupon  + ' Coupon Plz Select coupon 50-500!',
  confirmButtonText: 'Try Again',
   
})
  setTimeout(
              function (scope) {
                scope.loading = false;
              },
              1000,
              this
            );

               // alert('Are you select '+ this.noOfcoupon  + ' Coupon Plz Select coupon 50-500')
            }
            
         }
      },

        mounted() {
           
     
    this.users = JSON.parse(localStorage.getItem("UserDetails"));
  
  },



 

   
 }
</script>

 <style scoped>
 table td {
  position: relative;
}

table td input {
  position: absolute;
  display: block;
  top:0;
  left:0;
  margin: 0;
  height: 100%;
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
}
 </style>