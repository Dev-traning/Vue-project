<template>
  <div class="mont-font">
    <Nav />


       <b-modal scrollable show-close="ftrue" hide-footer dialog-class="animated jackInTheBox"  centered  ref="modal"   size="60">
 <button @click="closeModel()" type="button" class="closee" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

           
         


      <div class="modal-top text-center " >
              <!-- <img class="modal-icon u-imgResponsive" src="../assets/contrs.png" alt="Trophy" /> -->
            <div class="modal-header text-center ">
             

              <h2 class="text-danger text-danger-800 fw-800 h1 mb-5" style="font-family: &quot;Original Surfer&quot;, Regular;"><u style="font-size: 2.2rem;">Congratulations...!!!</u></h2>
            </div>
          
                <h1 style="font-size: 30px!important;" class="coponCode modal-subheader mb-4 text-success font-xxl w-200 fw-600">
                    REST500
              </h1>
          
 

          
                <h1 style="color: #000000bf!important;" class=" text-success font-xss w-200 fw-400 pl-4 pr-4">
                  <!-- You are eligible for Sign Up at only <b class="text-success">499 Rs</b> for Elite Account. Just use coupon code - "REST500" while Elite Sign Up and you will only need to pay Rs 499.. So Hurry Up..!! Elite Sign Up now..!! And Join the club of Elites of Restaurant Industry..!! -->
                  Join the Elite Club of the Restaurant Industry now and get <b style="color: red;"> 50% OFF </b>on your Elite Account sign-up! Use coupon code <b style="color: red;">"REST500"</b> to take advantage of this limited time offer. Don't miss out on exclusive resources and networking opportunities to elevate your game in the industry.<b style="color: red;">Sign up today!</b> 
                  <!-- You've successfully reached the goal, and a  <b class="text-success">1Rs</b> Discount will be Applied Make An elite account. Just Hang tight while we active all Manpower ,Restaurant ,vendors. -->
              </h1>
          <a @click="closeModel()" v-b-modal.subscribe class="font-xsss w-50 fw-500 text-center lh-28 mt-1 mb-1 rounded-3 ls-2 bg-suscribe d-inline-block text-white me-1 ms-auto">Make this an Elite Account</a>

        </div>
  </b-modal>

 

 

    <router-view></router-view>
    <div id="app" v-cloak></div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";

import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Nav,
  },
       data() {
    return {
     basketAddSuccess:false
      
    }},
  computed: {
    ...mapGetters(["user"]),
  },

    methods: {
closeModel(){
 this.$refs['modal'].hide()
}

    },

  mounted() {
    // alert(this.user.get_free_subscribed == '0')

 
 if(this.user.is_subscribed== false){
 setTimeout(() => {
          this.basketAddSuccess = true;   
          this.$refs['modal'].show()
        }, 10000);
 }
       

    if (!localStorage.getItem("token")) {
      this.$router.push("/")
    }
  },
};
</script> 

<style scoped>

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