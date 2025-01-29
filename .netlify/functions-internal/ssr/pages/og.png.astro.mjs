import { g as generateOgImageForSite } from '../chunks/generateOgImages_C2rV4qpD.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: {
    "Content-Type": "image/webp, image/png, image/jpeg"
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
