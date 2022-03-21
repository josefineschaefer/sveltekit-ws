<script context="module">
	import { storyblokInit, apiPlugin } from '@storyblok/svelte';
	import Feature from '../components/Feature.svelte';
	import Grid from '../components/Grid.svelte';
	import Page from '../components/Page.svelte';
	import Teaser from '../components/Teaser.svelte';

	storyblokInit({
		accessToken: 'GGaLDiz35bT8i0WlqsG8SAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser
		}
	});
</script>

<main>
	<slot />
</main>
