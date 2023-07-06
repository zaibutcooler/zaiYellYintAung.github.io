<template>
  <div class="mx-10 mb-8 p-6 bg-snow_white border border-secondary rounded-md">
    <div class="lg:mt-20">
      <i />
    </div>
    <h3 class="font-semi text-lg">{{ title }}</h3>
    <button class="text-sm text-secondary" @click="toggleDetail">
      View more ->
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SvCard",
  props: ["title", "item"],
  methods: {
    toggleDetail() {},
  },
});
</script>

<style></style>
