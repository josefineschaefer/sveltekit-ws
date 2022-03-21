<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div>
	<h3 use:storyblokEditable={blok}>
		{blok.headline}
	</h3>
	<h4 use:storyblokEditable={blok}>
		{blok.subheadline}
	</h4>
</div>
