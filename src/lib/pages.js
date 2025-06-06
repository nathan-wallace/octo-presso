// @ts-nocheck
export const marketingPages = Object.keys(
  import.meta.glob('/src/content/*.md')
).map((file) => {
  const slug = file.split('/').pop().replace('.md', '');
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return { slug, name };
});
