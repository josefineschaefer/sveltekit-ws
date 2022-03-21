
import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      optimizeDeps: {
        include: ['axios'],
      },
    },
  },
};
export default config;