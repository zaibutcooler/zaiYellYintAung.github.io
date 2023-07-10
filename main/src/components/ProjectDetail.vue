<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-2">
    <div
      class="mt-8 bg-snow_white px-6 pb-6 pt-4 rounded-3xl shadow-md lg:w-[600px] w-[350px] md:w-[500px] min-h-[400px] text-secondary_bold">
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
      <p class="text-[0.62rem] mb-6" style="line-height: 1.3rem">
        &nbsp;&nbsp;&nbsp;{{ detail.description }}
      </p>

      <div class="flex flex-col space-y-3">
        <div>
          <ul class="text-[0.6rem]">
            <li class="mb-3" v-for="feature in detail.features" :key="feature">
              <i class="fas fa-check mr-4"></i>{{ feature }}
            </li>
          </ul>
        </div>
        <div class="text-xs lg:text-xs">
          <ul class="flex text-[0.6rem]">
            <li
              class="mr-3 px-2 py-1.5 rounded-lg bg-secondary text-snow_white"
              v-for="technology in detail.technologies"
              :key="technology.name">
              {{ technology.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectDetail",
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

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-btn i {
  color: #999;
  font-size: 1.2rem;
}

.text-xs {
  font-size: 0.625rem;
}
</style>
