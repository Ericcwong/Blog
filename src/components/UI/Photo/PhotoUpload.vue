<template>
  <div class="pictureUpload">
    <label for="upload-pictures">Upload pictures</label>
    <input @change="uploadImages" id="upload-pictures" type="file" multiple />
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    uploadImages(e) {
      let fileSelected = e.target.files[0];
      let filesSelected = e.target.files;
      for (let i = 0; i < filesSelected.length; i++) {
        console.log(e.target.files[i]);
        // this.files.push();
      }
      console.log(filesSelected);
      console.log(e);
    },
  },
};
</script>

<style></style>
