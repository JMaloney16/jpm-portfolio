<script>
    import Gift from "./Gift.svelte";

    let gifts = [
        {name: 'Air Force 1s (White)', img: 'https://i8.amplience.net/i/jpl/jd_334937_a?qlt=92&w=750&h=531&v=1&fmt=auto', href: 'https://www.jdsports.co.uk/product/white-nike-air-force-1-07/15958093/'},
        {name: 'Lego Supra', img: 'https://www.lego.com/cdn/cs/set/assets/blta3d7d35ff61a9888/76901_alt1.jpg', href: 'https://www.amazon.co.uk/Hasbro-Gaming-Crocodile-Scamuelas-Applicable-E4898175/dp/B08W8T8LS4?th=1'},
        {name: 'Washbag', img: 'https://cdn.shopify.com/s/files/1/2986/1172/files/small-wash-pouch-black-1_320765e6-dcac-4514-9805-8bc58a4c0c0f.jpg?v=1726892409&width=1600&height=1600&crop=center', href: 'https://www.peakdesign.com/en-gb/products/wash-pouch'},
        {name: 'PEC Drive', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ksRM1HFQcIBHSlFOi91Z8J8aVvkp9QuPcw&s', href: 'https://www.porsche.com/silverstone/en/experience/'},
        {name: 'Apple Magic Trackpad', img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXK93?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1730508284008', href: 'https://www.apple.com/uk/shop/product/MXK93Z/A/magic-trackpad-usb%E2%80%91c-white-multi-touch-surface?fnode=56bbc5336ecad925ffcc6546e1e08a1ed21419305c46e7035c1085830b778194189b1d4d3d4175fd76291d62dbcc53d6a080141ab0216c014940e9f22cce473f669162b6c8b38c9655529eea8dff1129f4cb0286023e3a437daea4ccba3463e3'}
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
                <Gift gift={gifts[2]}>
                    <p>A nice washbag, this one is just an example (and matches my duffel bag).</p>
                </Gift>
                <Gift gift={gifts[3]}>
                    <p>Let me go in a Cayman for a bit.</p>
                </Gift>
                <Gift gift={gifts[4]}>
                    <p>A Magic trackpad, the white one matches my laptop.</p>
                </Gift>
            </div>
    </section>
</main>