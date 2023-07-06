<template>
  <div class="footer border border-t color-bg_white">
    <h1 class="text-3xl font-semibold my-8 text-center">Zai</h1>
    <div class="text-center">
      <div class="flex font-[500] text-sm">
        <a href="#about" class="m-4">About</a>
        <a href="#portfolio" class="m-4">Projects</a>
        <a href="#services" class="m-4">Services</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    name: "Footer";
  },
});
</script>
