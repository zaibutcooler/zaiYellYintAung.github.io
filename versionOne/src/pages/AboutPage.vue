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

      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="w-72 h-72 bg-gray-300 rounded-lg"></div>
          <!-- Placeholder square -->
        </div>
        <div class="w-full md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0">
          <div class="flex md:flex-row justify-between">
            <AboutMeCard
              title="Experiences"
              amount="3+ years"
              icon="fas fa-briefcase"
              class="mb-4 md:mb-0"
            />
            <AboutMeCard
              title="Completed"
              amount="30+ projects"
              icon="fas fa-check-circle"
              class="mb-4 md:mb-0"
            />
            <AboutMeCard
              title="Support"
              amount="Online 24/7"
              icon="fas fa-clock"
              class="mb-4 md:mb-0"
            />
          </div>

          <p class="text-base my-8 text-secondary">
            I'm a Full-Stack developer with a passion for creating exceptional
            web experiences. Currently based in Myanmar.
          </p>
          <button
            @click="downloadCV"
            class="bg-primary hover:bg-gray-900 text-white py-4 text-sm px-4 rounded-xl"
          >
            Download CV <i class="fas fa-download ml-2"></i>
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
    downloadCV() {
      // Add your logic to handle the CV download
    },
  },
});
</script>
