<script>
  $: dark = false;

  const handleClick = () => {
    dark = !dark;

    if (dark) {
      document.documentElement.classList.add('dark');
      window.alert('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      window.alert('Light mode enabled');
    }
  };
</script>

<main>
  <button class="w-24 py-2 bg-primary text-super_black font-semibold rounded-sm hover:text-bg_white" on:click={handleClick}>
    Theme
  </button>
</main>
