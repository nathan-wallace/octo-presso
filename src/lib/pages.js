// @ts-nocheck
export const marketingPages = Object.keys(
  import.meta.glob('/src/content/*.md')
).map((file) => {
  const slug = file.split('/').pop().replace('.md', '');
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return { slug, name };
});

export const appPages = Object.keys(
  import.meta.glob('/src/routes/*/+page.svelte')
)
  .filter((file) => !file.includes('[slug]') && file !== '/src/routes/+page.svelte')
  .map((file) => {
    const parts = file.split('/');
    const slug = parts[parts.length - 2];
    const name = slug.charAt(0).toUpperCase() + slug.slice(1);
    return { slug, name };
  });
