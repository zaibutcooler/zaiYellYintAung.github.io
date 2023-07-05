<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesCard",
  setup() {},
  props: ["title", "item"],
});
</script>

<template>
  <div>
    <i>Icon</i>
    <h3>{{ title }}</h3>
    <p>view more -></p>
  </div>
</template>
