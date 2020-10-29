<template>
  <div class="container">
    <div class="createPost">
      <h3>New Post!</h3>
      <form class="newPost" @keydown.enter="createNewPost">
        <input
          class="postInput"
          v-model="title"
          type="text"
          placeholder="Title"
        />
        <input
          class="postInput"
          v-model="subtitle"
          type="text"
          placeholder="Sub-Title"
        />
        <input
          class="postInput"
          v-model="link"
          type="text"
          placeholder="links"
        />
        <b-form-textarea
          id="textarea"
          class="postInput"
          v-model="description"
          type="text"
          placeholder="Description"
          rows="10"
          cols="600"
        ></b-form-textarea>
        <div class="postImage">
          <PhotoUpload @selectedImages="updateSelectedImages" />

          <label for="thumbnail">Thumbnail</label>
          <input
            v-if="!thumbnail"
            id="thumbnail"
            type="file"
            @change="onFileChange"
            placeholder="Add images"
          />

          <div class="formButtons" v-else>
            <b-button @click="removeImage">Remove Thumbnail</b-button>
            <b-button @click="addPost" class="btn btn-primary"
              >Add Post!</b-button
            >
          </div>
        </div>
        <p style="color: red">{{ error }}</p>
      </form>
    </div>
    <div class="previewCard">
      <h3>Post Preview</h3>
      <Card
        :title="this.title"
        :subtitle="this.subtitle"
        :thumbnail="this.thumbnail"
        :picutres="this.pictures"
        :link="this.link"
        :description="this.description"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/UI/cards/Card";
import PhotoUpload from "@/components/UI/Photo/PhotoUpload";
import db, { storage } from "../../components/firebase/firebaseInit";
export default {
  name: "newPost",
  components: {
    Card,
    PhotoUpload,
  },
  data() {
    return {
      title: null,
      subtitle: null,
      thumbnail: null,
      description: null,
      link: null,
      pictures: [],
      error: null,
    };
  },
  methods: {
    addPost() {
      db.collection("posts")
        .doc()
        .set({
          title: this.title,
          subtitle: this.subtitle,
          thumbnail: this.thumbnail,
          description: this.description,
          link: this.link,
        })
        .then((docRef) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
    //onFileChange, createImage, and removeImage //
    //are for testing and seeing the thumbnail  //
    //image                                    //
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let thumbnail = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage(e) {
      this.thumbnail = "";
      this.error = "";
    },
    updateSelectedImages(images) {
      this.pictures.push(images);
      console.log(this.pictures);
    },
  },
};
</script>

<style scoped>
.newPost {
  display: inline-grid;
  margin-right: 30px;
  /* flex-direction: inline; */
}
label {
  display: flex;
}
form {
  width: 40vw;
}
.card {
  margin: 0 auto;
  max-width: 100%;
}
.container {
  border-radius: 5px;
  /* background-color: #f2f2f2; */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
}
.postInput {
  max-width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  max-width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.formButtons {
  display: flex;
  justify-content: space-between;
}
.postImage {
  border: 1px solid #ccc;
}
/* styling for mobile */
@media screen and (max-width: 950px) {
  .container {
    display: inline;
    max-width: 100vw;
  }
}
</style>
