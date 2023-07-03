<template>
  <header>
    <nav class="nav container">
      <a href="index.html" class="nav_logo">Zai</a>
      <div class="nav_menu">
        <ul class="nav_list grid">
          <li class="nav_item">
            <a href="#home" class="nav_link">
              <i class="uil uil- nav_icon"> </i>Home
            </a>
            <a href="#about" class="nav_link">
              <i class="uil uil- nav_icon"> </i>About
            </a>
            <a href="#skills" class="nav_link">
              <i class="uil uil- nav_icon"> </i>Skills
            </a>
            <a href="#services" class="nav_link">
              <i class="uil uil- nav_icon"> </i>Services
            </a>
            <a href="#portfolio" class="nav_link">
              <i class="uil uil- nav_icon"> </i>Portfolio
            </a>
            <a href="#contact" class="nav_link">
              <i class="uil uil- nav_icon"> </i>Contact
            </a>
          </li>
        </ul>
      </div>
      <div class="nav__toggle">
        <i></i>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--container-color);
}

.nav {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
}
</style>
