<template>
  <div class="container">
    <div class="loginBox">
      <h3>Login</h3>
      <form>
        <div class="inputField">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <input v-model="email" type="text" id="email" placeholder="Email" />
        </div>
        <div class="inputField">
          <font-awesome-icon :icon="['fas', 'lock']" class="icon" />
          <input v-model="password" type="password" id="password" placeholder="Password" />
        </div>
        <b-button @click="login" class="btn btn-primary">Login</b-button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../components/firebase/firebaseInit";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(e) {
      auth.signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          alert("Welcome back Eric");
          this.$router.push("/");
        },
        (error) => {
          alert(error.message);
        }
      );
      event.preventDefault();
    },
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