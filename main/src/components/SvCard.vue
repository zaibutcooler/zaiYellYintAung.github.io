<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex/types/index.js";

export default defineComponent({
  name: "SvCard",
  props: ["title", "item"],
  methods: {
    showDetail(detail: any) {
      const store = useStore();
      store.commit("showServiceDetail", detail);
      console.log(store.state.detail);
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
});
</script>

<template>
  <div class="mx-10 mb-8 p-6 bg-snow_white border border-secondary rounded-md">
    <div class="lg:mt-20">
      <i />
    </div>
    <h3 class="font-semi text-lg">{{ title }}</h3>
    <button class="text-sm text-secondary" @click="showDetail(item)">
      View more ->
    </button>
  </div>
</template>

<style></style>
