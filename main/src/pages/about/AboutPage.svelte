<script>
    import {educationDatas,workDatas} from './../../lib/aboutDatas'
</script>

<div  id="about" class="flex justify-center w-full min-h-screen pt-14">
    <main class="container max-w-full md:max-w-[1000px] px-3 md:px-6 flex flex-col md:flex-row gap-8 ">
        <section class="w-full md:w-3/5 pr-0 md:pr-4">
            <div>
                <h1 class='text-3xl md:text-4xl font-semibold text-primary mb-6 leading-12'>I'm Zai, Forging a Path of Innovation and Success in Entrepreneurship</h1>
                <div class="w-[350px] md:hidden bg-white  border h-[350px] mb-6"/>
                <div class="gap-y-4 leading-6 flex flex-col text-[0.9rem] md:text-base">
                    <p>Welcome to my world of innovation and ambition. I am Zai, a relentless creator hailing from Myanmar, born with the yearning to redefine the boundaries of what's possible. My journey commenced in 2003, and since then, I've embarked on an unwavering odyssey to craft the future through innovation and entrepreneurship.</p>
                    <p>The digital realm is my canvas, where I wield cutting-edge technologies like Next.js, Svelte Kit, MERN, MEVN, Django, and Ruby on Rails to sculpt groundbreaking solutions. Inspired by luminaries like Steve Jobs, I'm driven to fuse elegance and innovation, just as Apple did.</p>
                    <p>Proficient in English and Japanese, I'm not merely a coder; I'm a global communicator. My work ethic is my insignia; I craft code, chisel dreams into reality, and sculpt bodies through unwavering dedication to a fit and vibrant life.</p>
                    <p>As an entrepreneur, my aspirations know no bounds. I envision a journey that transcends borders, a path that resonates in the realms of Silicon Valley and beyond. My mission: to birth a unicorn company before 25, leaving an indelible mark on the world.</p>
                    <p>Thank you for being a part of this adventure. Connect with me as we script the next chapter of innovation together!</p>


                </div>
                
            </div>
        </section>


        <section class="w-full md:w-2/5 text-snow_white ">
            <div class="md:w-full hidden md:block bg-white  border h-[350px] mb-6">

            </div>
            <div class="md:w-full w-[350px] p-6 rounded-2xl border  dark:border-border_black min-h-[320px] mb-6">
                  <h1 class="font-semibold text-xl  mb-3"><i class="fas fa-graduation-cap w-8"></i>Education</h1>
                  {#each educationDatas as item (item.name)}
                    <div class='p-2  mb-2 rounded-md'>
                        <h1 class='mb-1'>{item.name}</h1>
                        <p class="flex justify-between text-sm text-border_black mb-0.5">
                            <span>{item.degree}</span>
                            <span>{item.date}</span>
                        </p>
                        {#if item.note}
                        <p class="text-[0.55rem] text-border_black">Note : {item.note}</p>
                        {/if}
                    </div>
                  {/each}
            </div>
            <div class="md:w-full w-[350px] p-6 rounded-2xl border  dark:border-border_black  min-h-[320px] mb-6">
                <h1 class="font-semibold text-xl  mb-3"><i class="fas fa-briefcase w-8"></i>Work</h1>
                {#each workDatas as item (item.date)}
                  <div class='p-2  mb-2 rounded-md '>
                      <h1 class='mb-1'>{item.name}</h1>
                      <p class="flex justify-between text-sm text-border_black">
                          <span>{item.position}</span>
                          <span>{item.date}</span>
                      </p>
                      {#if item.note}
                      <p class="text-[0.55rem] text-border_black">Note : {item.note}</p>
                      {/if}
                  </div>
                {/each}
          </div>


        </section>

    </main>
</div>