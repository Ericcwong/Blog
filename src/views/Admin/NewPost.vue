<template>
  <div class="container">
    <div class="createPost">
      <h3>New Post!</h3>
      <form class="newPost" @keydown.enter="createNewPost">
        <input v-model="title" type="text" placeholder="Title" />
        <input v-model="subtitle" type="text" placeholder="Sub-Title" />
        <input v-model="link" type="text" placeholder="links" />
        <label for="upload-pictures" @change="onFileSelected">Upload pictures</label>
        <input id="upload-pictures" type="file" multiple />
        <textarea v-model="description" type="text" placeholder="Description"></textarea>

        <label for="files">Thumbnail</label>
        <input
          v-if="!thumbnail"
          id="files"
          type="file"
          @change="onFileChange"
          placeholder="Add images"
        />

        <div class="formButtons" v-else>
          <b-button @click="removeImage">Remove Thumbnail</b-button>
          <b-button @click="addPost" class="btn btn-primary">Add Post!</b-button>
        </div>
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
import db, { storage } from "../../components/firebase/firebaseInit";
export default {
  name: "newPost",
  components: {
    Card,
  },
  data() {
    return {
      post_id: null,
      title: null,
      subtitle: null,
      thumbnail: null,
      description: null,
      link: null,
      pictures: null,
    };
  },
  methods: {
    addPost() {
      db.collection("posts").doc(this.title)
        .set({
          title: this.title,
          subtitle: this.subtitle,
          thumbnail: this.thumbnail,
          description: this.description,
          link: this.link,
          pictures: this.pictures,
        })
        .then((docRef) => {
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
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
    },
    onFileSelected(event) {
      this.pictures = event.target.files;
    },
  },
};
</script>

<style scoped>
.newPost {
  display: inline-grid;
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
}
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
}
input {
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
/* Needs styling for mobile */
</style>