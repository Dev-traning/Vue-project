<template>
  <div class="signup-container">
    <div class="signUp">
      <div class="signUpContent">
        <h2>Create an account</h2>
        <h4>Please enter credentials for sign up</h4>
        <form @submit.prevent="signUp()" @keyup.enter="signUp()">
          <input
            type="name"
            placeholder="Enter Full name"
            v-model="full_name"
            ref="firstInput"
          />
          <div v-if="error_name" class="error">
            <span>{{ error_name }}</span>
          </div>
          <input type="email" placeholder="Email" v-model="email" />
          <div v-if="error_email" class="error">
            <span>{{ error_email }}</span>
          </div>
          <input type="phone" placeholder="Phone No" v-model="phoneno" />
          <div v-if="error_phone" class="error">
            <span>{{ error_phone }}</span>
          </div>
          <input type="password" placeholder="Password" v-model="password" />
          <div v-if="error_password" class="error">
            <span>{{ error_password }}</span>
          </div>
          <div class="btns">
            <button type="button" @click="signUp()">Sign Up</button>
            <button type="button" id="google">
              <div class="googleContent">
                <img src="./assets/google_logo.png" alt="Image" />Login with
                Google
              </div>
            </button>
          </div>
        </form>
        <div class="signin">
          <p>Already have an account?</p>
          <router-link to="/login">Sign in now</router-link>
        </div>
      </div>
    </div>
    <div class="signUpImg">
      <div class="logo_title">
        <h1>Magaswala</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";

export default {
  name: "SignUpPage",
  data() {
    return {
      full_name: "",
      error_name: "",
      email: "",
      error_email: "",
      phoneno: "",
      error_phone: "",
      password: "",
      error_password: "",
      user_type: "1",
      error_userType: "",
    };
  },
  methods: {
    async signUp() {
      if (this.full_name === "") {
        this.error_name = "Invalid Name !!";
        setTimeout(() => {
          this.error_name = "";
        }, 3000);
      } else {
        this.error_name = "";
      }

      if (this.email === "") {
        this.error_email = "Invalid Email-Id !!";
        setTimeout(() => {
          this.error_email = "";
        }, 3000);
      } else {
        this.error_email = "";
      }

      if (this.phoneno === "") {
        this.error_phone = "Invalid Phone Number !!";
        setTimeout(() => {
          this.error_phone = "";
        }, 3000);
      } else {
        this.error_phone = "";
      }

      if (this.password === "") {
        this.error_password = "Invalid Password !!";
        setTimeout(() => {
          this.error_password = "";
        }, 3000);
      } else {
        this.error_password = "";
      }

      if (
        this.full_name !== "" &&
        this.email !== "" &&
        this.phoneno !== "" &&
        this.password !== "" &&
        this.user_type !== ""
      ) {
        this.error_name = "";
        this.error_email = "";
        this.error_phone = "";
        this.error_password = "";
        this.error_userType = "";

        const response = await axios
          .post(
            `register?name=${this.full_name}&email=${this.email}&phoneno=${this.phoneno}&password=${this.password}&user_type=${this.user_type}`
          )
          .catch((e) => e.response);
        const result = response.data;

        if (result.status === true) {
          const data = { email: result.data.email, otp: result.data.email_otp };
          await Swal.fire({
            title: "Registration Complete",
            text: "Your data has benn resgistered successfully",
            icon: "success",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          this.$router.push({
            name: "VerifyEmailPage",
            params: {
              object: CryptoJS.AES.encrypt(
                JSON.stringify(data),
                "12345678"
              ).toString(),
            },
          });
        } else {
          await Swal.fire({
            title: "Registration Failed",
            text: "Invalid Credentials",
            icon: "error",
            customClass: {
              popup: "my-swal-popup", // Make sure this matches your CSS class name
            },
          });
          if (result.message.includes("email")) {
            this.error_email = result.message;
          } else if (result.message.includes("password")) {
            this.error_password = result.message;
          } else {
            console.error(result.message);
          }
        }
      }
    },
  },
  mounted() {
    this.$refs.firstInput.focus();
  },
};
</script>

<style>
.my-swal-popup {
  width: 500px; /* Set the desired width */
  max-width: 60%; /* Set the maximum width if needed */
  font-size: 1.6rem; /* Adjust font size if needed */
}
</style>

<style scoped>
.signup-container {
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  background-color: var(--background-color);
}

.signUp {
  width: 50%;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.signUpContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.2rem solid var(--border-color);
  padding: 2rem;
  background-color: var(--btn-font-color);
}

.signUpContent h2 {
  font-size: 2.6rem;
  font-weight: 700;
}

.signUpContent h4 {
  font-size: 1.6rem;
  font-weight: 400;
  opacity: 0.6;
}

.signUpContent form {
  min-width: 28rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
}

.signUpContent input {
  min-width: 100%;
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid var(--border-color);
  border-radius: 0.6rem;
  font-size: 1.3rem;
}

.btns {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 2.8rem;
}

.btns button {
  border: 0.1rem solid var(--primary-color);
  border-radius: 0.6rem;
  padding: 0.7rem 2.6rem;
  color: white;
  font-size: 1.4rem;
  background-color: var(--primary-color);
  cursor: pointer;
}

#google {
  background-color: transparent;
  border: 0.1rem solid black;
  color: black;
  padding: 0.5rem 2.6rem;
}

.googleContent img {
  width: 2rem;
}

.googleContent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.signin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
}

.signin p {
  font-size: 1.4rem;
  margin-bottom: 0 !important;
  opacity: 0.6;
}

.signin a {
  font-size: 1.4rem;
  margin-left: 0.4rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--primary-color);
}

.signUpImg {
  width: 50%;
  height: 100%;
  background: url(./assets/laddo_img_2.jpeg) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo_title h1 {
  font-size: 4.4rem;
  font-weight: 700;
  color: white;
  font-family: "Merienda", cursive;
  font-style: italic;
  margin-bottom: 2rem;
}

.error {
  width: 100%;
  display: flex;
  align-items: flex-start;
  font-size: 1.3rem;
  color: red;
  font-weight: 300;
  padding: 0 0.2rem;
}

@media only screen and (max-width: 576px) {
  .signup-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .signUp {
    width: 95%;
    height: 60%;
    z-index: 5;
  }

  .signUpImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .signUpContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .signUpContent input {
    border: 0.2rem solid var(--border-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 577px) and (max-width: 768px) {
  .signup-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .signUp {
    width: 50%;
    height: 60%;
    z-index: 5;
  }

  .signUpImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .signUpContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .signUpContent input {
    border: 0.2rem solid var(--border-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 769px) and (max-width: 992px) {
  .signup-container {
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .signUp {
    width: 50%;
    height: 75%;
    z-index: 5;
  }

  .signUpImg {
    width: 90%;
    height: 20vh;
    position: absolute;
    width: 100%;
    height: inherit;
    z-index: 0;
    filter: blur(8px);
    -webkit-filter: blur(4px);
  }

  .logo_title {
    display: none;
  }

  .signUpContent {
    height: auto;
    color: var(--btn-font-color);
    border: 0.3rem solid var(--border-color);
    background: transparent;
  }

  .signUpContent input {
    border: 0.2rem solid var(--border-color);
  }

  #google {
    background-color: var(--btn-font-color);
    border: 0.1rem solid var(--border-color);
  }
}

@media only screen and (min-width: 993px) and (max-width: 1200px) {
}

@media only screen and (min-width: 1201px) and (max-width: 1400px) {
}
</style>
