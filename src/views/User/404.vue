<template>
  <div class="container-fluid">
    <div class="errorBox">
      <div class="errorText">
        <!-- <div class="error"> -->
        <h1>Seems like the page you are looking for doesnt exist.</h1>
        <h2>
          Back to
          <router-link to="/">home!</router-link>
        </h2>
        <!-- </div> -->
      </div>

      <img class="errorImage" src="/img/UI/dog.png" alt />
    </div>
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
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.errorBox {
  /* display: grid; */
  height: 50vh;
  grid-template-columns: [line1]50% [line2]50%;
  /* grid-template-rows: [row1-start]50% [row1-end]50%; */
  justify-content: center;
  align-content: center;
}
/* .errorText {
  font-size: 3rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
.errorImage {
  max-width: 100%;
  max-height: 100%;
  /* grid-column-start: line1;
  grid-column-end: line2; */
}
@media screen and (max-width: 750px) {
}
</style>