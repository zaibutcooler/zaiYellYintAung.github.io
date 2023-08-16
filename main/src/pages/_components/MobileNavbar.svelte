<script>
    let isOpen = false;
    
    let links = [
      { title: "Home", icon: "fas fa-home", go: "#home" },
      { title: "About", icon: "fas fa-info-circle", go: "#about" },
      { title: "Skills", icon: "fas fa-cogs", go: "#skills" },
      { title: "Services", icon: "fas fa-handshake", go: "#services" },
      { title: "Portfolio", icon: "fas fa-briefcase", go: "#portfolio" },
      { title: "Contact", icon: "fas fa-envelope", go: "#contact" },
    ];
  
    function open() {
      isOpen = true;
    }
  
    function close() {
      isOpen = false;
    }
  </script>
  
  <header class="block md:hidden">
  

    <nav class=" bg-snow_white dark:bg-super_black text-super_black dark:text-bg_white py-2 fixed bottom-0 left-0 w-full">
        {#if isOpen}
      <div class="grid grid-cols-3">
        {#each links as link (link.title)}
          <div class="text-center py-3 flex-col">
            <div>
            <a href={link.go} class="dark:hover:text-snow_white"><i class={link.icon}></i></a>
        </div>
        <div>
            <a href={link.go} class="text-xs dark:hover:text-snow_white">{link.title}</a></div>
          </div>
        {/each}
      </div>
      <div class="flex justify-end">
        <button on:click={close}>
          <i class="fas fa-times mr-6 dark:hover:text-snow_white"></i>
        </button>
      </div>
      {:else}
      <div class="flex justify-between px-4 ">
        <h1 class="dark:hover:text-snow_white">Zai</h1>
        <button on:click={open}><i class="fa-solid fa-compass dark:hover:text-snow_white"></i></button>
      </div>


      {/if}
    </nav>
  


   
  </header>
  
  <style>
    /* Add your styling here */
  </style>
  