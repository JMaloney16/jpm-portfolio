<script>
    export let gift;
</script>

<div class="p-4 sm:p-6 flex flex-col lg:grid lg:grid-cols-3 gap-4 rounded-lg border border-solid border-steel_blue-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
    <div class="col-span-2 justify-stretch space-y-2 lg:space-y-4">
    <h3 class="font-medium py-1 lg:py-3 lg:col-start-2 text-xl sm:text-2xl md:text-3xl ">{gift.name}</h3>
    <slot/>
    {#if gift.href}
    <div class="ml-auto cursor-pointer text-xl text-red-500 hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden">
        <a href={gift.href} target="_blank" class="relative z-4">Go to &rarr;</a>
    </div>
    {/if}
    </div>
    <div class="bg-prussian_blue-300 col-start-3 place-items-center px-4 text-5xl md:text-6xl mx-auto duration-200">
        <a href={gift.href} target="_blank">
            <img src={gift.img} alt="Image of a {gift.name}" class="max-h-40 lg:max-h-72 text-sm rounded-lg"/>
        </a>
    </div>    
</div>