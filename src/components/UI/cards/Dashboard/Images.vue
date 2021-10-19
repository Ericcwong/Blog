<template>
  <div class="image-container">
    <div class="image" v-for="image in state" :key="image.photo">
      <img :src="image.photo" alt="" class="photo" />
      <p class="photo-description">{{ image.description }}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
export default {
  setup() {
    const state = reactive([
      {
        photo:
          "https://lh3.googleusercontent.com/LVKyfu7O1Txzr383XMvy7hS1rzR43IaH3qgRbldyPKcNJDPNpbUPtXQ7i6I3Tq8BaORRKzsLdF5LMAjX1roflnjBJcajAQnp6OPFUKKB669Oyq2g67vumcWfMsCYxq_IC20mtxFPejk=w2400",
        description: "Wild Cod @Current",
        class: "photo-1",
      },
      {
        photo:
          "https://lh3.googleusercontent.com/UcRaUB69YltaHg3ByS8S4TQ6SUyKhCIkhyRSxSCp8n3S8THt0_zIJrebsYp2TstRmgag-Nj70qbNny4koYOqUkrhPkGc1Jh9-hX2cONh8tlu6kvxWIM_pD_i8DwOWJtMIv0YF85Geh4=w2400",
        description: "Museum visit",
        class: "photo-2",
      },

      {
        photo:
          "https://lh3.googleusercontent.com/ILomHGXzX-2unr-s7P5SvVxGumpDGuk58yuI5gWI5bMnWFZJKjF6wneDaKCp_U1NqTzhNeoU_4IuNa2I37VSFHdxdG1_bsP3dKqwGxtB0zzEPsipoEJLlHvgj_2l0xVtNNaZfKAxvWI=w2400",
        description: "Bee with too much pollen",
        class: "photo-3",
      },
      {
        photo:
          "https://lh3.googleusercontent.com/W4vPkrQsbuerps6rDGx6Bb9D0XmO7DV8rtAmcFyWNIc8rjJM7Me3rH-5wzT-aub3PCiZOyFxI0gBeg8SmNtIgNMKRXEa0TpgFc2aBZk6GSEZIf4cPHPoNcrWepLTM2uEsSfiLXPsgxg=w2400",
        description: "Dinosaur park",
        class: "photo-4",
      },
    ]);
    return { state };
  },
};
</script>

<style scoped>
.image-container {
  display: flex;
  margin-top: 10em;
}
.photo {
  margin-bottom: 10em;
  width: 100%;
  border-radius: 10px;
  border: 1px white solid;
  /* transform: rotate(-10deg); */
  position: relative;
}
.photo:hover {
  transform: scale(1.5);
  transition: transform 400ms ease-in-out;
  transform: rotate(0deg);
}
.photo-description {
  /* transform: rotate(-10deg); */
  position: absolute;
  font-size: 2rem;
  bottom: 1em;
  margin: 0 auto;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.747), transparent);
}
</style>