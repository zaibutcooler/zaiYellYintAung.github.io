<script setup lang="ts">
import AboutMeCard from "../components/AboutMeCard.vue";
</script>

<template>
  <section class="page" id="about">
    <div class="container mx-auto">
      <div class="text-center mb-18">
        <h1 class="grand_title">About Me</h1>
        <p class="title_description">A brief introduction to me</p>
      </div>

      <div class="flex">
        <div class="w-1/2">
          <image />
        </div>
        <div class="w-1/2">
          <div class="flex">
            <AboutMeCard
              title="Experiences"
              amount="3+ years"
              icon="fas fa-briefcase" />
            <AboutMeCard
              title="Completed"
              amount="30+ projects"
              icon="fas fa-check-circle" />
            <AboutMeCard
              title="Support"
              amount="Online 24/7"
              icon="fas fa-clock" />
          </div>

          <p class="text-secondary my-4 w-[480px]">
            I'm a Full-Stack developer with a passion for creating exceptional
            web experiences. Currently based in Myanmar.
          </p>
          <button
            @click="downloadCV"
            class="bg-primary hover:bg-gray-900 p-24 h-12 w-36 text-bg_white py-2 px-4 rounded">
            Download CV <i></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
  data() {
    return {};
  },
  methods: {
    downloadCV() {},
  },
});
</script>

<style scoped></style>
