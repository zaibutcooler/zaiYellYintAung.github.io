<script>
    import Carousel from "svelte-carousel";

    export let images = [
      {
        url: "https://res.cloudinary.com/beswift/image/upload/v1650391490/photo-1644241687200-eadaf7601290_xcz2kh.jpg",
        description: "image1",
      },
      {
        url: "https://res.cloudinary.com/beswift/image/upload/v1650391337/photo-1647067867267-e01d98462f3c_ugtnwe.jpg",
        description: "image2",
      },
      {
        url: "https://res.cloudinary.com/beswift/image/upload/v1650391131/photo-1648800475313-2bb7fbec8701_ae60yw.jpg",
        description: "image3",
      },
      {
        url: "https://res.cloudinary.com/beswift/image/upload/v1650390102/photo-1649894222226-056a1a79d9fb_xlv73h.jpg",
        description: "image4",
      },
      {
        url: "https://res.cloudinary.com/beswift/image/upload/v1650389425/photo-1649894221695-45abb718a190_sgjhwd.jpg",
        description: "image5",
      },
    ];
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