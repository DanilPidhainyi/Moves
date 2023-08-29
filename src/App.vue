<script lang="ts">
import {defineAsyncComponent, defineComponent} from 'vue'
import store from "@/store";
const LayoutLaptop = defineAsyncComponent(() => import('./views/LayoutLaptop.vue'));
const LayoutTablet = defineAsyncComponent(() => import("./views/LayoutTablet.vue"));


export default defineComponent({
  name: "App",
  components: {
    LayoutTablet,
    LayoutLaptop
  },


  computed: {
    isLayout() {
      return window.innerWidth <= 1152 ? 'LayoutTablet' : 'LayoutLaptop';
    },
  },

  created() {
    store.dispatch('downloadMovies')
  }

})

</script>

<template>
  <component :is="isLayout"/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');


body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  //overflow: hidden;
}

root {
  --white: white;
  --grey: gray;
  --red: red;
  --black: #161616;
}

</style>
