<script>
import { storyblokEditable } from "@storyblok/svelte";

export let blok;
</script>

<div use:storyblokEditable={blok}>
  <h2>{ blok.name }</h2>
</div>