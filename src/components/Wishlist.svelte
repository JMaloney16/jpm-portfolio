<script>
    import Gift from "./Gift.svelte";

    let gifts = [
        {name: 'Air Force 1s (White)', img: 'https://i8.amplience.net/i/jpl/jd_334937_a?qlt=92&w=750&h=531&v=1&fmt=auto', href: 'https://www.jdsports.co.uk/product/white-nike-air-force-1-07/15958093/'},
        {name: 'Lego Supra', img: 'https://www.lego.com/cdn/cs/set/assets/blta3d7d35ff61a9888/76901_alt1.jpg', href: 'https://www.amazon.co.uk/Hasbro-Gaming-Crocodile-Scamuelas-Applicable-E4898175/dp/B08W8T8LS4?th=1'}
    ]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="wishlistHeader" class="h-1/2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                My <span class="poppins text-red-600">Christmas</span> Wishlist<br/>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                Because you really want to treat me this christmas.
            </p>
        </div>
        </section>

        <section id="wishlistItems" class="py-20 lg:py-32 flex flex-col gap-24 lg:px-6">
            <div class="grid grid-cols-1 gap-12 lg:gap-10">
                <Gift gift={gifts[0]}>
                    <p>I would like another pair of white Air Forces because my white ones are now Yellow.</p>
                    <p>The white ones with a black tick would be nice, I'm size 12 in these.</p>
                </Gift>
                <Gift gift={gifts[1]}>
                    <p>Because I haven't bought a life sized one yet.</p>
                </Gift>
                <!-- <Gift gift={gifts[2]}>
                    <p>I want to feel like Paul Walker in the car.</p>
                </Gift> -->
            </div>
    </section>
</main>