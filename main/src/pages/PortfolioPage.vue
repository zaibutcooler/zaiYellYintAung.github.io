<script setup lang="ts">
import PortFolioCard from "../components/PortFolioCard.vue";
</script>

<template>
  <div class="page" id="portfolio">
    <div class="text-center">
      <h1 class="grand_title">PortFolio</h1>
      <p class="title_description">My recent and currently working projects</p>
    </div>
    <div class="buttons flex">
      <button class="m-4">All Projects</button>
      <button class="m-4">Web Apps</button>
      <button class="m-4">Mobile App</button>
      <button class="m-4">Softwares</button>
    </div>
    <div>
      <PortFolioCard title="Title" imgurl="img" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",
});
</script>

<style scoped>
.page {
  height: 100vh;
}
</style>
