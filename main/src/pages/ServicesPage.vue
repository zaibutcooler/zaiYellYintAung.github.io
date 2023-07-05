<script setup lang="ts">
import SvCard from "../components/SvCard.vue";
</script>

<template>
  <div class="page" id="services">
    <div class="text-center">
      <h1 class="grand_title">Services</h1>
      <p class="title_description">What I offer</p>
    </div>
    <div class="flex">
      <div v-for="service in services" :key="service.title">
        <SvCard :title="service.title" :item="service.item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",
  data() {
    return {
      services: [
        { title: "Database Maintainence", item: "" },
        { title: "Fully functioning web app", item: "" },
        { title: "DevOps", item: "" },
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
