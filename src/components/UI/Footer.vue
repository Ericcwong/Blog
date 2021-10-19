<template>
  <footer class="footer">
    <div class="navigation">
      <h1>Navigation</h1>
      <nav class="navButtons">
        <b-button class="navButton">
          <router-link to="/">Home</router-link>
        </b-button>
        <b-button class="navButton">
          <router-link to="/blogs">Blogs</router-link>
        </b-button>
        <b-button class="navButton">
          <router-link to="/about">About</router-link>
        </b-button>
      </nav>
    </div>
    <div class="content">
      <h1>Thanks for stopping by!</h1>
      <p class="content-text">
        Although my life isn't the most adventurest and most exciting to read. I
        still want to share my adventures and wacky times. I just want to say
        thanks for checking out my blog
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  background-color: gray;
  color: white;
}
.content {
  text-align: center;
  flex: 1;
}
.navigation {
  text-align: center;
  flex: 1;
}
.navButton {
  margin: 10px;
}
a {
  color: white;
}
a:hover {
  text-decoration: none;
  color: black;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.4rem;
  }
}
</style>
