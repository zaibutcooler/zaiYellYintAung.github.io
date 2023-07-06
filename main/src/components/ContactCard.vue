<template>
  <div
    class="m-3 lg:w-2/5 sm:w-3/4 p-6 bg-snow_white border border-secondary rounded-md">
    <h2 class="text-center text-md font-semibold mt-3">{{ title }}</h2>
    <p class="text-center text-secondary text-xs">{{ detail }}</p>
    <a :href="url" class="text-center text-secondary text-xs">Contact me -></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCard",
  props: ["title", "detail", "url"],
});
</script>

<style></style>
