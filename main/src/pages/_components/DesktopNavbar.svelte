<script lang="ts">
  let isAuthenticated = true;
</script>

<header class="hidden md:block">
<nav class="bg-snow_white dark:bg-super_black border-b border-gray-100 dark:border-super_black fixed left-0 top-0 w-full">
  <div class="container mx-auto px-4 sm:px-4 lg:px-6">
    <div class="flex items-center justify-between h-14">
      <!-- Logo -->
      <div class="flex-shrink-0 xs:w-1/6">
        <a href="#home" class="text-primary text-lg font-semibold pl-2 md:pl-4">Zai</a>
      </div>
      <!-- Menu -->
      <div>
          <div class="flex items-center space-x-4 text-gray-600 dark:text-bg_white">
            <a href="#about" class=" hover:text-black dark:hover:text-snow_white pl-6 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#skills" class="hidden md:block  hover:text-black dark:hover:text-snow_white pl-6 py-2 rounded-md text-sm font-medium">Skills</a>
            <a href="#services" class="hidden md:block  hover:text-black dark:hover:text-snow_white pl-6 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#contact" class="hidden md:block  hover:text-black dark:hover:text-snow_white pl-6 py-2 rounded-md text-sm font-medium">Contact</a>
           
            <!-- <a href="/login" class="flex items-center justify-center w-24 bg-black text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Login</a> -->
            <!-- <a href="/register" class="flex items-center justify-center w-24 bg-primary text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Register</a> -->
          </div>

      </div>
    </div>
  </div>
</nav>
</header>