<template>
  <div
    class="lg:mx-4 mx-2 lg:w-[300px] md:w-[260px] sm:w-[240px] min-h-[148px] mb-4 lg:mb-8 p-6 bg-snow_white border border-secondary rounded-md flex flex-col justify-between">
    <div class="lg:mt-20">
      <i />
    </div>
    <h3 class="font-semibold lg:text-lg sm:text-sm">{{ title }}</h3>
    <div>
      <button class="text-xs text-secondary">View more -></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "SkillsCard";
  },
  props: ["title"],
});
</script>
