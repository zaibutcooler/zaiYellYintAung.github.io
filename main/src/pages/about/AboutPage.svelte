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


        <section class="w-full md:w-2/5 ">
            <div class="md:w-full hidden md:block bg-white  border h-[350px] mb-6">

            </div>
            <div class="md:w-full w-[350px] p-6 rounded-md dark:bg-super_black h-[320px] mb-6">
                  <h1 class="font-semibold text-xl"><i class="fas fa-graduation-cap w-8"></i>Education</h1>
                  {#each educationDatas as item (item.name)}
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                  {/each}
            </div>
            <div class="md:w-full w-[350px] p-6 rounded-md dark:bg-super_black h-[250px] mb-6">
                  <h1 class="font-semibold text-xl"><i class="fas fa-briefcase w-8"></i>Work</h1>  
                    
            </div>
        


        </section>

    </main>
</div>