<script setup lang="ts">
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import QualificationsPage from "./pages/QualificationsPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import SkillsPage from "./pages/SkillsPage.vue";
import Footer from "./components/Footer.vue";
import "boxicons";
</script>

<template>
  <div class="bg-bg_white text-primary">
    <Header />
    <content>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ServicesPage />
      <PortfolioPage />
      <QualificationsPage />
      <ContactPage />
    </content>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
.page {
  padding-top: 10vh;
  padding-left: 128px;
  padding-right: 128px;
  min-height: 100vh;
  margin-top: 64px;
}

@media (max-width: 767px) {
  /* Small screens */
  .page {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* Medium screens */
  .page {
    padding-left: 64px;
    padding-right: 64px;
  }
}

.grand_title {
  font-size: xx-large;
  font-weight: 700;
}
.title_description {
  font-size: smaller;
}
</style>
