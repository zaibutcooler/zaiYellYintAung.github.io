<template>
  <div
    class="mr-4 p-6 bg-snow_white border border-secondary rounded-md md:w-36 sm:w-30 lg:w-40 text-center">
    <i :class="icon"></i>
    <h3 class="text-primary text-sm font-semibold my-2">
      {{ title }}
    </h3>
    <p class="text-xs text-secondary">{{ amount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMeCard",
  props: ["title", "amount", "icon"],
});
</script>

<style></style>
