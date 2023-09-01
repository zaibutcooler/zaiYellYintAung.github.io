<script lang="ts">
  let isAuthenticated = true;
  $: ()=>{
    if(localStorage.theme === 'light'){
      darkMode=false
    }else{
      darkMode=true
    }

  }

  let darkMode = true;

  const toggleTheme = ()=>{

    if(localStorage.theme ==='light'){
      localStorage.theme = 'dark'
      darkMode=true
      document.documentElement.classList.add('dark')
    }else{
      localStorage.theme = 'light'
      darkMode=false
      document.documentElement.classList.remove('dark')
    }
  }



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
            <a href="#contact" class="hidden md:block  hover:text-black dark:hover:text-snow_white px-6 py-2 rounded-md text-sm font-medium">Contact</a>
            <button on:click={() => toggleTheme()} class="hidden md:flex items-center  bg-bg_white dark:bg-bg_black hover:text-black w-16 h-7 p-0.5 rounded-full border dark:hover:text-snow_white dark:border-white border-gray-500 px-1 py-2 text-sm font-medium">
              {#if darkMode}
              <div class=' p-1 rounded-full text-primary text-left w-full '>
                <i class="fas fa-moon "></i>
              </div>
              {:else}
              <div class='p-1 rounded-full text-primary text-right w-full '>
                <i class="fas fa-sun "></i>
                </div>
              {/if}
            </button>
          </div>

      </div>
    </div>
  </div>
</nav>
</header>