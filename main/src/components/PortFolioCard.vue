<script lang="ts">
import { defineComponent } from "vue";
import ProjectDetail from "./ProjectDetail.vue";
export default defineComponent({
  setup() {
    name: "SkillsCard";
  },
  data() {
    return {
      renderDetail: false,
    };
  },
  methods: {
    showDetail() {
      this.renderDetail = true;
    },
    closeDetail() {
      this.renderDetail = false;
    },
  },
  props: ["item"],
  components: { ProjectDetail },
});
</script>

<template>
  <div
    class="lg:mx-4 mx-2 lg:w-[300px] md:w-[260px] sm:w-[240px] min-h-[180px] mb-4 lg:mb-8 p-6 bg-snow_white border border-secondary rounded-md flex flex-col justify-between">
    <h3 class="font-semibold text-sm">{{ item.title }}</h3>
    <div>
      <button class="text-xs text-secondary" @click="showDetail()">
        See detail
      </button>
    </div>
    <ProjectDetail v-if="renderDetail" :detail="item" @close="closeDetail" />
  </div>
</template>
