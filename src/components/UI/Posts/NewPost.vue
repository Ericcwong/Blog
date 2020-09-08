<template>
  <div class="newPost">
    <h3>New Post!</h3>
    <form>
      <input v-model="post_id" type="text" placeholder="post id" />
    </form>
  </div>
</template>

<script>
export default {
  name: "newPost",
};
</script>

<style>
</style>