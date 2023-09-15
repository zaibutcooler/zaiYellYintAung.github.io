<template>
  <div>
    <h1 class="font-semibold mb-4 mt-6 lg:mt-0">Send Me Messages!</h1>
    <form>
      <div class="mb-4">
        <label for="title" class="block text-xs text-primary">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="border border-secondary px-4 py-2 rounded-md w-full lg:w-3/4"
        />
      </div>
      <div class="mb-4">
        <label for="body" class="block text-xs text-primary">Body</label>
        <textarea
          id="body"
          v-model="body"
          required
          class="border border-secondary px-4 py-2 rounded-md w-full lg:w-3/4"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="name" class="block text-xs text-primary">Your Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          required
          class="border border-secondary px-4 py-2 rounded-md w-full lg:w-3/4"
        />
      </div>
      <button type="submit" class="bg-primary text-white py-2 px-4 rounded-md">
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactForm",
  data() {
    return {
      title: "",
      body: "",
      name: "",
    };
  },
});
</script>
