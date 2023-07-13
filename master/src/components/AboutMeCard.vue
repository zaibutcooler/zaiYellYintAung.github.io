<template>
  <div
    class="mr-2 px-3 py-4 bg-snow_white border border-secondary rounded-md md:w-36 w-1/3 lg:w-34 text-center">
    <i :class="icon"></i>
    <h3 class="text-primary lg:text-sm text-xs font-semibold my-2">
      {{ title }}
    </h3>
    <p class="amount text-secondary">{{ amount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMeCard",
  props: ["title", "amount", "icon"],
});
</script>

<style>
.amount {
  font-size: 0.6rem;
}
</style>
