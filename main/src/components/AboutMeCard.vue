<template>
  <div
    class="mr-4 p-6 bg-snow_white border border-secondary rounded-md lg:w-40">
    <i />
    <h3 class="text-primary text-sm text-center font-semibold my-2">
      {{ title }}
    </h3>
    <p class="text-center text-xs text-secondary">{{ amount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMeCard",
  props: ["title", "amount"],
});
</script>

<style></style>
