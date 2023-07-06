<script setup lang="ts">
import AboutMeCard from "../components/AboutMeCard.vue";
</script>

<template>
  <section class="page" id="about">
    <div class="text-center pt-20 mb-16">
      <h1 class="grand_title">About Me</h1>
      <p class="title_description">A brief introduction to me</p>
    </div>

    <div class="flex">
      <div class="w-1/2">
        <image />
      </div>
      <div class="w-1/2">
        <div class="flex">
          <AboutMeCard title="Experiences" amount="3+ years" />
          <AboutMeCard title="Completed" amount="30+ projects" />
          <AboutMeCard title="Support" amount="Online 24/7" />
        </div>

        <div class="my-6 w-[1000px]">
          A creative and productive developer who has a ton of knowledge not
          only in web development, but also in Artificial Intelligence (AI),
          Virtual Reality (VR/AR) Development, and Web 3.
        </div>
        <button
          @click="downloadCV"
          class="bg-primary hover:bg-gray-900 p-24 h-12 w-36 text-bg_white py-2 px-4 rounded">
          Download CV <i></i>
        </button>
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

<style scoped>
.page {
  height: 100vh;
}
</style>
