<script>
    import {educationDatas,workDatas} from './../../lib/aboutDatas'
</script>

<div  id="about" class="flex justify-center w-full min-h-screen pt-14">
    <main class="container max-w-full md:max-w-[1000px] px-3 md:px-6 flex flex-col md:flex-row gap-8 ">
        <section class="w-full md:w-3/5 ">
            <div>
                <h1 class='text-3xl font-semibold text-primary'>About Me</h1>
                <div class="w-[350px] md:hidden bg-white  border h-[350px] mb-6"/>
                <div>

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