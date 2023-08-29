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
class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-filter backdrop-blur z-50 px-2">
<div
  class="mt-8 bg-snow_white dark:bg-super_black px-6 pb-6 pt-4 rounded-3xl shadow-md lg:w-[800px] w-full md:w-[700px] min-h-[400px] text-secondary_bold">
  <div class="flex justify-end m-0 p-0">
    <button class="" on:click={handleClose}>
      <i class="fas fa-xmark"></i>
    </button>
  </div>

  <main>
    <h1>{item.name}</h1>
  </main>


</div>
</div>