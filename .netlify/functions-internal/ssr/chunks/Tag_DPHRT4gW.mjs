import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderTransition } from './astro/server_CN3tQ3KJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://dylanburkey.com");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`inline-block ${size === "sm" ? "my-1 underline-offset-4" : "my-3 mx-1 underline-offset-8"}`, "class")} data-astro-cid-blwjyjpt> <a${addAttribute(`/tags/${tag}/`, "href")}${addAttribute(`${size === "sm" ? "text-sm" : "text-lg"} pr-2 group`, "class")} data-astro-cid-blwjyjpt${addAttribute(renderTransition($$result, "36ssibgs", "", tag), "data-astro-transition-scope")}> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${size === "sm" ? " scale-75" : "scale-110"}`, "class")} data-astro-cid-blwjyjpt><path d="M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z" data-astro-cid-blwjyjpt></path> </svg>
&nbsp;<span data-astro-cid-blwjyjpt>${tag}</span> </a> </li> `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Tag.astro", "self");

export { $$Tag as $ };
