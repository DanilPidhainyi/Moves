<script lang="ts">
import {defineComponent} from 'vue'
import MovieCard from "@/components/MovieCard.vue";
import store from "@/store";
import IconStar from "@/components/IconStar.vue";
import {convertTime} from "@/components/covertTime";

export default defineComponent({
  name: "LayoutTablet",
  components: {IconStar, MovieCard},
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
    convertTime,
    setSelectMovies (movie:object) {
      store.commit('setSelectMovies', movie)
    },
  },

})
</script>

<template>
  <div v-if="selectMovies" class="wrapper">
    <section class="moves-container">
      <movie-card
        class="c-pointer card"
        v-for="movie in movies"
        :name="movie.title"
        :img="movie.poster"
        :score="movie.imdb_rating"
        :key="movie.id"
        @click="setSelectMovies(movie)"
      />
    </section>
    <section class="item-container">
        <picture class="background-image">
          <source :srcset="selectMovies.bg_picture" media="(min-width: 1200px)">
          <img :src="selectMovies.bg_picture" alt="">
          <div class="blur"/>
        </picture>
      <div class="pd-16 w-100">
        <div class="d-flex space-between">
          <div class="title">
            <div>{{ selectMovies.title }}</div>
            <div class="year ml-10">({{ selectMovies.release_year }})</div>
          </div>
          <button class="button">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-14">
              <path d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301L0.500001 1.66987C0.500001 0.900072 1.33333 0.418947 2 0.803847L9.5 5.13397Z" fill="white"/>
            </svg>
            <span class="btn-text">Watch trailer</span>
          </button>
        </div>
        <div class="d-flex space-between mt-20">
          <section>
            <div class="description">
              {{ selectMovies.description }}
            </div>
            <div class="mt-24 d-flex row genres">
              <div v-for="(genre, index) in selectMovies.genres" :key="genre.id">
                {{ genre.title }}{{ index < selectMovies.genres.length - 1 ? ',&nbsp;' : '' }}
              </div>
              <svg class="mx-20" width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="0.5" y2="9.5" stroke="#A6A6A6" stroke-linecap="round"/>
              </svg>
              {{ selectMovies.mpa_rating }}
              <svg class="mx-20" width="1" height="10" viewBox="0 0 1 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="0.5" y2="9.5" stroke="#A6A6A6" stroke-linecap="round"/>
              </svg>
              {{ convertTime(selectMovies.duration) }}
            </div>
            <section class="content-right mt-24">
              <div>
                <span>Director: </span>
                <span v-for="(director, index) in selectMovies.directors" :key="director.id" class="name">
                  {{ director.first_name + ' ' + director.last_name }}{{ index < selectMovies.directors.length - 1 ? ',&nbsp;' : '' }}
                </span>
              </div>
              <div class="mt-8">
                <span>Writers: </span>
                <span v-for="(writers, index) in selectMovies.writers" :key="writers.id" class="name">
                  {{ writers.first_name + ' ' + writers.last_name }}{{ index < selectMovies.writers.length - 1 ? ',&nbsp;' : '' }}
                </span>
              </div>
              <div class="mt-8">
                <span>Stars: </span>
                <span v-for="(stars, index) in selectMovies.stars" :key="stars.id" class="name">
                  {{ stars.first_name + ' ' + stars.last_name }}{{ index < selectMovies.stars.length - 1 ? ',&nbsp;' : '' }}
                </span>
              </div>
            </section>
          </section>
          <section>
            <div class="ibdb">
              IBDb rating
            </div>
            <div class="mt-10 score-container">
              <icon-star width="20px" height="20px"/>
              <span class="score">{{ selectMovies.imdb_rating}}</span>
              <span class="ten">/10</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>

.content-right {
  display: flex;
  flex-direction: column;
  width: 400px;
  font-size: 16px;
  font-style: normal;
}

.content-right span {
  color: var(--grey, var(--on-primary, #E2E2E2));
  font-family: Rubik,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  display: inline;
}

.content-right .name {
  color: var(--on-primary, #FFF);
  font-family: Rubik,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.mt-24 {
  margin-top: 24px;
}

.mt-8 {
  margin-top: 8px;
}

.pd-16 {
  padding: 16px;
  box-sizing: border-box;
}

.btn-text {
  color: var(--white, var(--on-primary, #FFF));
  font-family: Rubik,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;
}

.w-100 {
  width: 100%;
}

.mr-14 {
  margin-right: 14px;
}

.space-between {
  justify-content: space-between;
}

.wrapper {
  background: var(--black, #161616);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;
}

.card {
  margin: 12px 6px;
}

.moves-container {
  display: flex;
  max-width: 470px;
  width: max-content;
  box-sizing: border-box;
  padding: 4px 12px;
  align-items: flex-start;
  align-content: flex-start;
  flex-shrink: 0;
  flex-wrap: wrap;
  overflow-y: auto;
}

.item-container {
  display: flex;
  max-width: 100%;
  width: 100%;
  padding: 16px 0px 38px 0px;
  margin: 0;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.background-image {
  width: 100%;
  position: relative;
  box-sizing: inherit;
}

picture source, img {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  vertical-align: top;
}

.blur {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(22, 22, 22, 0.00) 47.99%, #161616 100%);
}

span {
  display: block;
}

.score {
  display: block;
  color: #FFF;
  font-size: 28px;
  line-height: normal;
  margin-left: 6.5px;
}

.ten {
  display: block;
  color: #E2E2E2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5px;
  padding-top: 7px;
}

.mt-20 {
  margin-top: 20px;
}

.ml-10 {
  margin-left: 10px;
}

.title {
  color: #FFF;
  font-family: Krona One,serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: end;
}

.year {
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  padding-bottom: 4px;
}

.description {
  color: var(--on-primary, #FFF);
  max-width: 517px;
  font-family: Rubik, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.genres {
  color: var(--white, var(--on-primary, #FFF));
  font-family: Rubik, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}

.ibdb {
  color: var(--grey, #E2E2E2);
  font-family: Rubik, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}

.score-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

p {
  margin: 0;
  padding: 0;
}

.content-right {
  display: flex;
  flex-direction: column;
  width: 320px;
  font-size: 16px;
  font-style: normal;
  margin-bottom: 62px;
}


.content-right span {
  color: var(--grey, #E2E2E2);
  font-family: Rubik,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.content-right .name {
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}


.mt-32 {
  margin-top: 32px;
}

.button {
  height: 48px;
  width: 180px;
  display: flex;
  padding: 16px 38px 15px 24px;
  align-items: flex-start;
  border-radius: 2px;
  background: var(--red, #DA1617);
  box-shadow: 2px 2px 4px 0px rgba(61, 61, 61, 0.05);
  outline: none;
  border: none;
}

.button span {
  color: var(--white, #FFF);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.mx-20 {
  margin: 0 20px;
}

.d-flex {
  display: flex;
}

.row {
  flex-direction: row;
  align-items: center;
}
</style>