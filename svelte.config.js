import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',   // ← replaces default "build"
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/octo-presso',    // optional: for GitHub Pages or subdir deploys
    }
  }
};
