<script>
    import Step from "./Step.svelte";

    let steps = [
        {name: 'ACC Grid Tool', icon: 'fa-solid fa-flag-checkered'},
        {name: 'Esports Broadcasting Infrastructure', icon: 'fa-solid fa-video'},
        {name: 'This Website', icon: 'fa-solid fa-globe'}
    ]

    let benefits = [
        {name : 'a computer scientist', description: 'Went to university for 4 years and all I got was a lousy degree'},
        {name : 'an infrastructure engineer', description: 'I build systems and shit'},
        {name : 'an esports professional', description: 'I know how to handle 17 year old fortnite pros'},
    ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Jack</span> Maloney <br/>Full Stack
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favourite tech</span> includes Ansible, TailwindCSS, some other crap.
            </p>
            <a href="#" target="_blank"
            class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"/>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <!-- <div class="relative shadow-2xl grid place-items-center"> -->
            <!-- <img src={"images/profile.png"} alt="Jack circa 2013" class="object-cover z-[2] max-h-[70vh]"/> -->
        <!-- </div> -->
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my projects.
            </h6>
            <h3>
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
            <a href="" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
                <i class="fa-regular fa-circle-play"></i>
                <p>Watch this</p>
            </a>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
                <Step step={steps[0]}>
                    <p>Broadcasting graphics and tools for Assetto Corsa Competizione
                    <strong class="text-violet-400">Node.JS, Python</strong>
                    Node.JS for ACC telemetry, Python for graphics generation.</p>
                </Step>
                <Step step={steps[1]}>
                    <p>Creating a workflow to quickly provision and setup cloud machines for use in esports broadcasting, technologies include
                    <strong class="text-violet-400">Ansible, Terraform, Paperspace, and Powershell scripting</strong>.
                    </p>
                </Step>
                <Step step={steps[2]}>
                    <p>This website is built as a DevOps project, utilizing cloud services, CI/CD pipelines, and more. It makes use of
                    <strong class="text-violet-400">SvelteKit & TailwindCSS, Azure</strong> and other technologies in the background.
                    </p>
                </Step>
            </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
                    after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span class="poppins text-violet-400">about</span> me.
        </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am ...</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
            {/each}
        </div>
    </section>
</main>