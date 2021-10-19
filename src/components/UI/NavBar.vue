<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand to="/">Eric's Blog</b-navbar-brand>

    <!-- Nav bar will collapse on certain width -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <!-- <b-nav-item to="/blogs">Blogs</b-nav-item> -->
          <b-nav-item v-if="userStatus" to="/admin/new-post"
            >New Post</b-nav-item
          >
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content> Admin </template>
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
