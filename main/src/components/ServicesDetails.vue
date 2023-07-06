<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-6 rounded-md shadow-md lg:w-[1000px] sm:[800px]">
      <h2 class="text-2xl font-bold mb-4 text-center">Details</h2>
      <p class="text-lg mb-6">{{ detail }}</p>
      <button class="bg-red-500 text-white py-2 px-4 rounded" @click="close">
        Close
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceDetails",
  props: ["detail"],
  mounted() {
    document.body.classList.add("disable-scrollbar");
  },
  beforeUnmount() {
    document.body.classList.remove("disable-scrollbar");
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style>
.disable-scrollbar {
  overflow: hidden;
}
</style>
