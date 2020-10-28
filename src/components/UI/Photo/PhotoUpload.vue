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
        console.log(e.target.files[i].name);
        let storageRef = storage.ref("images/" + e.target.files[i].name);
        let task = storageRef.put(e.target.files[i]);
        task.on("state_changed", function progress(snapshot) {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        });
      }
    },
  },
};
</script>

<style></style>
