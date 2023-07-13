<script setup lang="ts">
import SvCard from "../components/SvCard.vue";
</script>

<template>
  <section class="pagex" id="services">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="grand_title">Services</h1>
        <p class="title_description">What I offer</p>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-2">
        <div
          v-for="service in services"
          :key="service.title"
          class="col-span-1">
          <SvCard :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import services from "../assets/datas/services";

export default defineComponent({
  name: "ServicesPage",
  data() {
    return {
      services: services,
    };
  },
});
</script>

<style scoped>
.pagex {
  padding-top: 10vh;
  padding-left: 64px;
  padding-right: 64px;
  min-height: 100vh;
  margin-top: 64px;
}

@media (max-width: 767px) {
  /* Small screens */
  .pagex {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Medium screens */
  .pagex {
    padding-left: 64px;
    padding-right: 64px;
  }
}
</style>
