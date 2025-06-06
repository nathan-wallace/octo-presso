// @ts-nocheck
import fs from 'fs/promises';
import path from 'path';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = true;

export async function load({ params }) {
  const file = path.join('src', 'content', `${params.slug}.md`);
  try {
    const markdown = await fs.readFile(file, 'utf-8');
    const html = marked.parse(markdown);
    return { html, slug: params.slug };
  } catch (e) {
    throw error(404, 'Page not found');
  }
}
