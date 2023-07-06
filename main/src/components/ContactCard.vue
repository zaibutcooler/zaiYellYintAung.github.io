<template>
  <div class="m-12">
    <h2>{{ title }}</h2>
    <p>{{ detail }}</p>
    <a :href="url">Contact me -></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCard",
  props: ["title", "detail", "url"],
});
</script>

<style></style>
