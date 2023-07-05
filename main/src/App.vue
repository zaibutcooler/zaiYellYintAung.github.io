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
  <div class="main">
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

<style>
.grand_title {
  font-size: xx-large;
  font-weight: 700;
}
.title_description {
  font-size: smaller;
}
</style>
