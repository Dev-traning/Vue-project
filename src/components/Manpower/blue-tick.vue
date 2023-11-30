<template>
    <div class="franchise border-info-md">
      <div class="pl-4 border-0 card-body w-100 bg-success d-flex rounded-3">
      
         <h4 class="mb-0 text-white font-xs fw-600 ms-4"> Verified Your Blue-tick</h4>
      </div>
      <div class="p-1 border-0 card-body p-lg-3 w-100 "  >

      
    <div class="text-center mb-3">
  <img style="width: 40vh;" src="./../../assets/img/verifed.png" alt="">
  <h1 style="color: #292828bf!important;" class="text-success font-xs w-600 fw-600 pl-4 pr-4">
    You can get a verified blue tick account for an unbeatable price of,
    <br/> <span v-if="amount_pay == '678.64'" style="color: black;">₹499 (+GST)</span>
    <span v-else style="color: black;">₹999 (+GST)</span>
    . Don't miss out on this exclusive offer!
  </h1>
</div>

<div style="position: relative;" class="mt-4">
  <label class="mont-font fw-600 font-xss">Aadhar Card / Pan Card / Voter ID  </label>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="aadharFile" @change="handleAadharFileChange">
    <label class="custom-file-label" for="aadharFile">{{ aadharFileName }}</label>
  </div>
</div>

<div style="position: relative;" class="mt-4">
  <label class="mont-font fw-600 font-xss">Business Proof (Optional)</label>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="businessFile" @change="handleBusinessFileChange">
    <label class="custom-file-label" for="businessFile">{{ businessFileName }}</label>
  </div>
</div>

<div class="text-center"> 
  <button type="button" class="btn btn-primary p-2 fw-600 font-xss mt-4"  @click="paynow"  >Verified Now !!!</button>
</div>

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
              v-model="user.first_name"
              size="64"
            />
            <input
              type="hidden"
              name="service_provider"
              value="payu_paisa"
              size="64"
            />
            <input type="hidden" name="email" v-model="user.email" size="64" />
            <input
              type="hidden"
              name="phone"
              v-model="user.mobile_no"
              size="64"
            />
            <input
              type="hidden"
              name="lastname"
              v-model="user.last_name"
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
</template>


<script>
import { mapGetters } from "vuex";
import axios from 'axios';
export default {
  name: "Home",
  components: {

  },
       data() {
    return {
     basketAddSuccess:false,
     daysSinceCreation: 0,
     amount_pay:"678.64",
     hash: this.hash,
     txnid: this.makeid(),
     productInfo: "1YearPlan",
     payuUrl: "https://secure.payu.in/_payment",
      mkey: "nxpvv9VZ",
      saltKey: "3oFxUMtWG2",
      surl: "https://restroworld.com/blueticksuccess",
      // surl: "https://restroworld.com/home/User/Success",
      furl: "https://restroworld.com/home/User/Fail",
      aadharFileName: 'Choose file...', // Initial file name for Aadhar Card
      businessFileName: 'Choose file...', // Initial file name for Business Proof
   
      
    }},
  computed: {
    ...mapGetters(["user"]),
  },

    methods: {
      handleAadharFileChange(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        
        this.aadharFileName = file ? file.name : 'Choose file...';
      },

      handleBusinessFileChange(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];
        this.businessFileName = file ? file.name : 'Choose file...';
      },
      makeid() {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
      paynow(){

        const aadharFile = document.getElementById('aadharFile').files[0];
        const businessFile = document.getElementById('businessFile').files[0];

        const formData = new FormData();
        formData.append('document1', aadharFile);
        formData.append('document2', businessFile);
        formData.append('bluetick_plan_id', '2');

          axios.post('upload-bluetick-documents',formData).then((res)=>{
            // console.log(res.data);
            localStorage.setItem("bluetick_user_id" ,res.data.bluetick_payment_details.id);
            var data =
                          this.mkey +
                          "|" +
                          this.txnid +
                          "|" +
                          this.amount_pay +
                          "|" +
                          this.productInfo +
                          "|" +
                          this.user.first_name +
                          "|" +
                          this.user.email +
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
                        document.getElementById("paymentForm").submit();


          });
       

    },
    handleFileChange(fileType) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        // Update the respective file name based on the fileType
        if (fileType === 'aadharFile') {
          this.aadharFileName = file ? file.name : 'Choose file...';
        } else if (fileType === 'businessFile') {
          this.businessFileName = file ? file.name : 'Choose file...';
        }
      },
      calculateDaysSinceCreation() {
        // alert("helo");
      // Get the current date
      const currentDate = new Date();

      // Parse the user's creation date
      const userCreationDate = new Date(this.user.created_at);

      // Calculate the difference in milliseconds
      const timeDifference = currentDate - userCreationDate;

      // Convert milliseconds to days
      this.daysSinceCreation = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      //  alert(this.daysSinceCreation);

      if(this.daysSinceCreation <= 15 || this.daysSinceCreation == 0 && this.user.blue_tick == 0 )
      {

             this.amount_pay = 678.64
            
        
      }
      else{

        this.amount_pay = 1178.82

      }




    },
closeModel(){
 this.$refs['modal'].hide()
}

    },

  mounted() {
    

    
    this.calculateDaysSinceCreation();
    axios.get();
       this.makeid();
    
    //directly called popup
    // this.basketAddSuccess = true;
    // this.$refs['modal'].show();




    if (!localStorage.getItem("token")) {
      this.$router.push("/")
    }
  },
};
</script> 

<style scoped>
.file-container {
  text-align: center;
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
}

.file-input {
  display: none;
}

.file-label {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.file-label:hover {
  background-color: #2980b9;
}
 .coponCode {
  border: 2px solid #142a73;
  border-style: dashed;
}
 
 
.modal-icon {
    display: block;
    max-width: 207px;
    margin: 0 auto 30px;
}
.modal-header {
    margin-bottom: 10px;
    font-size: 25.5px;
    letter-spacing: 2px;
    text-align: center;
}
.modal-subheader {
    max-width: 350px;
    margin: 0 auto;
    font-size: 19px;
    line-height: 1.3;
    letter-spacing: 1.25px;
    text-align: center;
    color: #999;
}
.modal-bottom {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 55px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #fff;
}

 

/* Media Queries */
@media (min-width: 456px) {

    .modal-top {
        padding: 28px 0 28px;
    }
    .modal-bottom {
        padding: 28px 0 28px;
    }
   
}

</style>