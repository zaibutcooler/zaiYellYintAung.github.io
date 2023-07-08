<template>
  <section class="hpage flex items-center">
    <div class="container mx-auto sm:pt-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="col-span-1 md:col-span-8">
          <h1 class="text-2xl md:text-4xl font-bold text-primary">
            Sai Yell Yint Aung
          </h1>
          <h3 class="text-primary font-semibold">Full-Stack Web Developer</h3>
          <p class="text-secondary mt-4">
            I'm a Full-Stack developer with a passion for creating exceptional
            web experiences. Currently based in Myanmar.
          </p>
          <div class="flex mt-4">
            <button
              class="bg-primary hover:bg-gray-900 text-white py-4 text-sm px-4 rounded-xl">
              Contact Me<i class="fas fa-light fa-paper-plane mx-2"></i>
            </button>
          </div>
        </div>
        <div class="col-span-1 md:col-span-3 bg-neutral-950"></div>
        <div class="col-span-1 md:col-span-1">
          <div
            class="social-links flex flex-wrap justify-start items-center space-x-3">
            <div class="md:my-4 ml-3">
              <a href="https://www.linkedin.com/" class="social-icon">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
            <div class="md:my-4">
              <a href="https://github.com/zaiYellYintAung" class="social-icon">
                <i class="fab fa-github text-2xl"></i>
              </a>
            </div>
            <div class="md:my-4">
              <a href="https://twitter.com" class="social-icon">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style scoped>
.hpage {
  height: 100vh;
  padding: 0 1rem;
}

.container {
  max-width: 960px;
}

.social-icon {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-bg_white text-primary hover:bg-gray-300;
}

.bg-neutral-950 {
  @apply bg-gray-900;
}
</style>
