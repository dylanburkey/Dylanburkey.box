import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CN3tQ3KJ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DfcHRDVO.mjs';
import { $ as $$Header, d as $$Socials, e as $$Hr, a as $$LinkButton, b as $$Footer, c as $$Layout } from '../chunks/Footer_DvF-Ex5m.mjs';
import { C as Card } from '../chunks/Card_BNo_E1S5.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_DRFW5uUs.mjs';
import { a as SOCIALS, S as SITE } from '../chunks/config_BNwkV9Ov.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://dylanburkey.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const featuredPosts = sortedPosts.filter(({ data }) => data.featured);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  const socialCount = SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-j7pv25f6> <section id="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6> <span class="text-skin-accent" data-astro-cid-j7pv25f6>Web3 Connect:</span> Your Guide to a Decentralized
        World
</h1> <a target="_blank" rel="noopener noreferrer" href="/rss.xml" class="rss-link mb-4 pb-3" aria-label="rss feed" title="RSS Feed" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" class="rss-icon" data-astro-cid-j7pv25f6><path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z" data-astro-cid-j7pv25f6></path><path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z" data-astro-cid-j7pv25f6></path><circle cx="6" cy="18" r="2" data-astro-cid-j7pv25f6></circle> </svg> <span data-astro-cid-j7pv25f6>Unchained: Exploring Web3 Frontiers </span> <span class="sr-only" data-astro-cid-j7pv25f6>RSS Feed</span> </a>  ${// only display if at least one social link is enabled
  socialCount > 0 && renderTemplate`<div class="social-wrapper" data-astro-cid-j7pv25f6> <div class="social-links" data-astro-cid-j7pv25f6>Social Links:</div> ${renderComponent($$result2, "Socials", $$Socials, { "data-astro-cid-j7pv25f6": true })} </div>`} </section> <section class="mx-auto w-full max-w-3xl px-4 pb-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>A bit about this site</h3> <p class="mb-4" data-astro-cid-j7pv25f6>
This is a mini site built with Astro. I decided to use a .box domain as
        a placeholder for my personal site. <a href="https://my.box.com" rel="noopener noreferrer" target="_blank" title="Box Domains" data-astro-cid-j7pv25f6>.box domains</a> are on chain TLDs.
</p> <p class="mb-4" data-astro-cid-j7pv25f6>
It seems like .box domains are not crawled by search engines, so I might
        have to use a different domain in the future.
</p> <p class="mb-4" data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Updates:</strong></p> <ul class="list-disc list-inside" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>2024-12-11: Added a new post on decentralized social media.</li> <li data-astro-cid-j7pv25f6>2024-12-11: Added a Service Worker to improve performance.</li> <li data-astro-cid-j7pv25f6>
2024-12-11: Using pre-rendering, pre-fetching, eager-loading,
          lazy-loading, and caching to improve performance.
</li> </ul> </section> ${renderComponent($$result2, "Hr", $$Hr, { "data-astro-cid-j7pv25f6": true })} ${featuredPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <section id="featured" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Featured</h2> <ul data-astro-cid-j7pv25f6> ${featuredPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "data-astro-cid-j7pv25f6": true })}`)} </ul> </section> ${recentPosts.length > 0 && renderTemplate`${renderComponent($$result3, "Hr", $$Hr, { "data-astro-cid-j7pv25f6": true })}`}` })}`} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Recent Posts</h2> <ul data-astro-cid-j7pv25f6> ${recentPosts.map(
    ({ data, slug }, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "data-astro-cid-j7pv25f6": true })}`
  )} </ul> </section>`} <div class="all-posts-btn-wrapper" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
All Posts
<svg xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" data-astro-cid-j7pv25f6></path> </svg> ` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/index.astro", undefined);

const $$file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
