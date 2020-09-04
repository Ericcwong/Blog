<template>
  <div class="card">
    <div class="card-body">
      <div class="card-header">
        <h5 class="card-title">{{title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      </div>
      <router-link :to="{name: 'view-post', params:{post_id: post_id  }}">
        <img class="card-img-top" :src="thumbnail" alt />
      </router-link>
    </div>

    <p class="card-text">{{description}}</p>
    <div class="card-footer text-muted">
      <router-link :to="{name: 'view-post', params:{post_id: post_id  }}">View Blog</router-link>
      <p>Post # {{post_id}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post_id: Number,
    title: String,
    subtitle: String,
    thumbnail: String,
    post_image: String,
    link: String,
    description: String,
  },
};
</script>

<style scoped>
.card {
  width: 20rem;
  border: 1px solid darkgray;
  box-shadow: 3px 3px 2px gray;
}
.card-img-top {
  width: 100%;
  height: 200px;
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