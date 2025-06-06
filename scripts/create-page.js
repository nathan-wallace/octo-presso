import { promises as fs } from 'fs';
import path from 'path';

const [slug, template] = process.argv.slice(2);

if (!slug || !template) {
  console.error('Usage: node scripts/create-page.js <slug> <template-id>');
  process.exit(1);
}

const templatesDir = path.resolve('src/lib/templates');
const files = await fs.readdir(templatesDir);
const idToFile = {};
for (const file of files) {
  if (file.endsWith('.svelte')) {
    const id = file
      .replace('.svelte', '')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
    idToFile[id] = file;
  }
}

if (!idToFile[template]) {
  console.error(`Template "${template}" not found. Available: ${Object.keys(idToFile).join(', ')}`);
  process.exit(1);
}

const routeDir = path.resolve('src/routes', slug);
await fs.mkdir(routeDir, { recursive: true });
const componentFile = idToFile[template];
const content = `<script>
  import Template from '$lib/templates/${componentFile}';
</script>

<Template />
`;
await fs.writeFile(path.join(routeDir, '+page.svelte'), content);
console.log(`Created page src/routes/${slug}/+page.svelte using template ${template}`);
