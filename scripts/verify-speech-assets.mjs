import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../assets/speech/', import.meta.url));
const manifest = JSON.parse(await fs.readFile(path.join(root, 'manifest.json'), 'utf8'));
let total = 0;
for (const file of manifest.files) {
  const filename = path.resolve(root, file.path);
  if (!filename.startsWith(root)) throw new Error('Speech manifest contains an invalid path.');
  const bytes = await fs.readFile(filename);
  if (bytes.length !== file.size || createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`Speech asset is missing or changed: ${file.path}`);
  total += bytes.length;
}
console.log(`Bundled speech integrity passed: ${manifest.files.length} files, ${(total / 1024 / 1024).toFixed(1)} MiB.`);
