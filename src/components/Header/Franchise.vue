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
                                  Franchise
                                </h1>
                                <p
                                  class="  font-xssss  fw-500 text-justify mb-1"
                                >
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Officia quos voluptatem,
                                  dolorem veniam facilis beatae, dolore unde
                                  illo numquam suscipit maxime, repellendus
                                  sapiente in accusantium magnam animi maiores
                                  quod modi praesentium perferendis asperiores
                                  nobis eligendi! Mollitia reiciendis culpa
                                  debitis tempora, quo ipsam itaque officia
                                  minus blanditiis nostrum saepe velit
                                  reprehenderit impedit neque ipsum id amet non
                                  suscipit vero cum, commodi aut voluptatum at.
                                  Delectus ratione harum necessitatibus possimus
                                  molestiae enim voluptatem, voluptatibus
                                  officia totam, quis veritatis, nobis dolore.
                                  Adipisci temporibus itaque quae porro, eius
                                  doloribus debitis cum eveniet libero vero, ea,
                                  similique deleniti laborum beatae tenetur
                                  tempora voluptate magnam. Animi.
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
  Name: "Franchise",
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
