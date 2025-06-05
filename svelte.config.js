import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',   // ← replaces default "build"
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: '/octo-presso',    // optional: for GitHub Pages or subdir deploys
    }
  }
};
