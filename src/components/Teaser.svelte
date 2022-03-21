<script>
import { storyblokEditable } from "@storyblok/svelte";

export let blok;
console.log(blok, 'blok in teaser')
</script>

<h1 use:storyblokEditable={blok} class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
    { blok.headline }
</h1>