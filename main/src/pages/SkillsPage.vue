<script setup lang="ts">
import SkillsCard from "../components/SkillsCard.vue";
</script>

<template>
  <div class="page" id="skills">
    <div class="text-center">
      <h1 class="grand_title">Skills</h1>
      <p class="title_description">Overall Capabilities</p>
    </div>
    <div class="flex">
      <div v-for="eachSkill in allSkills" :key="eachSkill.title">
        <SkillsCard :title="eachSkill.title" :skills="eachSkill.skills" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsPage",
  data() {
    return {
      allSkills: [
        { title: "Frontend Skills", skills: [] },
        { title: "Backend Skills", skills: [] },
        { title: "Skills outside of Web Development", skills: [] },
        { title: "Non-Technical Skills", skills: [] },
      ],
    };
  },
});
</script>

<style scoped>
.page {
  height: 100vh;
}
</style>
