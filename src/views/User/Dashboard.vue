<template>
  <div class="dashboard">
    <div class="dashboardTitle">
      <video-background
        src="/img/UI/waveBackground.mp4"
        :sources="[
          { src: '/img/UI/waveBackground.mp4', res: 900, autoplay: true },
          {
            src: '/img/UI/waveBackground.mp4',
            res: 638,
            autoplay: true,
          },
        ]"
        id="background"
      >
        <div class="content">
          <h2 class="title">Life's Rollercoaster</h2>
          <p>
            Life has been an eventful with all its highs and lows. With this
            blog I hope to log all events that has or have been happening.
          </p>
        </div>
        <div class="scrollDownIcon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </video-background>
    </div>

    <!-- To clear any confusions
      -- v-for="Post of posts"                    
      -- posts is coming from setup()'s loadPost()                
      -- Post is whats being passed down as props-->
    <div id="cards" class="cards">
      <Card
        v-for="post of state.posts"
        :key="post.id"
        :title="post.title"
        :subtitle="post.subtitle"
        :thumbnail="post.thumbnail"
        :post_image="post.post_image"
        :link="post.link"
        :description="post.description"
        :viewPost="viewPost"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/UI/cards/Card.vue";
import usePosts from "../../store/modules/posts";
export default {
  name: "Dashboard",
  components: {
    Card,
  },
  setup() {
    const { state, loadPost, viewPost } = usePosts();
    loadPost();
    // console.log(state);
    return { state, viewPost };
  },
};
</script>

<style scoped>
.dashboard {
  height: 100%;
  min-height: 100vh;
  text-align: center;
}
.dashboardTitle {
  height: 100%;
}
#background {
  max-height: 100vh;
  height: 100vh;
}
.content {
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  color: white;
}
.title {
  color: white;
  font-size: 6vw;
  text-shadow: 2px 2px gray;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cards {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media only screen and (max-width: 1200px) {
  /* .content {
    font-size: 5vw;
  }
  .title {
    font-size: 8vw;
  } */
  .cards {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .card {
    width: 100%;
  }
  .content {
    width: 70%;
  }
}
@media only screen and (max-width: 535px) {
  #background {
    max-height: 40vh;
  }
}
</style>