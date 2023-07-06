<template>
  <div
    class="m-4 lg:w-96 md:w-7/8 bg-snow_white border border-1 p-6 rounded-lg">
    <h1 class="text-primary text-sm font-bold text-md text-center mb-4">
      {{ title }}
    </h1>
    <div class="grid grid-cols-2">
      <div v-for="skill in skills" :key="skill.name" class="mb-4">
        <div class="col-span-1">
          <i></i>
          <h2 class="text-primary font-semibold text-md">{{ skill.name }}</h2>
          <div class="text-secondary text-xs">
            <p v-if="skill.level === 1">Beginner</p>
            <p v-else-if="skill.level === 2">Intermediate</p>
            <p v-else-if="skill.level === 3">Advanced</p>
            <p v-else-if="skill.level === 4">Expert</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "SkillsCard";
  },
  props: ["title", "skills"],
});
</script>
