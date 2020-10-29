<template>
  <div class="">
    <div id="app">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped>
#app {
  flex: 1 0 auto;
}
</style>
