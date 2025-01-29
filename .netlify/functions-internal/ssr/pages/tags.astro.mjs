import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CN3tQ3KJ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DfcHRDVO.mjs';
import { $ as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_DvF-Ex5m.mjs';
import { $ as $$Main } from '../chunks/Main_Bp8y128q.mjs';
import { $ as $$Tag } from '../chunks/Tag_DPHRT4gW.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_Y_TX5GJC.mjs';
import { S as SITE } from '../chunks/config_BNwkV9Ov.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tags/index.astro", undefined);

const $$file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
