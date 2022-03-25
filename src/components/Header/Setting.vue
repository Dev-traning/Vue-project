<template>
  <!-- <div>
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
                              <div class="content">
                                <h1
                                  class="text-left font-xss  fw-500 text-center mb-4"
                                >
                                  Coming Soon
                                </h1>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div
    class="main-wrapper rounded-lg shadow-md"
    style="background-color: #FAFAFA;"
  >
    <div
      class="main-content right-chat-active"
      style="background-color: #FAFAFA;"
    >
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div
            class="card card-outline-secondary rounded-lg shadow-md border-0"
          >
            <div class="card-header">
              <h3 class="mb-0 text-white p-1">Change Password</h3>
            </div>
            <div class="card-body">
              <form class="form" role="form" autocomplete="off">
                <div class="form-group">
                  <label for="inputPasswordOld">Current Password</label>
                  <input
                    v-model="currentpassword"
                    type="password"
                    class="form-control"
                    id="inputPasswordOld"
                    required=""
                  />
                </div>
                <div class="form-group">
                  <label for="inputPasswordNew">New Password</label>
                  <input
                    v-model="newpassword"
                    type="password"
                    class="form-control"
                    id="inputPasswordNew"
                    required=""
                  />
                  <span class="form-text small text-muted">
                    The password must be 8-20 characters, and must
                    <em>not</em> contain spaces.
                  </span>
                </div>
                <div class="form-group">
                  <label for="inputPasswordNewVerify">Confirm Password</label>
                  <input
                    v-model="cnewpassword"
                    type="password"
                    class="form-control"
                    id="inputPasswordNewVerify"
                    required=""
                  />
                  <span class="form-text small text-muted">
                    To confirm, type the new password again.
                  </span>
                </div>
                <div class="form-group">
                  <p class="success" v-if="changesuccessfull">
                    Password has been chaged sucessfully!
                  </p>
                </div>
                <div class="form-group">
                  <p class="error" v-if="isError">
                    {{ this.error }}
                  </p>
                </div>
                <div class="form-group">
                  <button
                    @click="changepassword"
                    type="button"
                    class="btn btn-lg float-right"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  Name: "Fail",
  data: function() {
    return {
      currentpassword: "",
      newpassword: "",
      cnewpassword: "",
      changesuccessfull: false,
      isError: false,
      error: "",
    };
  },

  methods: {
    async changepassword() {
      axios
        .post("change-password", {
          old_password: this.currentpassword,
          new_password: this.newpassword,
          confirm_password: this.cnewpassword,
        })
        .then((response) => {
          if (response.data.status_code == 200) {
            this.changesuccessfull = true;
          }
        })
        .catch((err) => {
          this.isError = true;
          this.error = err.response.data.message;
        });

      this.isError = false;
      this.changesuccessfull = false;
      this.email = "";
      this.newpassword = "";
      this.cnewpassword = "";
    },
  },
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

.mainform {
  display: flex;
  justify-content: center;
  margin-top: 140px;
  margin-bottom: 140px;
}

.btn {
  background-color: #004898;
  color: white;
}

.card-header {
  background-color: #004898;
}

.success {
  color: green;
  text-align: center;
}

.error {
  color: red;
  text-align: center;
}
</style>
