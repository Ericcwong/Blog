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
    <div class="card-footer text-muted">
      <b-button>
        <router-link :to="{name: 'view-post', params:{title: title  }}">View Blog</router-link>
      </b-button>
      <b-button v-if="editPost" @click="editPost">Edit</b-button>
      <b-button v-if="deletePost" @click="deletePost">Delete</b-button>
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
    deletePost: {
      type: Function,
    },
    editPost: {
      type: Function,
    },
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
a {
  text-decoration: none;
  color: white;
}
a:hover,
button:hover {
  text-decoration: none;
  color: black;
}
</style>