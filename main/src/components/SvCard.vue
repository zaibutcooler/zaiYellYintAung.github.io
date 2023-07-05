<template>
  <div class="m-4">
    <i />
    <h3>{{ title }}</h3>
    <p>View more -></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SvCard",
  props: ["title", "item"],
});
</script>

<style></style>
