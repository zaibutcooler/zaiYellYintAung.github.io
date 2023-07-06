<script lang="ts">
import { defineComponent } from "vue";
import ServicesDetails from "./ServicesDetails.vue";

export default defineComponent({
  name: "SvCard",
  props: ["title", "item"],
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
    class="mx-4 lg:w-[320px] md:w-[280px] sm:w-[240px] min-h-[148px] mb-8 p-6 bg-snow_white border border-secondary rounded-md flex flex-col justify-between">
    <div class="lg:mt-20">
      <i />
    </div>
    <h3 class="font-semibold lg:text-lg">{{ title }}</h3>
    <div>
      <button class="text-xs text-secondary" @click="showDetail">
        View more ->
      </button>
    </div>
    <ServicesDetails
      v-if="isShowed"
      :detail="item"
      @close="closeServiceDetail" />
  </div>
</template>

<style></style>
