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
    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        <!-- {#each tabs as tab, index}
            <a href={tab.link} class="duration-200 hover:text-violet-400">
                <p>{tab.name}</p>
            </a>
        {/each} -->
        <a href="mailto: jackpmaloney1@gmail.com" rel="external">
            <i class="fa-regular fa-envelope"/>
        </a>
        {#each sociallinks as social}
            <a rel="external" target="_blank" href={social.link}>
                <i class={social.icon}/>
            </a>
        {/each}
    </div>
</header>