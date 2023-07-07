<script setup lang="ts">
import SvCard from "../components/SvCard.vue";
</script>

<template>
  <section class="page" id="services">
    <div class="text-center mb-16">
      <h1 class="grand_title">Services</h1>
      <p class="title_description">What I offer</p>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-2 gap-2">
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
        { title: "Database Maintainence", item: "db maintain" },
        { title: "Fully functioning web app", item: "web app" },
        { title: "DevOps", item: "dops" },
        { title: "Backend Checking", item: "bkend" },
        { title: "Tech consulting", item: "" },
        { title: "E-com websites", item: "" },
      ],
    };
  },
});
</script>

<style scoped></style>
