<script>
    import Gift from "./Gift.svelte";

    let gifts = [
        {name: 'Lego Supra', img: 'https://www.lego.com/cdn/cs/set/assets/blta3d7d35ff61a9888/76901_alt1.jpg', href: 'https://www.amazon.co.uk/Hasbro-Gaming-Crocodile-Scamuelas-Applicable-E4898175/dp/B08W8T8LS4?th=1'},
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
                    <p>Still don't have a Supra.</p>
                </Gift>
            </div>
    </section>
</main>
