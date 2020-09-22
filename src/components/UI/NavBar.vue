<template>
  <!-- <div> -->
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Eric's Blog</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item href="/">Dashboard</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item href="/login">Sign in</b-dropdown-item>
          <b-dropdown-item @click="logout" v-if="authenticated">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- </div> -->
</template>

<script>
import { auth } from "../firebase/firebaseInit";
import useAuth from "../../store/modules/auth";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const { authenticated, logout } = useAuth();
    // const auth = authenticated;
    console.log(authenticated);
    // console.log(logout);
    return { authenticated, logout };
  },
  // methods: {
  //   logout() {},
  // },
};
</script>

<style scoped>
#navbar-title {
  font-size: 3rem;
  /* color: black; */
}
.navbar-burger {
  font-size: 3rem;
}
.navbar-item {
  font-size: 1.5rem;
}
</style>