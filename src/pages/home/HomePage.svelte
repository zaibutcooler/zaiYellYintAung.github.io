<script>
  import { concurrent } from "svelte-typewriter";
</script>

<div
  id="home"
  class="flex justify-center md:items-center items-start w-full min-h-[70vh] md:min-h-screen pt-14"
>
  <main
    class="container max-w-full md:max-w-[1000px] px-3 md:px-6 flex flex-col md:flex-row-reverse justify-between"
  >
    <div class="flex gap-3 md:gap-8">
      <div class="w-[260px] h-[260px] block bg-white"></div>
      <div
        class="flex flex-col justify-around text-bg_black dark:text-bg_white text-xl md:text-2xl"
      >
        <a
          href="https://twitter.com/zaibutcooler"
          class="p-1 rounded-full dark:hover:text-snow_white hover:text-super_black"
          ><i class="fab fa-twitter"></i></a
        >
        <a
          href="https://www.linkedin.com/in/zai99/"
          class="p-1 rounded-full dark:hover:text-snow_white hover:text-super_black"
          ><i class="fab fa-linkedin"></i></a
        >
        <a
          href="https://github.com/zaiYellYintAung"
          class="p-1 rounded-full dark:hover:text-snow_white hover:text-super_black"
          ><i class="fab fa-github"></i></a
        >
        <a
          href="https://www.youtube.com/@ooo0zai0ooo"
          class="p-1 rounded-full dark:hover:text-snow_white hover:text-super_black"
          ><i class="fab fa-youtube"></i></a
        >
      </div>
    </div>

    <div class="flex-1 md:pr-6 leading-6 mt-8 md:mt-0">
      <h1
        use:concurrent={{ interval: 40 }}
        class="font-bold text-primary text-3xl md:text-5xl mb-1"
      >
        Sai Yell Yint Aung
      </h1>

      <h3
        use:concurrent={{ interval: 30 }}
        class="text-base md:text-lg mb-4 md:mb-6 font-medium text-super_black dark:text-white"
      >
        Crafting Code and Ventures with Purpose
      </h3>
      <p
        class="text-sm md:text-base md:pr-6 mb-5 font-medium dark:text-bg_white text-bg_black"
      >
        Stepping into the Realm Where Innovation and Purpose Converge. A
        Visionary Journey of Crafting Code, Cultivating Transformative Ventures,
        and Illuminating a Path to Redefine the Future.
      </p>

      <a
        href="#contact"
        class="w-40 py-3 block text-center bg-primary text-bg_white font-semibold rounded-sm hover:text-snow_white"
      >
        Contact Me <i class="fas fa-light fa-paper-plane ml-2"></i>
      </a>
    </div>
  </main>
</div>
