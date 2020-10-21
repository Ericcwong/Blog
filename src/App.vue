<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer"
export default {
  components: {
    Navbar,
    Footer
  },
};
</script>
<style scoped>
</style>
