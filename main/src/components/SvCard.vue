<script lang="ts">
import { defineComponent } from "vue";
import ServicesDetails from "./ServicesDetails.vue";

export default defineComponent({
  name: "SvCard",
  props: ["service"],
  methods: {
    showDetail() {
      this.isShowed = true;
    },
    closeServiceDetail() {
      this.isShowed = false;
    },
  },
  data() {
    return {
      isShowed: false,
    };
  },
  components: { ServicesDetails },
});
</script>

<template>
  <div
    class="lg:mx-4 mx-2 lg:w-[300px] md:w-[260px] sm:w-[240px] min-h-[180px] mb-4 lg:mb-8 p-6 bg-snow_white border border-secondary rounded-md flex flex-col justify-between">
    <div class="lg:mt-15 text-lg p-2">
      <i :class="service.icon"></i>
    </div>
    <h3 class="font-semibold lg:text-md sm:text-sm">{{ service.title }}</h3>
    <div>
      <button class="text-xs text-secondary" @click="showDetail">
        View more <i class="fa-solid fa-arrow-right text-[0.5rem]"></i>
      </button>
    </div>
    <ServicesDetails
      v-if="isShowed"
      :detail="service"
      @close="closeServiceDetail" />
  </div>
</template>

<style></style>
