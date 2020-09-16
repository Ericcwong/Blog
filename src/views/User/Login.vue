<template>
  <div class="container">
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
import { ui } from "../../components/firebase/firebaseInit";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
export default {
  name: "Login",
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
#firebaseui-auth-container {
  max-width: 100%;
  width: 600px;
}
</style>