<template>
  <div class="pictureUpload">
    <label for="upload-pictures">Upload pictures</label>
    <input @change="uploadImages" id="upload-pictures" type="file" multiple />
  </div>
</template>

<script>
export default {
  methods: {
    uploadImages(e) {
      let fileSelected = e.target.files[0];
      console.log(e);
    },
  },
};
</script>

<style></style>
