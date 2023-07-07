<template>
  <div
    class="w-[200px] sm:w-[240px] min-h-[148px] mb-4 lg:mb-6 p-6 bg-snow_white border border-secondary rounded-md flex flex-col justify-between">
    <h3 class="font-semibold text-sm">{{ title }}</h3>
    <div>
      <button class="text-xs text-secondary">See detail</button>
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
