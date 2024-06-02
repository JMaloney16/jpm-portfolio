<script>
    export let y;
    export let sociallinks;
    
    let tabs = [
    {name: 'Projects', link: '#projects'},
    {name: 'About me', link: '#about'}
    ]
    
</script>

<header class={'sticky z=[10] top-2 duration-200 px-8 rounded-full flex items-center justify-between border border-solid ' + (y > 0 ? ' py-4 bg-slate-950/70 border-transparent backdrop-blur-md' : 'py-6 bg-transparent border-transparent')}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Jack</b> Maloney
    </h1>
    <div class="flex ml-auto pr-4 items-center gap-4">
        <!-- {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
            {/each} -->
            <a href="mailto: jackpmaloney1@gmail.com" rel="external" class="flex gap-2 justify-end items-center group rounded-full sm:hover:bg-white duration-200 sm:hover:text-black sm:hover:px-5">
                <p class="sm:flex hidden poppins text-transparent group-hover:text-black">jack@jackmaloney.co.uk</p>
                <i class="fa-solid fa-envelope"/>
            </a>
            {#each sociallinks as social}
            <a rel="external" target="_blank" href={social.link}>
                <i class={social.icon}/>
            </a>
            {/each}
        </div>
    </header>