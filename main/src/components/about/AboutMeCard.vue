<template>
  <div class="m-4">
    <i />
    <h3>{{ title }}</h3>
    <p>{{ amount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMeCard",
  props: ["title", "amount"],
});
</script>

<style></style>
