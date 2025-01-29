import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Czzr1cJD.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/archives.astro.mjs');
const _page4 = () => import('./pages/og.png.astro.mjs');
const _page5 = () => import('./pages/posts/_slug_/index.png.astro.mjs');
const _page6 = () => import('./pages/posts/_slug_.astro.mjs');
const _page7 = () => import('./pages/posts/_---page_.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/search.astro.mjs');
const _page11 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page12 = () => import('./pages/tags.astro.mjs');
const _page13 = () => import('./pages/tools.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["src/pages/archives/index.astro", _page3],
    ["src/pages/og.png.ts", _page4],
    ["src/pages/posts/[slug]/index.png.ts", _page5],
    ["src/pages/posts/[slug]/index.astro", _page6],
    ["src/pages/posts/[...page].astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/search.astro", _page10],
    ["src/pages/tags/[tag]/[...page].astro", _page11],
    ["src/pages/tags/index.astro", _page12],
    ["src/pages/tools.md", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d85c5995-1dec-418b-990d-df3044309e0b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
