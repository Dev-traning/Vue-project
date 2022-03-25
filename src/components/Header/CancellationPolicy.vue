<template>
  <div>
    <div class="main-wrapper" style="background-color: #FAFAFA;">
      <div
        class="main-content right-chat-active"
        style="background-color: #FAFAFA;"
      >
        <div class="middle-sidebar-bottom">
          <div class="middle-sidebar-left">
            <div class="row">
              <div>
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <div class="card w-100 shadow-md rounded-lg border-0">
                      <div>
                        <div class="row">
                          <div class=" p-4 pt-0">
                            <div class="payment">
                              <div class="payment_header">
                                <div class="check">
                                  <i
                                    class="fa fa-exclamation-triangle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                              <div class="content pl-3 pr-3">
                                <h1 class="text-left font-xss  fw-500">
                                  Cancellation Policy
                                </h1>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  1. By disagreeing with our protocols we have
                                  the right to hide our services and conditions
                                  from you so that you'll not be in the
                                  efficient mode of enjoying our benefits.
                                </p>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  2. In case, the customer has paid excess money
                                  than the prescribed/given amount due to any
                                  technical issues he/she will get a refund of
                                  the excess amount.
                                </p>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  3. In case of any Payment Error, due to any
                                  network communication/connectivity problems,
                                  if your registration/confirmation form does
                                  not get registered and the amount of USD/INR
                                  has been debited from your account, the same
                                  will not be refunded back to your account.
                                  Instead, you'll receive a mail for the
                                  successful subscription to our portal.
                                </p>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  4. If the customer uses the discount coupon
                                  code while subscribing and due to any
                                  technical issues he/she didn't receive the
                                  discount. The discount will be credited to the
                                  customer's account.
                                </p>
                                <router-link to="/home/user"
                                  >Go to Home</router-link
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="col-xl-3 col-xxl-2 col-lg-3 ps-lg-0">
                     
                     <div class="card w-100 shadow-xss rounded-xxl border-0 mb-3 ml-3">
                         sdfdsfdsfdsfds
                     </div>
                  </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  Name: "CancellationPolicy",
};
</script>

<style scoped>
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
