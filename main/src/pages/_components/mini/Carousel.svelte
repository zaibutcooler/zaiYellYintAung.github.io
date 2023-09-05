<script>
    import Carousel from "svelte-carousel";


    export let images

   
    let carousel; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext();
    };
  </script>
  
  <style>
    .img-container img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style>

<Carousel
    bind:this={carousel}
    let:loaded
    arrows={false}
    autoplay={true}
    autoplayDuration={4000}
>
    {#each images as src, imageIndex (src)}
        <div class="img-container">
            {#if loaded.includes(imageIndex)}
                <img src={src.url} alt={src.description} />
            {/if}
        </div>
    {/each}
</Carousel>