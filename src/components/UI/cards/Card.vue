<template>
  <div class>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <router-link :to="{name: 'view-post', params:{post_id: post_id  }}">
          <img class="card-img-top" :src="thumbnail" alt />
        </router-link>
        <h5 class="card-title">{{title}}</h5>

        <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>

        <p class="card-text">{{description}}</p>
        <router-link :to="{name: 'view-post', params:{post_id: post_id  }}">View Blog</router-link>
        <br />
        <small>Post # {{post_id}}</small>
      </div>
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
a:link {
  text-decoration: none;
}
</style>