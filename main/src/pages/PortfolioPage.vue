<script setup lang="ts">
import PortFolioCard from "../components/PortFolioCard.vue";
import projects from "../assets/datas/projects";
</script>

<template>
  <section class="pagex" id="portfolio">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="grand_title">PortFolio</h1>
        <p class="title_description">
          My recent and currently working projects
        </p>
      </div>
      <div class="flex justify-center text-xs md:px-32 lg:px-42 mt-6">
        <button
          v-for="view in views"
          :key="view"
          :class="[
            'my-2 md:mx-4 lg:mx-6 lg:p-4  p-3 w-24 mx-2 ',
            {
              'bg-primary text-white rounded-lg': selectedView === view,
              'bg-bg_white text-primary': selectedView !== view,
            },
          ]"
          @click="selectView(view)">
          {{ view }}
        </button>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-2 gap-2">
        <div
          class="col-span-1"
          v-for="project in displayView(selectedView)"
          :key="project.title">
          <PortFolioCard :item="project" />
        </div>
      </div>
      <div></div>
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
    displayView(view: string) {
      switch (view) {
        case "All":
          return projects;
        case "Web App":
          return projects.filter((project) => project.projectType === "web");
        case "Mobile App":
          return projects.filter((project) => project.projectType === "mobile");
        case "Software":
          return projects.filter(
            (project) => project.projectType === "software"
          );
        default:
          return [];
      }
    },
  },
  computed: {
    allProjects() {
      return projects;
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
