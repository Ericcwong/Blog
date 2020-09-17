<template>
  <div class="container-fluid">
    <h1>Seems like the page you are looking for doesnt exist.</h1>
    <h2>
      Back to
      <router-link to="/">home!</router-link>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  color: white;
  height: 100vh;
  text-align: center;
  min-width: 100%;
  margin: 0 !important;
  background: url("/img/UI/error.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% auto;
}
@media screen and (max-width: 750px;);
</style>