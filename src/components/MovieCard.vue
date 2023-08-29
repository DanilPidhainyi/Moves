<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MovieCard",
  props: {
    img: {
      type: String,
    },
    score: {
      type: Number,
    },
    name: {
      type: String,
    },
    isSelect: {
      type: Boolean,
      default: false,
    }
  }
})
</script>

<template>
  <div class="layout" :class="{'layout-active': isSelect}">
    <picture>
      <img :src="img" alt="" :class="{'img-active': isSelect}">
    </picture>
    <div class="mt-10 score-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" style="margin-left: -1px">
        <path d="M8.31651 0.423147C8.38614 0.262571 8.61386 0.26257 8.68349 0.423146L10.6255 4.90154C10.6545 4.96837 10.7175 5.01416 10.79 5.02107L15.6493 5.48411C15.8235 5.50072 15.8939 5.71729 15.7627 5.83313L12.1036 9.06398C12.049 9.11219 12.0249 9.18628 12.0408 9.25738L13.102 14.0219C13.1401 14.1928 12.9558 14.3266 12.8051 14.2377L8.60168 11.756C8.53895 11.719 8.46105 11.719 8.39832 11.756L4.19489 14.2377C4.04417 14.3266 3.85994 14.1928 3.89799 14.0219L4.95922 9.25738C4.97506 9.18628 4.95099 9.11219 4.89638 9.06398L1.23728 5.83313C1.10608 5.71729 1.17645 5.50072 1.35069 5.48411L6.21 5.02107C6.28252 5.01416 6.34554 4.96837 6.37452 4.90154L8.31651 0.423147Z" fill="#E98D4B"/>
      </svg>
      <span class="score">{{ score }}</span>
      <span class="ten">/10</span>
    </div>
    <span class="name mt-7">
      {{ name }}
    </span>
  </div>
</template>

<style scoped>

.mt-10 {
  margin-top: 10px;
}


.mt-7 {
  margin-top: 7px;
}

.score-container {
  display: flex;
  flex-direction: row;
  align-items: end;

}

.score {
  display: block;
  color: #FFF;
  font-family: Rubik, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 5.45px;
  position: relative;
  top: 1px;

}

.ten {
  display: block;
  color: var(--grey, #E2E2E2);
  font-family: Rubik,serif;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 5px;
}

picture {
  //aspect-ratio: 140/212;
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
}

picture img {
  box-sizing: border-box;
  outline: none;
  border: none;
  flex-shrink: 0;
  object-fit: cover;
  vertical-align: top;
  object-position: center;
  width: 140px;
  transition: 0.5s;
  height: calc(100% - 68px);
}

.img-active {
  width: 155px;
}

.layout {
  height: 280px;
  width: 140px;
  box-sizing: border-box;
  transition: 0.5s;
}

.layout-active {
  height: 300px;
  width: 155px;
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