<template>
  <section class="card">
    <div class="card-body">
      <div class="card-header">
        <h5 class="card-title">{{title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      </div>
      <router-link :to="{name: 'view-post', params:{title: title  }}">
        <img class="card-img-top" :src="thumbnail" alt />
      </router-link>
    </div>

    <p class="card-text">{{description}}</p>
    <div class="card-footer text-muted">
      <router-link :to="{name: 'view-post', params:{title: title  }}">View Blog</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    thumbnail: String,
    // post_image: Array,
    link: String,
    description: String,
  },
};
</script>

<style scoped>
.card {
  width: 500px;
  border: 1px solid darkgray;
  box-shadow: 3px 3px 2px gray;
  margin: 1.5rem;
}
.card-img-top {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: 360px;
  /* object-fit: contain; */
  border-bottom: 1px solid lightgray;
}
.card-body {
  padding: 0;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
}
a:link {
  text-decoration: none;
}
</style>