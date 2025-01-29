import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D50-pur6.mjs';
import 'kleur/colors';
import { S as SITE } from '../chunks/config_BNwkV9Ov.mjs';
import { $ as $$Header, a as $$LinkButton, b as $$Footer, c as $$Layout } from '../chunks/Footer_Cl0q0jXe.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 Not Found | ${SITE.title}`, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-zetdm5md> <div class="not-found-wrapper" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <span aria-hidden="true" data-astro-cid-zetdm5md>Well clearly I made a mistake...</span> <p data-astro-cid-zetdm5md>Page Not Found</p> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "className": "my-6 text-lg underline decoration-dashed underline-offset-8", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate`
Go back home
` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-zetdm5md": true })} ` })} `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/404.astro", undefined);

const $$file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
