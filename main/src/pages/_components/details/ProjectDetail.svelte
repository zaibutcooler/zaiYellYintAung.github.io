<script>
  import Carousel from "../mini/Carousel.svelte";

  export let item;
  export let close;

  document.body.classList.add("disable-scrollbar");

  const handleClose = () => {
    close();
    document.body.classList.remove("disable-scrollbar");
  };

</script>

<div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-filter backdrop-blur z-50 px-2">
  <div class="mt-8 bg-snow_white dark:bg-super_black px-4 md:px-6 pb-6 pt-4 rounded-lg shadow-md lg:w-[750px] w-full md:w-[700px] font-medium leading-6 min-h-[460px] overflow-y-auto text-secondary_bold">
    <div class="flex justify-end m-0 p-0 mb-2">
      <button class="" on:click={handleClose}>
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class='w-full flex flex-col md:flex-row gap-4 h-[370px]'>

      <section class="w-full md:w-1/2 ">
        <div class="dark:bg-bg_black bg-bg_white p-1 rounded-sm w-full mb-3">
        <Carousel/>
        </div>
        <div class="flex gap-4 flex-wrap">
        {#each item.usedTech as tech}
          <div>{tech}</div>
        {/each}
      </div>

      </section>

      <section class="w-full text-xs md:text-sm md:w-1/2 p-0  dark:border-border_black rounded-md h-full ">
        <div class='w-[50px] h-[50px] rounded-full mb-3 dark:bg-white bg-primary text-super_black dark:text-snow_white'></div>
        <h1 class='mb-2 dark:group-hover:text-snow_white group-hover:text-super_black text-left font-semibold text-base md:text-lg'>{item.name}</h1>
        <p class='  mb-2 flex-grow text-left whitespace-normal'>{item.desc}</p>
        {#each item.features as feature}
          <p class="">{feature}</p>
        {/each}

    </section>



    </div>
  </div>
</div>
