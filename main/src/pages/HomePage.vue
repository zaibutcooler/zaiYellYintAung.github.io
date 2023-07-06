<template>
  <section class="page flex items-center bg-bg_white" id="home">
    <div class="part_one w-1/6 h-[100vh]">
      <box-icon type="logo" name="facebook-square"> </box-icon>
      <box-icon type="logo" name="instagram-square"></box-icon>
    </div>
    <div class="part_two w-3/6 h-[100vh] pt-60">
      <h1 class="font-bold text-primary text-4xl">Sai Yell Yint Aung</h1>
      <h3 class="text-primary font-semibold">Full-Stack Web Developer</h3>
      <p class="font-thin text-secondary">
        I'm mainly a Full-Stack developer currently living in Myanmar which is
        known as Burma
      </p>
      <button
        class="bg-primary hover:bg-gray-900 p-24 h-12 w-36 text-bg_white py-2 px-4 rounded">
        Contact Me!
      </button>
    </div>
    <div class="part_three w-2/6 bg-neutral-950"></div>
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
}
</style>
