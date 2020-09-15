<template>
  <div>
    <section id="firebaseui-auth-container"></section>
  </div>
  <!-- <div class="container">
    <div class="loginBox">
      <h3>Login</h3>
      <form @keydown.enter="login" autocomplete="on">
        <div class="inputField">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <input v-model="email" type="text" id="email" placeholder="Email" />
        </div>
        <div class="inputField">
          <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
          <input v-model="password" type="password" id="password" placeholder="Password" />
        </div>
        <b-button @click="login" class="btn btn-primary">Sign In</b-button>
      </form>
    </div>
  </div>-->
</template>

<script>
import { ui } from "../../components/firebase/firebaseInit";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // login(e) {
    //   console.log("clicked");
    //   auth.signInWithEmailAndPassword(this.email, this.password).then(
    //     () => {
    //       this.$router.push("/admin");
    //     },
    //     (error) => {
    //       alert(error.message);
    //     }
    //   );
    //   event.preventDefault();
    // },
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/admin",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.loginBox {
  border: 1px solid gray;
}
.inputField {
  margin: 20px;
}
.icon {
  margin-right: 10px;
}
</style>