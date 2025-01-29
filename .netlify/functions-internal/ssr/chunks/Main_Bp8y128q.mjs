import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute, f as renderTransition, d as renderSlot } from './astro/server_CN3tQ3KJ.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './Breadcrumbs_0HDgxrPE.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro = createAstro("https://dylanburkey.com");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "data-astro-cid-hsp6otuf": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-hsp6otuf> ${"titleTransition" in props ? renderTemplate`<h1 data-astro-cid-hsp6otuf> ${props.pageTitle[0]} <span data-astro-cid-hsp6otuf${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : renderTemplate`<h1 class="roboto-bold" data-astro-cid-hsp6otuf>${props.pageTitle}</h1>`} <p data-astro-cid-hsp6otuf>${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/Main.astro", "self");

export { $$Main as $ };
