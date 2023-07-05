<template>
  <div class="m-10">
    Skills Card
    <img />
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "SkillsCard";
  },
  props: ["title", "imgurl"],
});
</script>
