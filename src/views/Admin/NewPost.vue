<template>
  <div>
    <h3>New Post!</h3>
    <form class="newPost">
      <input v-model="post_id" type="text" placeholder="post id" />
      <input v-model="title" type="text" placeholder="Title" />
      <input v-model="subtitle" type="text" placeholder="Sub-Title" />
      <input v-model="thumbnail" type="text" placeholder="Thumbnail link" />
      <input v-model="description" type="text" placeholder="Description" />
      <input v-model="link" type="text" placeholder="links" />
      <input v-model="post_image" type="text" placeholder="post_image" />
    </form>
  </div>
</template>

<script>
export default {
  name: "newPost",
  data() {
    return {
      post_id: null,
      title: null,
      subtitle: null,
      thumbnail: null,
      description: null,
      link: null,
      post_image: null,
    };
  },
};
</script>

<style scoped>
.newPost {
  display: inline-grid;
  /* flex-direction: inline; */
}
</style>