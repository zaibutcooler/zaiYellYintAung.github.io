<script setup lang="ts">
import PortFolioCard from "../components/PortFolioCard.vue";
</script>

<template>
  <section class="page" id="portfolio">
    <div class="text-center">
      <h1 class="grand_title">PortFolio</h1>
      <p class="title_description">My recent and currently working projects</p>
    </div>
    <div class="buttons flex text-xs justify-center mt-6">
      <button
        v-for="view in views"
        :key="view"
        :class="[
          'my-2 mx-6 p-3 w-24',
          {
            'bg-primary text-white rounded-lg': selectedView === view,
            'bg-bg_white text-primary': selectedView !== view,
          },
        ]"
        @click="selectView(view)">
        {{ view }}
      </button>
    </div>
    <div>
      <PortFolioCard title="Title" imgurl="img" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",
  methods: {
    selectView(input: string) {
      this.selectedView = input;
    },
  },
  data() {
    return {
      selectedView: "All",
      views: ["All", "Web App", "Mobile App", "Software"],
    };
  },
});
</script>

<style scoped></style>
