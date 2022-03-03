<template>
  <div>
    <div class="main-wrapper" style="">
      <div class="main-content right-chat-active">
        <div class="middle-sidebar-bottom">
          <div class="middle-sidebar-left">
            <div class="row">
              <div>
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <div class="card w-100 shadow-xss rounded-xxl border-0">
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
                                  About Us
                                </h1>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  RestroWorld is a venture of Redjinni
                                  Industries Private Limited. A global community
                                  created for the Hospitality industry. The
                                  objective of 'RestroWorld' is to provide a
                                  platform for the Hospitality Industry where
                                  Restaurant owners and vendors can connect and
                                  communicate with each other and make a deal!
                                  The mission is to connect these people and
                                  help them grow in the hospitality industry.
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
  Name: "AboutUs",
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
