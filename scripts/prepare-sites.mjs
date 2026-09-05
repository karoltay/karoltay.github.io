import { mkdir, readdir, rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const rootPath = root.pathname;
const clientPath = join(rootPath, 'client');
const serverPath = join(rootPath, 'server');

await mkdir(clientPath, { recursive: true });
for (const entry of await readdir(rootPath)) {
  if (entry === 'client' || entry === 'server') continue;
  await rename(join(rootPath, entry), join(clientPath, entry));
}
await writeFile(join(clientPath, '.nojekyll'), '', 'utf8');

await mkdir(serverPath, { recursive: true });
await writeFile(join(serverPath, 'index.js'), `
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const url = new URL(request.url);
    if (url.pathname.includes('.')) return response;
    url.pathname = url.pathname.endsWith('/')
      ? url.pathname + 'index.html'
      : url.pathname + '/index.html';
    return env.ASSETS.fetch(new Request(url, request));
  }
};
`, 'utf8');
