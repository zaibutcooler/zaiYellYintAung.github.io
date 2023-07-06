<script setup lang="ts">
import ContactCard from "../components/ContactCard.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <section class="page" id="contact">
    <div class="text-center">
      <h1 class="grand_title">Contact Me</h1>
      <p class="title_description">Get in touch</p>
    </div>
    <div class="flex">
      <div class="w-2/5 text-center">
        <ContactCard
          title="Facebook"
          detail="Sai Yell Yint Aung"
          url="https://www.facebook.com/" />
        <ContactCard
          title="Instagram"
          detail="zai_yellyintaung"
          url="https://www.instagram.com/" />
        <ContactCard
          title="Discord"
          detail="Zai#6302 "
          url="https://discord.com/" />
      </div>
      <div class="w-3/5">
        <ContactForm />
      </div>
    </div>
  </section>
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
