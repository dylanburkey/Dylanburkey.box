import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_nnbF5v6_.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/archives.astro.mjs');
const _page3 = () => import('./pages/og.png.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_/index.png.astro.mjs');
const _page5 = () => import('./pages/posts/_slug_.astro.mjs');
const _page6 = () => import('./pages/posts/_---page_.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/search.astro.mjs');
const _page10 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page11 = () => import('./pages/tags.astro.mjs');
const _page12 = () => import('./pages/tools.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.md", _page1],
    ["src/pages/archives/index.astro", _page2],
    ["src/pages/og.png.ts", _page3],
    ["src/pages/posts/[slug]/index.png.ts", _page4],
    ["src/pages/posts/[slug]/index.astro", _page5],
    ["src/pages/posts/[...page].astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/rss.xml.ts", _page8],
    ["src/pages/search.astro", _page9],
    ["src/pages/tags/[tag]/[...page].astro", _page10],
    ["src/pages/tags/index.astro", _page11],
    ["src/pages/tools.md", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e9385506-00ff-4505-9d31-3b5106a30fd5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
