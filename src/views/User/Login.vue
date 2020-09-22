<template>
  <div class="container">
    <div class="loginBox">
      <h1 class="title">Sign in</h1>
      <form @keydown.enter="signIn">
        <label for="email">Email:</label>
        <input id="email" type="text" v-model="email" placeholder="email@email.com" />
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" placeholder="password" />
        <p class="error" v-if="error">{{error}}</p>
        <input class="submitBtn" type="submit" @click="signIn" value="Sign in" />
      </form>
    </div>
  </div>
</template>

<script>
// import { ui } from "../../components/firebase/firebaseInit";
// import firebase from "firebase/app";
// import * as firebaseui from "firebaseui";
import useAuth from "../../store/modules/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const { error, login } = useAuth();
    // console.log(error);
    return { error, login };
  },
  methods: {
    signIn(event) {
      event.preventDefault();
      this.login(this.email, this.password);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: black;
}
.loginBox {
  border: 1px solid black;
  background-image: linear-gradient(white, gray);
}
.title {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 500px;
}
input {
  /* margin-top: 5px; */
  margin-bottom: 10px;
}
.submitBtn {
  width: 30%;
}
.error {
  color: red;
  font-size: 1.25rem;
}
</style>