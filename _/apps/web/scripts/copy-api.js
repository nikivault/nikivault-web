// scripts/copy-api.js
// Copies src/app/api -> build/server/src/app/api if it exists.
// Safe no-op if source doesn't exist.

import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const src = join(process.cwd(), 'src', 'app', 'api');
const dest = join(process.cwd(), 'build', 'server', 'src', 'app', 'api');

function copyRecursive(s, d) {
  if (!existsSync(s)) return;
  mkdirSync(d, { recursive: true });
  for (const name of readdirSync(s)) {
    const sPath = join(s, name);
    const dPath = join(d, name);
    const st = statSync(sPath);
    if (st.isDirectory()) {
      copyRecursive(sPath, dPath);
    } else {
      copyFileSync(sPath, dPath);
    }
  }
}

if (!existsSync(src)) {
  console.log('No src/app/api to copy — skipping.');
  process.exit(0);
}

console.log(`Copying API files from ${src} -> ${dest}`);
copyRecursive(src, dest);
console.log('Copy complete.');
