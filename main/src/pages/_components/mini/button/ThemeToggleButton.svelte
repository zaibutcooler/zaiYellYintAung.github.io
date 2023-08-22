<script>

  const theme = localStorage.getItem('theme')





  const handleClick = () => {
    if(theme === 'dark'){
      localStorage.setItem(theme,'dark')
      document.documentElement.classList.remove('dark')

    }else{
      document.documentElement.classList.add('dark')

    }

};
</script>

<main>
  <button class="w-24 py-2 bg-primary text-super_black font-semibold rounded-sm hover:text-bg_white" on:click={handleClick}>
    Theme
  </button>
</main>
