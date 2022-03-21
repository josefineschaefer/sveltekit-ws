<script context="module">
	import { storyblokInit, apiPlugin } from '@storyblok/svelte';
	import Feature from '../components/Feature.svelte';
	import Grid from '../components/Grid.svelte';
	import Page from '../components/Page.svelte';
	import Teaser from '../components/Teaser.svelte';
    import Newslettersection from '../components/Newslettersection.svelte';
    import Globalreference from '../components/Globalreference.svelte';

	storyblokInit({
		accessToken: 'GGaLDiz35bT8i0WlqsG8SAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser, 
            newslettersection: Newslettersection,
            globalreference: Globalreference
		}
	});
</script>

<script>
      import "../app.css";
</script>

<main class="container mx-auto my-6 max-w-lg">
	<slot />
	<!-- <Newslettersection {blok}/> -->
</main>
