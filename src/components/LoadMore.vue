<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoadMore"
})
</script>

<template>
  <div class="load-more">
    <div class="plus">
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9287 11H13.9287V5C13.9287 4.73478 13.8234 4.48043 13.6358 4.29289C13.4483 4.10536 13.1939 4 12.9287 4C12.6635 4 12.4091 4.10536 12.2216 4.29289C12.0341 4.48043 11.9287 4.73478 11.9287 5V11H5.92871C5.66349 11 5.40914 11.1054 5.2216 11.2929C5.03407 11.4804 4.92871 11.7348 4.92871 12C4.92871 12.2652 5.03407 12.5196 5.2216 12.7071C5.40914 12.8946 5.66349 13 5.92871 13H11.9287V19C11.9287 19.2652 12.0341 19.5196 12.2216 19.7071C12.4091 19.8946 12.6635 20 12.9287 20C13.1939 20 13.4483 19.8946 13.6358 19.7071C13.8234 19.5196 13.9287 19.2652 13.9287 19V13H19.9287C20.1939 13 20.4483 12.8946 20.6358 12.7071C20.8234 12.5196 20.9287 12.2652 20.9287 12C20.9287 11.7348 20.8234 11.4804 20.6358 11.2929C20.4483 11.1054 20.1939 11 19.9287 11Z" fill="white"/>
      </svg>
    </div>
    <div class="text">
      View more
    </div>
  </div>

</template>

<style scoped>

.load-more {
  box-sizing: border-box;
  display: flex;
  width: 140px;
  height: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plus {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.text {
  margin-top: 8px;
  color: var(--white, #FFF);
  font-family: Rubik,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>