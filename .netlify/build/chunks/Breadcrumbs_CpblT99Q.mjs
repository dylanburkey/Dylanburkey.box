import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './astro/server_D50-pur6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://dylanburkey.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  breadcrumbList[0] === "posts" && breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);
  breadcrumbList[0] === "tags" && !isNaN(Number(breadcrumbList[2])) && breadcrumbList.splice(
    1,
    3,
    `${breadcrumbList[1]} ${Number(breadcrumbList[2]) === 1 ? "" : "(page " + breadcrumbList[2] + ")"}`
  );
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumb" aria-label="breadcrumb" data-astro-cid-ilhxcym7> <ul data-astro-cid-ilhxcym7> <li data-astro-cid-ilhxcym7> <a href="/" data-astro-cid-ilhxcym7>Home</a> <span aria-hidden="true" data-astro-cid-ilhxcym7>&raquo;</span> </li> ${breadcrumbList.map(
    (breadcrumb, index) => index + 1 === breadcrumbList.length ? renderTemplate`<li data-astro-cid-ilhxcym7> <span${addAttribute(`${index > 0 ? "lowercase" : "capitalize"}`, "class")} aria-current="page" data-astro-cid-ilhxcym7>  ${decodeURIComponent(breadcrumb)} </span> </li>` : renderTemplate`<li data-astro-cid-ilhxcym7> <a${addAttribute(`/${breadcrumb}/`, "href")} data-astro-cid-ilhxcym7>${breadcrumb}</a> <span aria-hidden="true" data-astro-cid-ilhxcym7>&raquo;</span> </li>`
  )} </ul> </nav> `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Breadcrumbs.astro", undefined);

export { $$Breadcrumbs as $ };
