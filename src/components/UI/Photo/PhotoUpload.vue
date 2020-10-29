<template>
  <div class="pictureUpload">
    <label for="upload-pictures">Upload pictures</label><br /><progress
      value="0"
      max="100"
      id="uploader"
    >
      0%</progress
    ><br />
    <input @change="uploadImages" id="upload-pictures" type="file" multiple />
  </div>
</template>

<script>
import { storage } from "@/components/firebase/firebaseInit";
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
        let task = e.target.files[i];
        this.$emit("selectedImages", task);
      }
    },
  },
};
</script>

<style></style>
