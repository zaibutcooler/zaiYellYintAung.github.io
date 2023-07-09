<script setup lang="ts">
import ContactCard from "../components/ContactCard.vue";
import ContactForm from "../components/ContactForm.vue";
</script>

<template>
  <section class="page" id="contact">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="grand_title">Contact Me</h1>
        <p class="title_description">Get in touch</p>
      </div>
      <div class="lg:flex">
        <div class="w-full flex lg:w-2/5 lg:flex-col text-center">
          <ContactCard
            title="Gmail"
            detail="zaiYellYintAung@gmail.com"
            icon="fab fa-google"
            url="#" />
          <ContactCard
            title="Instagram"
            detail="zai_yellyintaung"
            icon="fab fa-instagram"
            :url="instagram" />
          <ContactCard
            title="Discord"
            detail="Zai#6302 "
            icon="fab fa-discord"
            :url="discord" />
        </div>
        <div class="w-full lg:w-3/5">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import links from "../assets/datas/links";

export default defineComponent({
  name: "ContactPage",
  data() {
    return {
      discord: links.discord,
      instagram: links.instagram,
    };
  },
});
</script>

<style scoped></style>
