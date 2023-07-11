<template>
  <header>
    <nav
      class="hidden md:flex items-center justify-between px-8 py-4 bg-white shadow-xs fixed top-0 left-0 w-full z-50">
      <a
        href="index.html"
        class="navbar__logo ml-12 text-base font-bold text-primary"
        >Zai</a
      >
      <div class="navbar__menu">
        <ul
          class="navbar__list mr-12 flex items-center gap-12 m-0 p-0 list-none text-sm font-semibold">
          <li class="navbar__item">
            <a
              href="#home"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              Home
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#about"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              About
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#skills"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              Skills
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#services"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              Services
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#portfolio"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              Portfolio
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#contact"
              class="navbar__link flex items-center text-gray-500 hover:text-gray-700">
              <i class="uil uil-nav_icon mr-1"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section class="shadow-sm fixed bottom-0 left-0 w-full">
      <nav v-if="!isOpen" class="flex md:hidden justify-between bg-white py-2">
        <div>
          <a href="index.html" class="mx-6 text-base font-bold text-primary"
            >Zai</a
          >
        </div>
        <div>
          <button class="mx-4 text-base font-bold text-primary" @click="open">
            <i class="fa-solid fa-compass"></i>
          </button>
        </div>
      </nav>
      <nav v-if="isOpen" class="block md:hidden bg-white py-2 rounded-t-md">
        <content>
          <div class="grid grid-cols-3">
            <div
              v-for="link in links"
              :key="link.title"
              class="text-center py-3">
              <div class="text-md">
                <a :href="link.go"><i :class="link.icon"></i></a>
              </div>
              <a :href="link.go" class="text-xs"> {{ link.title }} </a>
            </div>
          </div>
        </content>
        <div class="flex justify-end">
          <button @click="close">
            <i class="fas fa-xmark mr-6"></i>
          </button>
        </div>
      </nav>
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      isOpen: false,
      links: [
        { title: "Home", icon: "fas fa-home", go: "#home" },
        { title: "About", icon: "fas fa-info-circle", go: "#about" },
        { title: "Skills", icon: "fas fa-cogs", go: "#skills" },
        { title: "Services", icon: "fas fa-handshake", go: "#services" },
        { title: "Portfolio", icon: "fas fa-briefcase", go: "#portfolio" },
        { title: "Contact", icon: "fas fa-envelope", go: "#contact" },
      ],
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
</script>

<style>
header {
  width: 100%;
}

.navbar__logo {
  @apply ml-12 text-base font-bold text-gray-700;
}

.navbar__list {
  @apply flex items-center gap-12 m-0 p-0 list-none text-xs font-semibold;
}

.navbar__item {
  @apply flex;
}

.navbar__link {
  @apply flex items-center text-gray-500 hover:text-gray-700;
}

.nav_icon {
  @apply mr-1;
}
</style>
