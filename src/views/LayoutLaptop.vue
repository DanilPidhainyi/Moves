<script lang="ts">
import {defineComponent} from 'vue'
import store from "@/store";
import CarouselSerials from "@/components/CarouselSerials.vue";
import {convertTime} from "@/components/covertTime";

interface Name {
  first_name: string,
  last_name: string
}


export default defineComponent({
  name: "LayoutLaptop",
  components: {CarouselSerials},
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
    combName (arr: Name[]) {
      return arr.map(el => el.first_name + ' ' + el.last_name).join(', ')
    },

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
          <svg class="star" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3165 0.423147C10.3861 0.262571 10.6139 0.262571 10.6835 0.423147L13.1686 6.15401C13.1976 6.22084 13.2606 6.26663 13.3331 6.27354L19.5514 6.86608C19.7257 6.88268 19.796 7.09926 19.6648 7.2151L14.9824 11.3495C14.9278 11.3977 14.9037 11.4718 14.9196 11.5429L16.2776 17.64C16.3156 17.8108 16.1314 17.9447 15.9807 17.8557L10.6017 14.68C10.539 14.643 10.461 14.643 10.3983 14.68L5.01931 17.8557C4.8686 17.9447 4.68437 17.8108 4.72242 17.64L6.08045 11.5429C6.09628 11.4718 6.07221 11.3977 6.01761 11.3495L1.33517 7.2151C1.20397 7.09926 1.27434 6.88268 1.44857 6.86608L7.66689 6.27354C7.7394 6.26663 7.80243 6.22084 7.83141 6.15401L10.3165 0.423147Z" fill="#E98D4B"/>
          </svg>
          <span class="score">{{selectMovies.imdb_rating }}</span>
          <span class="ten">/10</span>
        </div>
        <div class="mt-20 title">
          <div>{{ selectMovies.title }}</div>
          <div class="year">({{ selectMovies.release_year }})</div>
        </div>
        <div class="mt-20 description">
          {{ selectMovies.description }}
        </div>
        <div class="mt-20 d-flex row genres">
          <div>
            {{ selectMovies.genres.map(el => el.title).join(', ') }}
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
         <span class="name">
           {{ combName(selectMovies.directors) }}
         </span>
       </div>
        <div>
          <span>Writers: </span>
          <span class="name" style="margin-left: 4px">{{ combName(selectMovies.writers) }}</span>
        </div>
        <div>
          <span>Stars: </span>
          <span class="name">{{ combName(selectMovies.stars) }}</span>
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
  margin-bottom: 60px;
}

.content-right span {
  color: var(--grey, #E2E2E2);
  font-family: Rubik,serif;
  font-size: 15.8px;
  letter-spacing: 0.1px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.content-right div {
  margin-top: 8px;
}

.content-right .name {
  color: #FFF;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}


.mt-32 {
  margin-top: 32px;
}

.button {
  display: flex;
  height: 42px;
  width: 160px;
  box-sizing: border-box;
  padding: 15px 0px 12px 17px;
  border-radius: 2px;
  background: var(--red, #DA1617);
  box-shadow: 2px 2px 4px 0px rgba(61, 61, 61, 0.05);
  outline: none;
  border: none;
}

.button span {
  width: 90px;
  margin-left: 15px;
  position: relative;
  top: -1px;
  display: block;
  color: var(--white, #FFF);
  font-family: Rubik, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.mx-20 {
  margin: 0 19.5px;
}

.d-flex {
  display: flex;
}

.row {
  flex-direction: row;
  align-items: center;
}

.star {
  margin-bottom: 5px;
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
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: end;
}

.container {
  font-family: Rubik, sans-serif;
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
  font-family: Rubik, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 6px;
  position: relative;
  top: 4px;
}

.ten {
  display: block;
  color: #E2E2E2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5px;
  position: relative;
  top: 2px;
}

.mt-20 {
  margin-top: 20px;
}

.ml-10 {
  margin-left: 10px;
}

.title {
  color: #FFF;
  font-family: 'Krona One', sans-serif;
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
  font-family: Rubik, sans-serif;
  padding-bottom: 3px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  margin-left: 9px;
}

.description {
  width: 560px;
  color: #FFF;
  font-family: Rubik, sans-serif;
  font-size: 15.75px;
  font-style: normal;
  letter-spacing: 0.1px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.genres {
  color: var(--white, #FFF);
  font-family: Rubik, sans-serif;
  font-size: 15.75px;
  font-style: normal;
  letter-spacing: 0.2px;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}

</style>