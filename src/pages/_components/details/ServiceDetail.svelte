<script>
  export let item;
  export let close;

  document.body.classList.add("disable-scrollbar");
  const handleClose = () => {
    close();
    document.body.classList.remove("disable-scrollbar");
  };
</script>

<div
  class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-filter backdrop-blur z-50 px-2"
>
  <div
    class="mt-8 bg-snow_white dark:bg-super_black px-6 pb-6 pt-4 rounded-lg shadow-md w-full md:w-[650px] font-medium leading-6 min-h-[460px] text-secondary_bold"
  >
    <div class="flex justify-end m-0 p-0">
      <button class="" on:click={handleClose}>
        <i class="fas fa-xmark"></i>
      </button>
    </div>

    <main class="px-0 md:px-4">
      <h1
        class="md:text-lg text-base font-semibold w-full text-center text-super_black dark:text-snow_white mb-3"
      >
        {item.subTitle}
      </h1>
      <div class="md:text-base text-sm font-medium">
        {#each item.services as service}
          <h2
            class="flex gap-4 md:gap-5 mb-2 items-top text-gray-700 dark:text-gray-300"
          >
            <i class="fa-regular fa-circle-check mt-1"></i>
            <span class="whitespace-normal">{service.text}</span>
          </h2>
        {/each}
      </div>
    </main>
  </div>
</div>
