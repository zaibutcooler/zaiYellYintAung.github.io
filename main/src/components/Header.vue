<template>
  <header>
    <nav class="navbar">
      <a href="index.html" class="navbar__logo ml-12">Zai</a>
      <div class="navbar__menu">
        <ul class="navbar__list mr-12">
          <li class="navbar__item">
            <a href="#home" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              Home
            </a>
          </li>
          <li class="navbar__item">
            <a href="#about" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              About
            </a>
          </li>
          <li class="navbar__item">
            <a href="#skills" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              Skills
            </a>
          </li>
          <li class="navbar__item">
            <a href="#services" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              Services
            </a>
          </li>
          <li class="navbar__item">
            <a href="#portfolio" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              Portfolio
            </a>
          </li>
          <li class="navbar__item">
            <a href="#contact" class="navbar__link">
              <i class="uil uil- nav_icon"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.navbar__logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.navbar__list {
  list-style: none;
  font-weight: 600;
  display: flex;
  gap: 3rem;
}

.navbar__item {
  display: flex;
}

.navbar__link {
  text-decoration: none;
  color: #555;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.nav_icon {
  margin-right: 0.5rem;
}

.navbar__link:hover {
  color: #333;
}
</style>
