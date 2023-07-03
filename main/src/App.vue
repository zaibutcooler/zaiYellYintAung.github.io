<script setup lang="ts">
import Header from "./components/Header.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import SkillsPage from "./pages/SkillsPage.vue";
</script>

<template>
  <div class="main">
    <Header />
    <content>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ServicesPage />
      <PortfolioPage />
      <ContactPage />
    </content>
  </div>
</template>

<style scoped></style>
