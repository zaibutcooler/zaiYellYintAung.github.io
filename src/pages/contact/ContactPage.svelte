<script>
  import contactData from "./../../lib/contactDatas";
  let copySuccess = false;

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      copySuccess = true;
      setTimeout(() => {
        copySuccess = false;
      }, 1000);
    });
  };

  const handleSubmit = () => {};
</script>

<div id="contact" class="flex justify-center w-full min-h-screen pt-14 pb-14">
  <main class="container max-w-full md:max-w-[1100px] px-3 md:px-6">
    <div class="flex flex-col md:flex-row-reverse gap-8 w-full">
      <section class="w-full md:w-1/2 dark:text-bg_white rounded-xl h-[520px]">
        <div class="grid-cols-2 grid gap-4 h-full">
          {#each contactData as data (data.icon)}
            <a
              href={data.to}
              tabindex="0"
              on:click={() => copyText(data.name)}
              on:keydown={() => {}}
              class="p-5 dark:hover:border-bg_white border dark:border-super_black dark:bg-super_black bg-snow_white font-medium transition-colors duration-300 ease-in-out rounded-md col-span-1 md:h-full"
            >
              <h1 class="font-semibold text-[1.55rem] w-full mb-3">
                <i class={data.icon} />
              </h1>
              <p class="text-sm mb-2 truncate">{data.name}</p>
              <p class="text-[0.7rem] dark:text-border_black text-gray-500">
                {data.description}
              </p>
            </a>
          {/each}
        </div>
      </section>
      <section
        class="w-full md:w-1/2 min-h-[420px] p-6 md:p-8 bg-snow_white rounded-2xl dark:bg-super_black"
      >
        <div class="mb-8 mt-1 md:mt-0">
          <h1
            class="text-2xl md:text-3xl font-bold text-super_black dark:text-snow_white"
          >
            Get In Touch With Me
          </h1>
        </div>

        <div class="mb-6 flex gap-4">
          <div class="w-1/2">
            <label
              class="block text-gray-700 dark:text-bg_white text-sm font-bold mb-3"
              for="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="px-3 py-2 border rounded dark:bg-bg_black bg-snow_white dark:border-border_black dark:focus:bg-super_black w-full"
              required
            />
          </div>
          <div class="w-1/2">
            <label
              class="block text-gray-700 dark:text-bg_white text-sm font-bold mb-3"
              for="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="px-3 py-2 border rounded dark:bg-bg_black bg-snow_white dark:border-border_black dark:focus:bg-super_black w-full"
              required
            />
          </div>
        </div>

        <div class="mb-6 w-full">
          <label
            class="block text-gray-700 dark:text-bg_white text-sm font-bold mb-3"
            for="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="px-3 py-2 border rounded dark:bg-bg_black bg-snow_white dark:border-border_black dark:focus:bg-super_black w-full"
            required
          />
        </div>
        <div class="mb-6 w-full flex-grow">
          <label
            class="block text-gray-700 dark:text-bg_white text-sm font-bold mb-3"
            for="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="px-3 py-2 border rounded dark:bg-bg_black bg-snow_white dark:border-border_black dark:focus:bg-super_black w-full h-full"
            required
          ></textarea>
        </div>
        <div class="w-full flex justify-end mt-8">
          <button
            on:click={handleSubmit}
            class="px-4 py-2 rounded-md bg-primary font-medium hover:text-bg_white dark:bg-super_black dark:text-snow_white border dark:hover:border-snow_white dark:hover:text-snow_white border-bg_white text-snow_white dark:border-super_black transition-colors duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </section>
    </div>
  </main>
</div>
