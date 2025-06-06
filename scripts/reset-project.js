import { rm } from 'fs/promises';
import { execSync } from 'child_process';

const CLEAN_DIRS = ['node_modules', '.svelte-kit', 'docs'];

async function reset() {
  console.log('Cleaning build artifacts...');
  for (const dir of CLEAN_DIRS) {
    await rm(dir, { recursive: true, force: true });
  }

  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  console.log('Building site...');
  execSync('npm run build', {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });

  console.log('Running checks...');
  execSync('npm run check', { stdio: 'inherit' });

  console.log('Project reset complete!');
}

reset().catch((err) => {
  console.error(err);
  process.exit(1);
});
