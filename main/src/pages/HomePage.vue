<template>
  <section class="page flex items-center">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="social-links flex justify-start items-center space-x-4">
            <div>
              <div class="my-4">
                <a href="#" class="social-icon">
                  <box-icon type="logo" name="facebook-square"></box-icon>
                </a>
              </div>
              <div class="my-4">
                <a href="#" class="social-icon">
                  <box-icon type="logo" name="instagram-square"></box-icon>
                </a>
              </div>
              <div class="my-4">
                <a href="#" class="social-icon">
                  <box-icon type="logo" name="facebook-square"></box-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-6">
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
              class="bg-primary hover:bg-gray-900 text-white py-2 px-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
        <div class="col-span-1 md:col-span-3 bg-neutral-950"></div>
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
.page {
  height: 100vh;
  padding: 0 1rem;
}

.container {
  max-width: 960px;
}

.social-icon {
  @apply inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300;
}

.bg-neutral-950 {
  @apply bg-gray-900;
}
</style>
