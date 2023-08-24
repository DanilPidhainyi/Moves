<script lang="ts">
import {defineComponent, Ref, ref} from 'vue'
import MovieCard from "@/components/MovieCard.vue";
import store from "@/store";
import IconArrow from "@/components/IconArrow.vue";
import IconArrowRight from "@/components/IconArrowRight.vue";
import LoadMore from "@/components/LoadMore.vue";


export default defineComponent({
  name: "CarouselSerials",
  components: {LoadMore, IconArrowRight, IconArrow, MovieCard},
  setup() {
    const carousel = ref<HTMLDivElement>()
    return {
      carousel,
      left () {
        if (carousel.value) carousel.value.scrollLeft -= 200
      },
      right () {
        if (carousel.value) carousel.value.scrollLeft += 200
      },

    }
  },
  computed: {
    movies () {
      return store.getters.movies
    },

    selectMovies () {
      return store.getters.selectMovies
    },

    isLastPageMoviesLoaded () {
      return store.getters.isLastPageMoviesLoaded
    }
  },

  methods: {
    setSelectMovies (movie:object) {
      store.commit('setSelectMovies', movie)
    },
  }
})
</script>

<template>
  <section class="wrapper-card">
    <icon-arrow width="34px" height="34px" class="arrow-left" @click="left"/>
      <div class="carousel-container">
        <div class="carousel" ref="carousel">
          <movie-card
              class="c-pointer card"
              v-for="movie in movies"
              :class="{select: selectMovies.id === movie.id}"
              :name="movie.title"
              :img="movie.poster"
              :score="movie.imdb_rating"
              :key="movie.id"
              @click="setSelectMovies(movie)"
          />
        </div>
        <load-more v-if="isLastPageMoviesLoaded" class="card c-pointer"/>
      </div>
    <icon-arrow-right width="34px" height="34px" class="arrow-right" @click="right"/>
  </section>
</template>

<style scoped>

.c-pointer {
  cursor: pointer;
}

.wrapper-card {
  position: relative;
  padding: 0 40px;
  display: flex;
  justify-content: center;
}

.carousel {
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  width: 100%;
  scroll-behavior: smooth;
  transition-delay: 2s;
  height: max-content;
  padding-bottom: 5px;
  justify-content: start;
  align-items: end;
}

.carousel-container {
  display: flex;
  justify-content: center;
  width: calc(152px * 10);
}

.card {
  margin: 0 7px;
}

.arrow-left, .arrow-right {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-left {
  left: 0;
}

.arrow-right {
  right: 0;
}

.select {
  margin-bottom: 18px;
}


@media screen and (max-width: 1720px) {
  .carousel-container {
    width: calc(152px * 9);
  }
}


@media screen and (max-width: 1550px) {
  .carousel-container {
    width: calc(150px * 8);
  }
}

@media screen and (max-width: 1420px) {
  .carousel-container {
    width: calc(150px * 7);
  }
}

@media screen and (max-width: 1280px) {
  .carousel-container {
    width: calc(150px * 6);
  }
}

@media screen and (max-width: 1100px) {
  .carousel-container {
    width: calc(150px * 5);
  }
}

</style>