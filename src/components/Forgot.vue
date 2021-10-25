<template>
  <div>
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div class="container">
        <div class="card login-card">
          <div class="row no-gutters">
            <div class="col-md-5">
              <img
                src="../assets/logo-4.png"
                alt="login"
                class="login-card-img"
              />
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <!-- <p class="login-card-description">Sign into your account</p> -->

                <form @submit.prevent="handleSubmit">
                  <div v-if="message" class="alert alert-denger" role="alert">
                    {{ message }}
                  </div>
                  <error v-if="error" :error="error" />

                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="Email address"
                      v-model="email"
                    />
                  </div>

                  <button class="btn btn-block login-btn mb-2" type="submit">
                    Reset Password
                  </button>
                </form>
                <router-link to="/" class="text-reset  font-xsss w-100 fw-500 text-success">&#8592; Back To Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Error from "./Error.vue";
export default {
  name: "Forgot",
  components: {
    Error,
  },
  data() {
    return {
      email: "",
      message: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("forgot-password", {
          email: this.email,
        });
        this.message = "email sent succes";
        this.error = "";
      } catch (e) {
        this.error = "error";
        this.message = "";
      }
    },
  },
};
</script>csx 



<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>