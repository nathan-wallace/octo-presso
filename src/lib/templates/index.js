// @ts-nocheck
// Automatically import all template components in this directory
const modules = import.meta.glob('./*.svelte', { eager: true });

function fileToId(file) {
  return file
    .replace('./', '')
    .replace('.svelte', '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function startCase(str) {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export const templates = Object.entries(modules).map(([path, mod]) => {
  const id = fileToId(path);
  const name = mod.displayName || startCase(id);
  return { id, name, component: mod.default };
});
