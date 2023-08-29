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
    const sliderStep = 154
    return {
      carousel,
      left () {
        if (carousel.value) {
          const step = Math.round(carousel.value.scrollLeft / sliderStep) - 1
          carousel.value.scrollLeft = step * sliderStep + 7
        }
      },
      right () {
        if (carousel.value) {
          const step = Math.round(carousel.value.scrollLeft / sliderStep) + 1
          carousel.value.scrollLeft = step * sliderStep + 7
        }
      },
      rightToEnd () {
        if (carousel.value) carousel.value.scrollLeft = 1000
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

    downloadMoreMovies () {
      store.dispatch('downloadMoreMovies')
    }

  },

  watch: {
    isLastPageMoviesLoaded (newV, prev) {
      if (newV && !prev) {
        setTimeout(this.rightToEnd, 100)
      }
    }
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
            :is-select="selectMovies.id === movie.id"
            :class="{'active-movies': selectMovies.id === movie.id}"
            :name="movie.title"
            :img="movie.poster"
            :score="movie.imdb_rating"
            :key="movie.id"
            @click="setSelectMovies(movie)"
          />
        </div>
        <load-more v-if="!isLastPageMoviesLoaded" class="card c-pointer load-more" @click="downloadMoreMovies"/>
      </div>
    <icon-arrow-right width="34px" height="34px" class="arrow-right" @click="right"/>
  </section>
</template>

<style scoped>

.c-pointer {
  cursor: pointer;
}

.wrapper-card {
  height: 300px;
  box-sizing: border-box;
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  margin: 0;
}

.load-more {
  min-width: 140px;
  min-height: 280px;
  width: 140px;
}

.carousel-container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
}

.carousel {
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  width: max-content;
  max-width: max-content;
  scroll-behavior: smooth;
  height: max-content;
  justify-content: start;
  align-items: end;
  padding: 0 10px 0;
}


.card {
  margin: 20px 7px 0;
}

.active-movies {
  margin: 0 7px 0;
}

.arrow-left, .arrow-right {
  cursor: pointer;
  position: absolute;
  top: calc(50% - 1px);
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
@media screen and (max-width: 1895px) {
  .carousel {
    max-width: calc(154px * 9 - 3px);
  }
}


@media screen and (max-width: 1741px) {
  .carousel {
    max-width: calc(154px * 8 - 3px);
  }
}


@media screen and (max-width: 1587px) {
  .carousel {
    max-width: calc(154px * 7 - 3px);
  }
}

@media screen and (max-width: 1433px) {
  .carousel {
    max-width: calc(154px * 6 - 3px);
  }
}

@media screen and (max-width: 1279px) {
  .carousel {
    max-width: calc(154px * 5 - 3px);
  }
}

@media screen and (max-width: 1100px) {
  .carousel {
   max-width: calc(147px * 4 - 3px);
  }
}

</style>