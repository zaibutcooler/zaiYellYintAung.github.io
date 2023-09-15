<template>
  <div
    class="mr-2 mb-4 px-3 py-4 bg-snow_white border border-secondary rounded-md md:w-36 w-1/3 lg:w-40 text-center"
  >
    <i :class="icon"></i>
    <h3 class="text-primary lg:text-sm text-xs font-semibold my-2">
      {{ title }}
    </h3>
    <p class="hidden lg:block tsm text-secondary">{{ detail }}</p>
    <a class="tsm text-secondary" :href="url">Contact me</a>
  </div>
  <!-- 
  <div
    class="m-3 w-52 h-30 p-6 bg-snow_white border border-secondary rounded-md">
    <h2 class="text-center text-md font-semibold my-3">{{ title }}</h2>
    <p class="text-center text-secondary text-xs">{{ detail }}</p>
    <a :href="url" class="text-center text-secondary text-xs">Contact me -></a>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCard",
  props: ["title", "detail", "icon", "url"],
});
</script>

<style>
.tsm {
  font-size: 0.6rem;
}
</style>
