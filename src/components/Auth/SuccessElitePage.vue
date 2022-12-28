<template>
<div>

    <body class="text-center mont-font">
        <main class="form-signin">
            <div class="card w-100 shadow-sm rounded border-0 mb-3 ">
                <div v-if="errormas" class="alert alert-success" role="alert">
                    {{ errormas }}
                </div>
                <b-img style="height: 111px;width: auto;margin-top: 6rem !important; margin-bottom: 2rem !important;" center src="../../assets/paymentsuses.png" alt="Center image"></b-img>

                <h1 class="text-success fw-600 text-danger-600 font-xl" style="color: #00a00b!important;">
                    Your Payment Was Successful !
                </h1>
                <p class="pl-5 pr-5 ml-5 mr-5 fw-300 text-danger-300 font-xssss mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                    laboriosam eligendi laudantium numquam itaque! Asperiores ex soluta
                    quaerat, reiciendis ab autem modi voluptates odio cum. Rem atque ab
                    quam aliquid, possimus non eius nisi ullam aliquam, est molestiae
                    voluptate voluptatibus vitae fuga, et commodi tenetur ipsum culpa!
                    Accusamus impedit earum consequuntur a nisi laborum nobis laudantium
                    nulla fuga vel, eni!
                </p>

                <a v-bind:href="'/home'" style="margin-bottom: 6rem !important;" class="text-dark font-xsss fw-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                    Go to Home</a>
            </div>
        </main>
    </body>
</div>
</template>

  
<script>
import axios from "axios";
export default {
    Name: "SuccessElitePage",
    data() {
        return {
            errormas: "",
            coupon_code: "",
            errormasss: "",
        };
    },
    methods: {},

    mounted() {

        this.subscribe = JSON.parse(localStorage.getItem("copondetails"));
        if (this.subscribe) {
            this.coupon_code = this.subscribe.applied_coupon;
            alert(this.coupon_code);
            console.log(this.coupon_code);
        }
        //   this.subscribe = JSON.parse(localStorage.getItem("copondetails"));
       
        this.users = JSON.parse(localStorage.getItem("UserDetails"));
        console.log(this.users.subscription.id);

        if (localStorage.getItem("hash")) {
            if (localStorage.getItem('token')) {
               
                alert("token is not found");
            }

            alert(this.users.subscription.id);
            this.errormas =
                "Your subscription process is in progress. Do not refresh or leave page";
            axios
                .post("/subscription", {
                    plan_id: "1",
                    coupon_code: "REST99"
                })
                .then((result) => {

                    if (result.data.status_code == 201) {
                        axios
                            .post("payment/" + this.users.subscription.id, {
                                payment_status: "1"
                            })
                            .then((result) => {
                                if (result.data.status_code == "200")
                                    this.$router.go(this.$router.currentRoute);
                                //   localStorage.removeItem("hash");
                                //   localStorage.removeItem("copondetails");

                            });
                    }
                });
        }

        //   if (localStorage.getItem("expireSession")) {
        //     setTimeout(() => {
        //       localStorage.removeItem("expireSession");
        //     }, 10000);
        //   } 
        //   else if (!localStorage.getItem("expireSession")) {
        //     this.$router.push("/home");
        //   }

        // .catch((error) => {
        //     this.errormas = error.response.data.message;

        // })

        //         this.subscribe = JSON.parse(localStorage.getItem("subscribe"));
        //         const response = axios.post('payment/'+this.subscribe.id,{
        //                payment_status:'1'
        //            }) .catch(error =>{
        //                            if(error){this.errormas=error.response.data.message}
        //                            console.log(error)})
        //                            if (response.data.status_code == '200') {
        //                             this.$router.go(this.$router.currentRoute)
        //                              localStorage.removeItem('subscribe');
        //  }

        //            console.log(response)
    },
};
</script>

  
<style scoped>
body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
}

.form-signin {
    width: 100%;
    max-width: 674px;

    margin: auto;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.content {
    text-align: center;
}

.content h1 {
    font-size: 25px;
    padding-top: 25px;
}

.content a {
    width: 200px;
    height: 35px;
    color: #fff;
    border-radius: 30px;
    padding: 5px 10px;
    background: #f01b1b;
    transition: all ease-in-out 0.3s;
}

.content a:hover {
    text-decoration: none;
    background: #000;
}
</style>
