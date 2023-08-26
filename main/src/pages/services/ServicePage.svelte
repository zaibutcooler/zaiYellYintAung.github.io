<script>
    import ServiceDetail from '../_components/details/ServiceDetail.svelte';
    import serviceDatas from './../../lib/servicesDatas';

    const aiDatas = serviceDatas.filter(item => item.type === 'AI Development');
    const webDatas = serviceDatas.filter(item=>item.type === 'Web Development')
    const mobileDatas = serviceDatas.filter(item=>item.type === 'Mobile Development')

    let showDetail = false;
    let currentItem = null

    const toggleDetail = (item) => {
        currentItem = item
        showDetail = !showDetail;

    }
  </script>
  
  <div id="services" class="flex justify-center w-full min-h-screen pt-14">
    <main class="container max-w-full md:max-w-[1000px]">
      {#if showDetail && currentItem}
        <ServiceDetail item={currentItem} close={toggleDetail}/>
      {/if}


      <section class="px-3 md:px-6 mb-6">
        <h1 class="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-3 md:mb-6 leading-10 md:leading-12 flex gap-3">
          Digital Solutions Tailored to You
        </h1>
        <p class="text-sm md:text-base md:pr-6 mb-6 leading-6 text-bg_white w-full md:w-3/4">
          Experience tailored digital solutions designed just for you. I'm here to understand your goals and aspirations, whether it's a website, app, or strategy. Welcome to a partnership where your vision takes the lead.
        </p>
      </section>
  
      <section class="w-full md:w-5/6 pl-0 md:pl-5 ">
        <div class="block md:flex">
          <div class="w-full md:w-1/3 py-4 px-3 md:px-6 border-l dark:border-border_black">
            <h1 class="pl-0 md:pl-4 font-semibold text-[0.9rem]">
              Ai Development
            </h1>
          </div>
          <div class="w-full md:w-2/3 px-0 md:px-6">
            {#each aiDatas as data}
              <button on:click={()=>toggleDetail(data)} class="mb-4 text-left px-3 py-5 md:p-5 md:rounded-lg hover:bg-super_black transition-colors group duration-500 ease-in-out cursor-pointer">
                <p class="dark:text-border_black mb-4">| In {data.duration}</p>
                <h1 class="dark:text-snow_white font-semibold mb-3">{data.title}</h1>
                <p class="text-sm dark:text-border_black leading-6 mb-3">{data.description}</p>
                <button class="text-sm font-semibold dark:text-primary">See Details</button>
              </button>
            {/each}
          </div>
        </div>

        <div class='py-4'/>

        <div class="block md:flex">
            <div class="w-full md:w-1/3 py-4 px-3 md:px-6 border-l dark:border-border_black">
              <h1 class="pl-0 md:pl-4 font-semibold text-[0.9rem]">
                Web Development
              </h1>
            </div>
            <div class="w-full md:w-2/3 px-0 md:px-6">
              {#each webDatas as data}
                <button on:click={()=>toggleDetail(data)} class="mb-4 text-left px-3 py-5 md:p-5 md:rounded-lg hover:bg-super_black transition-colors group duration-500 ease-in-out cursor-pointer">
                  <p class="dark:text-border_black mb-4">| In {data.duration}</p>
                  <h1 class="dark:text-snow_white font-semibold mb-3">{data.title}</h1>
                  <p class="text-sm dark:text-border_black leading-6 mb-3">{data.description}</p>
                  <button class="text-sm font-semibold dark:text-primary">See Details</button>
                </button>
              {/each}
            </div>
          </div>

          <div class='py-4'/>

          <div class="block md:flex">
            <div class="w-full md:w-1/3 py-4 px-3 md:px-6 border-l dark:border-border_black">
              <h1 class="pl-0 md:pl-4 font-semibold text-[0.9rem]">
                Mobile Development
              </h1>
            </div>
            <div class="w-full md:w-2/3 px-0 md:px-6">
              {#each mobileDatas as data}
                <button on:click={()=>toggleDetail(data)} class="mb-4 text-left px-3 py-5 md:p-5 md:rounded-lg hover:bg-super_black transition-colors group duration-500 ease-in-out cursor-pointer">
                  <p class="dark:text-border_black mb-4">| In {data.duration}</p>
                  <h1 class="dark:text-snow_white font-semibold mb-3">{data.title}</h1>
                  <p class="text-sm dark:text-border_black leading-6 mb-3">{data.description}</p>
                  <button class="text-sm font-semibold dark:text-primary">See Details</button>
                </button>
              {/each}
            </div>
          </div>
      </section>
    </main>
  </div>
  