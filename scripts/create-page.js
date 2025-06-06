import { promises as fs } from 'fs';
import path from 'path';

const args = process.argv.slice(2);

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

function startCase(str) {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

if (args.includes('--list') || args.includes('-l')) {
  console.log('Available templates:');
  for (const [id] of Object.entries(idToFile)) {
    console.log(`- ${id}\t${startCase(id)}`);
  }
  process.exit(0);
}

const [slug, template] = args;

if (!slug || !template) {
  console.error('Usage: node scripts/create-page.js <slug> <template-id>');
  console.error('       node scripts/create-page.js --list');
  process.exit(1);
}

if (!idToFile[template]) {
  console.error(`Template "${template}" not found.`);
  console.log('Available templates:');
  for (const id of Object.keys(idToFile)) {
    console.log(`- ${id}`);
  }
  process.exit(1);
}

const routeDir = path.resolve('src/routes', slug);
try {
  await fs.access(routeDir);
  console.error(`Route ${slug} already exists at src/routes/${slug}`);
  process.exit(1);
} catch {
  // directory does not exist, proceed
}

await fs.mkdir(routeDir, { recursive: true });
const componentFile = idToFile[template];
const content = `<script>
  import Template from '$lib/templates/${componentFile}';
</script>

<Template />
`;
await fs.writeFile(path.join(routeDir, '+page.svelte'), content);
console.log(`Created page src/routes/${slug}/+page.svelte using template ${template}`);
