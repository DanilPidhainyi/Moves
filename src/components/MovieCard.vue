<script lang="ts">
import {defineComponent} from 'vue'
import IconStar from "@/components/IconStar.vue";

export default defineComponent({
  name: "MovieCard",
  components: {IconStar},
  props: {
    img: {
      type: String,
    },
    score: {
      type: Number,
    },
    name: {
      type: String,
    }
  }
})
</script>

<template>
  <div class="layout">
    <picture>
      <img :src="img" alt="">
    </picture>
    <div class="mt-10 score-container">
      <icon-star/>
      <span class="score">{{ score }}</span>
      <span class="ten">/10</span>
    </div>
    <span class="name mt-10">
      {{ name }}
    </span>
  </div>
</template>

<style scoped>

.mt-10 {
  margin-top: 10px;
}


.score-container {
  display: flex;
  flex-direction: row;
  align-items: end;
}

.score {
  display: block;
  color: #FFF;
  font-family: Rubik,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 5.45px;
}

.ten {
  display: block;
  color: var(--grey, #E2E2E2);
  font-family: Rubik,serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 2.15px;
}

picture {
  width: 140px;
  height: 212px;
  flex-shrink: 0;
}

picture img {
  width: 140px;
  height: 212px;
  flex-shrink: 0;
  //object-fit: cover;
  vertical-align: top;
}

.layout {
  height: 280px;
  width: 140px;
}

@media screen and (max-width: 1194px) {
  .layout {
    box-sizing: border-box;
    width: 205px;
    height: 401px;
  }

  picture img {
    width: 205px;
    height: 322px;
    flex-shrink: 0;
    align-self: stretch;
  //object-fit: cover;
    vertical-align: top;
  }
}

.name {
  display: flex;
  color: var(--white, #FFF);
  font-family: Rubik, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  //overflow-wrap: anywhere;
  //flex-wrap: wrap;
  white-space: normal;
}
</style>