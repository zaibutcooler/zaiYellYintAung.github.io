<script setup lang="ts">
import ContactCard from "../components/ContactCard.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <div class="page" id="contact">
    <div class="text-center">
      <h1 class="grand_title">Contact Me</h1>
      <p class="title_description">Get in touch</p>
    </div>
    <div class="flex">
      <div class="w-2/5">
        <ContactCard title="Title" detail="Detail" url="url" />
        <ContactCard title="Title" detail="Detail" url="url" />
        <ContactCard title="Title" detail="Detail" url="url" />
      </div>
      <div class="w-3/5">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
});
</script>

<style scoped>
.page {
  height: 100vh;
}
</style>
