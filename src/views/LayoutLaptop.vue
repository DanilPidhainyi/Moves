<script lang="ts">
import {defineComponent} from 'vue'
import store from "@/store";
import CarouselSerials from "@/components/CarouselSerials.vue";
import IconStar from "@/components/IconStar.vue";
import {convertTime} from "@/components/covertTime";


export default defineComponent({
  name: "LayoutLaptop",
  components: {IconStar, CarouselSerials},
  computed: {
    selectMovies () {
      return store.getters.selectMovies
    }
  },

  watch: {
    selectMovies () {
      console.log('this.selectMovies=', this.selectMovies)
    }
  },

  methods: {
    convertTime,
  }


})
</script>

<template>
  <section v-if="selectMovies" class="blur wrapper">
    <div class="container">
      <section>
        <div class="ibdb">
          IBDb rating
        </div>
        <div class="mt-10 score-container">
          <icon-star width="20px" height="20px"/>
          <span class="score">{{ selectMovies.imdb_rating}}</span>
          <span class="ten">/10</span>
        </div>
        <div class="mt-20 title">
          <div>{{ selectMovies.title }}</div>
          <div class="year ml-10">({{ selectMovies.release_year }})</div>
        </div>
        <div class="mt-20 description">
          {{ selectMovies.description }}
        </div>
        <div class="mt-20 d-flex row genres">
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
        <button class="button mt-20">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13397C10.1667 5.51888 10.1667 6.48113 9.5 6.86603L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301L0.500001 1.66987C0.500001 0.900072 1.33333 0.418947 2 0.803847L9.5 5.13397Z" fill="white"/>
          </svg>
          <span>Watch trailer</span>
        </button>
      </section>
      <section class="content-right">
       <div>
          <span>Director: </span>
          <span v-for="(director, index) in selectMovies.directors" :key="director.id" class="name">
            {{ director.first_name + ' ' + director.last_name }}{{ index < selectMovies.directors.length - 1 ? ',&nbsp;' : '' }}
          </span>
       </div>
        <div>
          <span>Writers: </span>
          <span v-for="(writers, index) in selectMovies.writers" :key="writers.id" class="name">
            {{ writers.first_name + ' ' + writers.last_name }}{{ index < selectMovies.writers.length - 1 ? ',&nbsp;' : '' }}
          </span>
        </div>
        <div>
          <span>Stars: </span>
          <span v-for="(stars, index) in selectMovies.stars" :key="stars.id" class="name">
            {{ stars.first_name + ' ' + stars.last_name }}{{ index < selectMovies.stars.length - 1 ? ',&nbsp;' : '' }}
          </span>
        </div>
      </section>
    </div>
    <carousel-serials class="mt-32"/>
    <picture class="background-image">
      <source :srcset="selectMovies.bg_picture" media="(min-width: 1000px)">
      <img :src="selectMovies.bg_picture" alt="">
    </picture>
  </section>

</template>

<style scoped>

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
  display: flex;
  padding: 13px 28px 12px 14px;
  align-items: flex-start;
  gap: 14px;
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

.background-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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
  background: linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.89) 67.19%, #161616 100%);
}

.wrapper {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.ibdb {
  color: var(--grey, #E2E2E2);
  font-size: 16px;
  line-height: 140%; /* 22.4px */
}

.score-container {
  display: flex;
  flex-direction: row;
  align-items: end;
}

.container {
  font-family: Rubik, serif;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
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
  width: 560px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.genres {
  color: var(--white, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}

</style>