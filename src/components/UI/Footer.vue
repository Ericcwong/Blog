<template>
  <footer class="footer">
    <div class="navigation">
      <h1>Navigation</h1>
      <nav>
        <button>
          <router-link to="/">Home</router-link>
        </button>
        <button>
          <router-link to="/blogs">Blogs</router-link>
        </button>
        <button>
          <router-link to="/about">About</router-link>
        </button>
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
}
.content {
  text-align: center;
  flex: 1;
}
.navigation {
  text-align: center;
  flex: 1;
}
</style>
