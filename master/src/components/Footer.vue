<template>
  <div class="footer border border-t color-bg_white mt-8">
    <h1 class="text-3xl font-semibold my-4 text-center">Zai</h1>
    <div class="text-center my-2">
      <div class="flex font-semibold text-xs justify-center">
        <a href="#about" class="mx-4">About</a>
        <a href="#portfolio" class="mx-4">Projects</a>
        <a href="#services" class="mx-4">Services</a>
      </div>
      <div class="flex justify-center text-xl my-3">
        <a :href="instagram"><i class="fab fa-instagram mx-4"></i></a>
        <a :href="facebook"><i class="fab fa-facebook mx-4"></i></a>
        <a :href="linkedIn"><i class="fab fa-linkedin mx-4"></i></a>
      </div>
      <p class="text-xs mt-2">&copy; 2023 Your Company. All rights reserved.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import links from "../assets/datas/links";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      instagram: links.instagram,
      facebook: links.facebook,
      linkedIn: links.linkedIn,
    };
  },
});
</script>

<style></style>
