import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()],
	// FIX: temporary fix till axios gets removed
	optimizeDeps: {
		include: ['axios']
	},
	server: {
		https: true
	}
});
