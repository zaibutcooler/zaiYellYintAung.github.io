<script>
    export let item;
    export let close;

    document.body.classList.add("disable-scrollbar");

    const handleClose = ()=>{
        close()
        document.body.classList.remove("disable-scrollbar")
    }
</script>


<div
class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-filter backdrop-blur z-50 px-2  ">
<div
  class="mt-8 bg-snow_white dark:bg-super_black px-6 pb-6 pt-4 rounded-lg shadow-md lg:w-[650px] w-full md:w-[700px] font-medium leading-6 min-h-[460px] text-secondary_bold">
  <div class="flex justify-end m-0 p-0">
    <button class="" on:click={handleClose}>
      <i class="fas fa-xmark"></i>
    </button>
  </div>

  <main>
    <h1 class='md:text-base text-sm font-semibold w-full text-center text-super_black dark:text-snow_white mb-3'>{item.subTitle}</h1>
    <div class="text-xs md:text-sm font-medium">
      {#each item.services as service}
        <h2 class="flex gap-4 mb-1.5 items-center">
          {#if service.plan==='basic'}
          <i class="fas fa-certificate"></i>
        {:else if service.plan==='standard'}
        <i class="fas fa-star"></i>
        {:else}
        <i class="fas fa-crown"></i>
        {/if}
        
        <span>{service.text}</span></h2>
      {/each}
    </div>
  </main>


</div>
</div>