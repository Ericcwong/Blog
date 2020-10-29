<template>
  <div class="container">
    <div class="createPost">
      <h3>Edit Post!</h3>
      <form class="newPost" @keydown.enter="createNewPost">
        <input v-model="post.title" type="text" placeholder="Title" />
        <input v-model="post.subtitle" type="text" placeholder="Sub-Title" />
        <input v-model="post.link" type="text" placeholder="links" />
        <!-- <label for="upload-pictures" @change="onFileSelected">Upload pictures</label> -->
        <input id="upload-pictures" type="file" multiple />
        <textarea
          v-model="post.description"
          type="text"
          placeholder="Description"
          rows="10"
          cols="600"
        ></textarea>
        <div class="formUpdateButton">
          <b-button @click="updatePost">Update</b-button>
          <b-button @click="cancelUpdate">Cancel</b-button>
        </div>
        <br />
        <label for="files">Thumbnail</label>
        <input
          v-if="!post.thumbnail"
          id="files"
          type="file"
          @change="onFileChange"
          placeholder="Add images"
        />
        <div class="formButtons" v-else>
          <b-button @click="removeThumbnail">Remove Thumbnail</b-button>
        </div>
        <div class="error" v-if="error !== null">
          {{ error }}
        </div>
      </form>
    </div>
    <div class="preview">
      <div class="previewCard">
        <h3>Card Preview</h3>
        <Card
          :title="post.title"
          :subtitle="post.subtitle"
          :thumbnail="post.thumbnail || this.thumbnail"
          :picutres="post.pictures"
          :link="post.link"
          :description="post.description"
        />
      </div>
      <div class="previewPost">
        <div class="image">
          <img class="postImage" :src="post.thumbnail" alt />
        </div>
        <div class="postHeader">
          <h3 class="postHeaderTitle">{{ post.title }}</h3>
        </div>
        <div class="postSubHeader">
          <h4>{{ post.subtitle }}</h4>
        </div>

        <div class="postDescription">
          <!-- <a :href="link">Link</a> -->
          <pre class="mt-3 mb-4">{{ post.description }}</pre>
          <!-- <img :src="pictures" alt /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/UI/cards/Card";
import db, { storage } from "../../components/firebase/firebaseInit";
export default {
  data() {
    return {
      post: {},
      thumbnail: null,
      error: null,
    };
  },
  components: {
    Card,
  },
  created() {
    let dbRef = db.collection("posts").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.post = doc.data();
        console.log(this.post);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    updatePost(event) {
      event.preventDefault();
      db.collection("posts")
        .doc(this.$route.params.id)
        .update({
          post: this.post,
          thumbnail: this.thumbnail,
        })
        .then(() => {
          console.log("Post updated!");
          this.$router.push("/admin");
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
    cancelUpdate() {
      this.$router.push("/admin");
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      console.log(files);
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
    removeThumbnail() {
      this.post.thumbnail = "";
    },
  },
};
</script>

<style scoped>
.newPost {
  display: inline-grid;
  margin-right: 30px;
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
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  /* height: 100vh; */
  /* height: 100%; */
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
.formUpdateButton {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
  font-size: 1.5rem;
}
.preview {
  display: inline-flex;
  flex-wrap: wrap;
}
.previewCard {
  text-align: center;
}
.previewPost {
  border: 1px solid black;
}

/* styling for mobile */
@media screen and (max-width: 950px) {
  .container {
    display: inline;
    max-width: 100vw;
  }
}
</style>
