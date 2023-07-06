<script setup lang="ts">
import SvCard from "../components/SvCard.vue";
</script>

<template>
  <section class="page lg:px-32" id="services">
    <div class="text-center mb-16">
      <h1 class="grand_title">Services</h1>
      <p class="title_description">What I offer</p>
    </div>
    <div class="grid grid-cols-3">
      <div v-for="service in services" :key="service.title" class="col-span-1">
        <SvCard :title="service.title" :item="service.item" />
      </div>
    </div>
  </section>
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
        { title: "Backend Checking", item: "" },
        { title: "Tech consulting", item: "" },
        { title: "E-com websites", item: "" },
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
