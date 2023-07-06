<script setup lang="ts">
import SkillsCard from "../components/SkillsCard.vue";
import skills from "../assets/datas/skills";
</script>

<template>
  <section class="page px-8" id="skills">
    <div class="text-center">
      <h1 class="grand_title">Skills</h1>
      <p class="title_description">Overall Capabilities</p>
    </div>
    <div class="md:grid grid-cols-2 md:gap-4 justify-center">
      <div
        v-for="eachSkill in allSkills"
        :key="eachSkill.title"
        class="flex justify-center md:items-center">
        <SkillsCard :title="eachSkill.title" :skills="eachSkill.skills" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsPage",
  computed: {
    allSkills() {
      return skills;
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
