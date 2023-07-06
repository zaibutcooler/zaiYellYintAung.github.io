<script setup lang="ts">
import SkillsCard from "../components/SkillsCard.vue";
</script>

<template>
  <section class="page" id="skills">
    <div class="text-center">
      <h1 class="grand_title">Skills</h1>
      <p class="title_description">Overall Capabilities</p>
    </div>
    <div class="flex">
      <div v-for="eachSkill in allSkills" :key="eachSkill.title">
        <SkillsCard :title="eachSkill.title" :skills="eachSkill.skills" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsPage",
  data() {
    return {
      allSkills: [
        {
          title: "Frontend Technologies",
          skills: [
            { name: "React Js", level: 2 },
            { name: "Next Js", level: 3 },
            { name: "Vue Js", level: 2 },
            { name: "Nuxt Js", level: 2 },
            { name: "Svlete", level: 2 },
            { name: "Svelte Kit", level: 1 },
          ],
        },
        {
          title: "Backend Skills",
          skills: [
            { name: "Express Js", level: 4 },
            { name: "Nest Js", level: 3 },
            { name: "Django", level: 2 },
            { name: "Laravel", level: 2 },
            { name: "Ruby on Rails", level: 2 },
            { name: "Phoenix", level: 1 },
          ],
        },
        {
          title: "Programming Languages",
          skills: [
            { name: "JavaScript", level: 3 },
            { name: "Python", level: 4 },
            { name: "Java", level: 2 },
            { name: "C++", level: 2 },
            { name: "Exelir", level: 1 },
            { name: "Go", level: 1 },
          ],
        },
        {
          title: "Other Skills",
          skills: [
            { name: "Ai tools", level: 3 },
            { name: "Git", level: 2 },
            { name: "Docker", level: 2 },
            { name: "Linux Os", level: 2 },
            { name: "Cyber Security", level: 1 },
            { name: "Github Contibutions", level: 1 },
          ],
        },
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
