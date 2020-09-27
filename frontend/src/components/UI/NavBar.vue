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
          <b-nav-item v-if="userStatus" to="/admin/new-post"
            >New Post</b-nav-item
          >
          <b-nav-item href="/about">About</b-nav-item>
          {{ userStatus }}
        </b-navbar-nav>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item v-if="userStatus" to="/admin"
            >Admin Dashboard</b-dropdown-item
          >
          <b-dropdown-item v-if="userStatus" @click="logout"
            >Logout</b-dropdown-item
          >

          <b-dropdown-item v-if="!userStatus" to="/login"
            >Sign in</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <!-- </div> -->
</template>

<script>
import { auth } from "../firebase/firebaseInit";
import { mapGetters } from "vuex";
export default {
  computed: {
    // authenticated() {
    //   return this.$store.state.auth.authenticated;
    // },
    ...mapGetters(["userStatus"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutActions");
    },
  },
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