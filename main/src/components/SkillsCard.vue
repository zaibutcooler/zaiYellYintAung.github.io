<template>
  <div class="m-10">
    <h1>{{ title }}</h1>
    <div v-for="skill in skills" :key="skill.name">
      <i></i>
      <p>{{ skill.name }}</p>
      <div v-if="skill.level === 1">
        <p>Beginner</p>
      </div>
      <div v-else-if="skill.level === 2">
        <p>Intermediate</p>
      </div>
      <div v-else-if="skill.level === 3">
        <p>Advanced</p>
      </div>
      <div v-else-if="skill.level === 4">
        <p>Expert</p>
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
