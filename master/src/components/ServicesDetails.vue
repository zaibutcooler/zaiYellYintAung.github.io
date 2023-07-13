<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-2">
    <div
      class="mt-8 bg-snow_white px-6 pb-6 pt-4 rounded-2xl shadow-md lg:w-[500px] w-[350px] md:w-[600px] min-h-[350px] text-secondary_bold">
      <div class="flex justify-end m-0 p-0">
        <button class="" @click="close">
          <i class="fas fa-xmark"></i>
        </button>
      </div>
      <p
        class="text-xs lg:text-sm mb-6 text-center text-primary"
        style="font-weight: 600">
        {{ detail.title }}
      </p>

      <div class="flex flex-col space-y-3">
        <div>
          <ul class="text-[0.6rem]">
            <li
              class="mb-3"
              v-for="feature in detail.description"
              :key="feature">
              <i class="fa-regular fa-circle-check mr-4"></i>{{ feature }}
            </li>
          </ul>
        </div>
        <hr />
        <div class="text-slate-700 text-[0.56rem]">
          <button
            class="mb-2 flex p-2 border border-slate-300 rounded-lg hover:bg-slate-400 hover:text-snow_white">
            <span class="mr-3 w-[50px] text-end">Basic</span>
            <p class="mr-1 w-[86px]">{{ detail.pricing.small }}</p>
          </button>
          <button
            class="mb-2 flex p-2 border border-slate-400 rounded-lg hover:bg-slate-500 hover:text-snow_white">
            <span class="mr-3 w-[50px] text-end">Standard</span>
            <p class="mr-1 w-[86px]">{{ detail.pricing.medium }}</p>
          </button>
          <button
            class="mb-2 flex p-2 border border-slate-500 rounded-lg hover:bg-slate-600 hover:text-snow_white">
            <span class="mr-3 w-[50px] text-end">Premium</span>
            <p class="mr-1 w-[86px]">{{ detail.pricing.large }}</p>
          </button>
        </div>
      </div>
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
