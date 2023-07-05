<template>
  <div class="m-10">
    Skills Card
    <h1>{{ title }}</h1>
    <div v-for="skill in skills" :key="skill.name">
      <i></i>
      <p>{{ skill.name }} Name</p>
      <p>{{ skill.level }} Level</p>
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
