<script>
    import projectDatas from './../../lib/projectDatas'
</script>

<div  id="skills" class="flex justify-center w-full min-h-screen pt-14">
    <main class="container max-w-full md:max-w-[1000px] px-3 md:px-6  leading-6">

    <section>
        <h1 class='text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-3 md:mb-6 leading-8 md:leading-12 flex gap-3'><span class='hidden md:block'>Tour</span> My Gallery of Innovations</h1>
        <p class="text-sm md:text-base md:pr-6 mb-6 leading-6 text-bg_white w-full md:w-3/4">Welcome to my creative haven! Browse through a curated showcase of personal projects that highlight not just my skills, but also my dedication to creativity.</p>
    </section>


    <section class="w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each projectDatas as project (project.name)}
            <div class="dark:bg-super_black cursor-pointer px-4 py-5 rounded-md border transition-colors group duration-500 ease-in-out dark:border-super_black dark:hover:border-bg_white text-bg_white ">
                <div class='w-[50px] h-[50px] rounded-full mb-3 dark:bg-white text-snow_white'></div>
                <h1 class='mb-2 group-hover:text-snow_white'>{project.name}</h1>    
                <p class='text-sm mb-2 flex-grow h-[70px]'>{project.desc}</p>

                <p class="text-sm flex gap-3 items-center group-hover:text-snow_white"><i class="fa-solid fa-link"/> kazeki.vercel.app </p>

            </div>
        {/each}
    </section>
    



    </main>
</div>