import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_D50-pur6.mjs';
import 'kleur/colors';
import { S as SITE } from '../chunks/config_BNwkV9Ov.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_CpblT99Q.mjs';
import { c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_Cl0q0jXe.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://dylanburkey.com");
const $$ToolsLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToolsLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "Tools" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="tools" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/ToolsLayout.astro", undefined);

const html = () => "<h2 id=\"web3-marketing-development-and-ecosystem-tools\">Web3 Marketing, Development, and Ecosystem Tools</h2>\n<p>Will be adding a list of tools for different ecosystems and purposes shortly. Below are my big five that I would have a difficult time working without.</p>\n<p>1<a href=\"https://www.raycast.com/\">. <strong>Raycast</strong> </a> If you are on OSX and have not tried Raycast you are waisting so much valuable time. The OOB (Out Of Box) spotlight offered by Apple is terrible. Raycast makes life far easier with extensions for just about everything under the sun.</p>\n<p>Take a look at the Raycast <a href=\"https://www.raycast.com/store\"><strong>extensions</strong> </a>, I promise there is something there for you. Raycast has AI baked in with the ability to switch between models.</p>\n<hr>\n<p><strong>I’ll get to the rest when I have time…there are websites that need to be built or saved from themselves. Peace.</strong></p>";

				const frontmatter = {"layout":"../layouts/ToolsLayout.astro","title":"Tools","description":"Essential Web3 marketing, development, and ecosystem tools for modern developers, featuring recommended applications and utilities for enhanced productivity."};
				const file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/tools.md";
				const url = "/tools";
				function rawContent() {
					return "   \n                                    \n              \n                                                                                                                                                                            \n   \n\n## Web3 Marketing, Development, and Ecosystem Tools\n\nWill be adding a list of tools for different ecosystems and purposes shortly. Below are my big five that I would have a difficult time working without.\n\n1[. **Raycast** ](https://www.raycast.com/) If you are on OSX and have not tried Raycast you are waisting so much valuable time. The OOB (Out Of Box) spotlight offered by Apple is terrible. Raycast makes life far easier with extensions for just about everything under the sun.\n\nTake a look at the Raycast [**extensions** ](https://www.raycast.com/store), I promise there is something there for you. Raycast has AI baked in with the ability to switch between models.\n\n---\n\n**I'll get to the rest when I have time...there are websites that need to be built or saved from themselves. Peace.**\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"web3-marketing-development-and-ecosystem-tools","text":"Web3 Marketing, Development, and Ecosystem Tools"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$ToolsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
