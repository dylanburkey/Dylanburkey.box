import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as renderSlot, e as addAttribute, u as unescapeHTML } from '../chunks/astro/server_D50-pur6.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_DqnAvtGl.mjs';
import { c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/Footer_Cl0q0jXe.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://dylanburkey.com");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title, "data-astro-cid-d7mpl6vh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about", "data-astro-cid-d7mpl6vh": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-d7mpl6vh> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0" data-astro-cid-d7mpl6vh> <h1 class="text-2xl tracking-wider sm:text-3xl" data-astro-cid-d7mpl6vh>${frontmatter.title}</h1> <div class="flex flex-col sm:flex-row gap-8" data-astro-cid-d7mpl6vh> ${frontmatter.image && renderTemplate`<div class="flex-shrink-0" data-astro-cid-d7mpl6vh> ${renderComponent($$result2, "Image", $$Image, { "src": frontmatter.image.src, "alt": frontmatter.image.alt, "width": frontmatter.image.width, "height": frontmatter.image.height, "loading": "eager", "class": "rounded-lg shadow-lg", "format": "webp", "quality": 80, "data-astro-cid-d7mpl6vh": true })} </div>`} <div class="flex-grow" data-astro-cid-d7mpl6vh> ${renderSlot($$result2, $$slots["default"])} ${frontmatter.connections && renderTemplate`<div class="mt-8" data-astro-cid-d7mpl6vh> <h2 class="text-lg font-semibold mb-4" data-astro-cid-d7mpl6vh>Connect with me</h2> <div class="flex flex-wrap gap-4" data-astro-cid-d7mpl6vh> ${frontmatter.connections.map(({ title, url }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skin-accent" data-astro-cid-d7mpl6vh> ${title} </a>`)} </div> </div>`} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-d7mpl6vh": true })} ` })} `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/AboutLayout.astro", undefined);

const html = () => "<h2 id=\"summary\">Summary</h2>\n<p>Senior Web Engineer and Marketing Lead with 24+ years of experience in delivering technical solutions for enterprise-scale web applications.\nProven track record in quickly identifying and resolving critical issues to ensure seamless user experiences.\nPassionate about enhancing the end-user experience and reducing friction between users’ digital experiences. As a prestigious Forbes Legacy Pass Holder, I leverage my expertise in blockchain and web technologies to drive innovative solutions and optimize web performance.</p>\n<h2 id=\"work-history\">Work History:</h2>\n<h3 id=\"digital-marketing-and-technical-operations-consultant\">Digital Marketing and Technical Operations Consultant.</h3>\n<p><strong>07/2021 - Present</strong> | <strong>Digital Marketing and Technical Operations Consultant</strong>\nLeverage extensive expertise to identify and resolve critical issues in both web andmarketing. Collaborate with clients to develop comprehensive technical roadmapsaligned with their business objectives</p>\n<ul>\n<li>Spearheaded digital marketing transformation, boosting client sales by $2M\nannually.</li>\n<li>Engineered high-availability architecture, saving $50K yearly in downtime.</li>\n<li>Reduced client spend by $8,000+/month through platform migration.</li>\n<li>Strengthened web asset security, mitigating cybersecurity threats by 60%.</li>\n<li>Optimized client digital assets resulting in a 30% boost in their online\nengagement metrics.</li>\n</ul>\n<p>A comprehensive understanding of client needs and business objectives is a\ncore competency. I leverage my extensive experience to design and implement\nrobust technical solutions that drive business growth.</p>\n<p>My expertise extends to server-side development, front-end development, data analytics and analysis, web marketing, brand strategy, and system architecture, and web performance optimization.</p>\n<p>My marketing and technical expertise complement each other, ensuring a\nwell-rounded approach to client success.</p>\n<p>Projet Management, and Agile Development workflows are core to my role. I follow a process that is iterative, flexible, and agile. I am always looking for new ways to improve processes and deliver results.</p>\n<p>My focus is always on the end user and I ensure that all solutions are user friendly, accessible, and intuitive.</p>\n<h2 id=\"education\">Education</h2>\n<ul>\n<li>Bachelor of Science in Computer Science from University of Illinois Urbana-Champaign. <em>01/2007 - 12/2009</em></li>\n<li>Computer Science Bootcamp, XHTML, XML, CSS, PHP, Graphic Design,\nSEO, ActionScript, JavaScript, MySQL, and C++ from the Vancouver Institute of Media Arts (VanArts). <em>01/2007 - 12/2009</em></li>\n</ul>\n<h2 id=\"certifications\">Certifications</h2>\n<h3 id=\"marketing-mini-mba\">Marketing Mini-MBA</h3>\n<p>Selected for an exclusive 8-week program focused on modern marketing leadership,\nI gained a comprehensive understanding of MBA-level business growth strategies\nand their application in a rapidly changing digital landscape. Now equipped to\nnavigate evolving market dynamics and leverage emerging technologies, I possess\nthe skills and knowledge to drive measurable results and lead high-performing\nmarketing teams.</p>\n<h3 id=\"full-stack-web-development-boot-camp--2019\">Full Stack Web Development Boot Camp | 2019</h3>\n<p>Completed intensive full-stack web development program while maintaining full-\ntime employment. Achieved first-place rankings in all individual and team projects,demonstrating exceptional technical and collaborative skills.\nIssued by Case Western Reserve University.</p>\n<h3 id=\"es6-certification-master-course-program--2020\">ES6 Certification, Master Course Program | 2020</h3>\n<p>Completed intensive ES6 course, gaining hands-on experience with ES6 features and\nbest practices. Developed a solid understanding of ES6 syntax and\nimplementation, along with its usage in modern web development.\nIssued by Google.</p>\n<h3 id=\"core-web-metrics-certification\">Core Web Metrics Certification</h3>\n<p>Issued by Google in 2023. This is my third certification for Core Web Vitals.</p>\n<ul>\n<li>Gained a deep understanding of the importance of Core Web Vitals for improving user experience and search engine optimization.</li>\n</ul>\n<h3 id=\"google-analytics-ga4-certification\">Google Analytics GA4 Certification</h3>\n<p>Issued by Google in 2023. I have completed the UA certification for the past six\nyears.</p>\n<ul>\n<li>Extensive knowledge of Google Analytics and its capabilities.</li>\n<li>Proficient in implementing and optimizing Google Analytics for\nweb applications.</li>\n</ul>\n<h3 id=\"pen-200-penetration-testing-with-kali-linux\">PEN-200: Penetration Testing with Kali Linux</h3>\n<p>Issued by OﬀSec in 2021.</p>\n<ul>\n<li>Completed the PEN-200: Penetration Testing with Kali Linux\ncertification, gaining hands-on experience with Kali Linux and its\ncapabilities in a real-world penetration testing scenario.</li>\n</ul>\n<h2 id=\"skills---platforms-and-tools\">Skills - Platforms and Tools</h2>\n<h3 id=\"tier-one-and-two-platform-experience\">Tier One and Two Platform Experience</h3>\n<p>SalesForce, SiteCore, Adobe AEM, IMB WebShere, Microsoft Azure,\nCloudflare, Shopify, SharePoint, Google Cloud Solutions, VMWare, Docker, and\nKubernetes.</p>\n<h3 id=\"tier-three-and-four-platform-experience\">Tier Three and Four Platform Experience</h3>\n<p>WordPress, WebFlow, Framer, ButterCMS, Unbounce, WIX, HubSpot, Square\nSpace, Vercel, Nelify, Contentful, Cloudinary, CloudFlare Pages, Tina CMS,\nSanity.io, and Plasmic.</p>\n<h2 id=\"skills---languages-and-frameworks\">Skills - Languages and Frameworks</h2>\n<h3 id=\"languages\">Languages</h3>\n<ul>\n<li>Sever Side Languages:\n— Java, C++, C#, Python, Ruby, Rust, R, and Go.</li>\n<li>Client Side Languages and Frameworks:\n— HTML, Modern CSS, JavaScript, TypeScript, React, Vue, Astro, svelte, and\nAngular.</li>\n<li>Server Side Frameworks:\n— ASP.NET, ASP.NET Core, Django, Express, Flask, Laravel, Ruby on Rails, and Node.js and Dino.</li>\n</ul>\n<p>The following are my favorite frameworks and tools: Astro, Svelte, and Cloudflare Workers.</p>\n<h2 id=\"cicd\">CI/CD</h2>\n<ul>\n<li>Jenkins</li>\n<li>GitHub</li>\n<li>GitLab</li>\n<li>Bitbucket</li>\n<li>Azure DevOps</li>\n<li>CircleCI</li>\n<li>GitLab CI</li>\n<li>Jenkins</li>\n<li>GitHub Actions</li>\n<li>Docker</li>\n<li>Terraform</li>\n<li>Cloudflare Workers</li>\n<li>Vercel</li>\n<li>Netlify</li>\n</ul>\n<h3 id=\"database-experience\">Database Experience</h3>\n<ul>\n<li>MySQL, SQL, Postgres, GraphQL, Firebase, NoSQL (MongoDB), Redis,\nPostgreSQL, MariaDB, and SQL Server.\nDatabase Migrations and Optimization</li>\n<li>Database migrations, and database optimization.</li>\n</ul>\n<hr>\n<h2 id=\"career-background\">Career Background</h2>\n<ul>\n<li>\n<p>Technical Marketing</p>\n<ul>\n<li>Google Analytics</li>\n<li>Google Tag Manager</li>\n<li>VWO</li>\n<li>HotJar</li>\n<li>MS Clarity</li>\n<li>Google Looker</li>\n<li>Heap</li>\n<li>CrazyEgg</li>\n<li>Google AdWords\n<ul>\n<li>Just about every PPC tool currently in use (Bing, Yahoo Ads, LinkedIn, etc)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>Marketing</strong></p>\n<p>Having recently completed my Marketing MBA I have an excellent grasp on Marketing as a whole.</p>\n<ul>\n<li>Content Creation</li>\n<li>Brand Strategy</li>\n<li>Building and Developing Brands from scratch.</li>\n<li>Restructuring current Brand strategies that are not working.</li>\n<li>Campaign Creation</li>\n</ul>\n</li>\n<li>\n<p><strong>Web Development</strong></p>\n</li>\n</ul>\n<p>I have a solid understanding of all the current JS frameworks, despite my personal preferences. I work with a variety of companies in different roles, often being called in to help correct a project that has gone off track.</p>\n<p>This can be challenging, as company stakeholders may have fixed ideas about how to proceed.</p>\n<p>In my current role, I debug, fix, document, and improve existing solutions. I also build out new solutions and act as a System Architect for companies looking to get off the ground.</p>\n<p><strong>Why am I the best?</strong></p>\n<ul>\n<li>\n<p>I focus on the user and how I can improve their experience.</p>\n</li>\n<li>\n<p>Performance is absolutely essential, and most companies and 3rd party contractors don’t meet my standards.</p>\n</li>\n<li>\n<p>I returned to school in 2019 and received my Full Stack Web Development certificate from Case Western Reserve.</p>\n</li>\n<li>\n<p>I have valid qualifications in the following:</p>\n<ul>\n<li>Google Analytics GA4</li>\n<li>Google Core Web Vitals</li>\n<li>Google Tag Manager</li>\n<li>Google Looker</li>\n<li>PEN 200: Penetration testing with Kali Linux</li>\n</ul>\n</li>\n</ul>\n<p>I excel at combining my marketing and web expertise to solve solutions or ideally prevent them before they break.</p>\n<h3 id=\"what-should-i-see-on-a-site\">What should I see on a site</h3>\n<ul>\n<li>User first development (Progressive Enhancement)</li>\n<li>Critical CSS</li>\n<li>Next Generation image formats</li>\n<li>Lazy loading images</li>\n<li>Service Workers</li>\n<li>Non Render Blocking Code</li>\n<li>A site the size of the original Doom game.</li>\n<li>Secure Systems!</li>\n</ul>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"Dylan Burkey - About","description":"Senior Web Engineer with 24+ years of experience in enterprise web development, Forbes Legacy Pass Holder, and marketing specialist focused on delivering exceptional digital experiences.","canonicalURL":"https://dylanburkey.com/about","image":{"src":"/assets/images/dylan-burkey.jpg","alt":"Dylan Burkey","title":"Dylan Burkey","width":300,"height":300},"connections":[{"title":"LinkedIn","url":"https://www.linkedin.com/in/dylanburkey/","icon":"i-simple-icons-linkedin"},{"title":"GitHub","url":"https://github.com/dylanburkey","icon":"i-simple-icons-github"},{"title":"Twitter","url":"https://twitter.com/dylanburkey","icon":"i-simple-icons-twitter"},{"title":"Forbes Legacy Pass","url":"https://www.forbes.com/connect/profile/dylan-burkey/","icon":"i-simple-icons-forbes"}]};
				const file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                    \n                             \n                                                                                                                                                                                                         \n                                           \n      \n                                        \n                     \n                       \n            \n             \n            \n                     \n                                                   \n                                   \n                   \n                                         \n                                 \n                    \n                                          \n                                  \n                               \n                                                               \n                                 \n   \n\n## Summary\n\nSenior Web Engineer and Marketing Lead with 24+ years of experience in delivering technical solutions for enterprise-scale web applications.\nProven track record in quickly identifying and resolving critical issues to ensure seamless user experiences.\nPassionate about enhancing the end-user experience and reducing friction between users’ digital experiences. As a prestigious Forbes Legacy Pass Holder, I leverage my expertise in blockchain and web technologies to drive innovative solutions and optimize web performance.\n\n\n## Work History:\n\n### Digital Marketing and Technical Operations Consultant.\n**07/2021 - Present** | **Digital Marketing and Technical Operations Consultant**\nLeverage extensive expertise to identify and resolve critical issues in both web andmarketing. Collaborate with clients to develop comprehensive technical roadmapsaligned with their business objectives\n\n- Spearheaded digital marketing transformation, boosting client sales by $2M\nannually.\n- Engineered high-availability architecture, saving $50K yearly in downtime.\n- Reduced client spend by $8,000+/month through platform migration.\n- Strengthened web asset security, mitigating cybersecurity threats by 60%.\n- Optimized client digital assets resulting in a 30% boost in their online\nengagement metrics. \n\nA comprehensive understanding of client needs and business objectives is a\ncore competency. I leverage my extensive experience to design and implement\nrobust technical solutions that drive business growth. \n\nMy expertise extends to server-side development, front-end development, data analytics and analysis, web marketing, brand strategy, and system architecture, and web performance optimization.\n\nMy marketing and technical expertise complement each other, ensuring a\nwell-rounded approach to client success. \n\nProjet Management, and Agile Development workflows are core to my role. I follow a process that is iterative, flexible, and agile. I am always looking for new ways to improve processes and deliver results. \n\nMy focus is always on the end user and I ensure that all solutions are user friendly, accessible, and intuitive.\n\n## Education\n\n- Bachelor of Science in Computer Science from University of Illinois Urbana-Champaign. _01/2007 - 12/2009_\n- Computer Science Bootcamp, XHTML, XML, CSS, PHP, Graphic Design,\nSEO, ActionScript, JavaScript, MySQL, and C++ from the Vancouver Institute of Media Arts (VanArts). _01/2007 - 12/2009_\n\n## Certifications\n\n### Marketing Mini-MBA\nSelected for an exclusive 8-week program focused on modern marketing leadership,\nI gained a comprehensive understanding of MBA-level business growth strategies\nand their application in a rapidly changing digital landscape. Now equipped to\nnavigate evolving market dynamics and leverage emerging technologies, I possess\nthe skills and knowledge to drive measurable results and lead high-performing\nmarketing teams.\n\n### Full Stack Web Development Boot Camp | 2019\nCompleted intensive full-stack web development program while maintaining full-\ntime employment. Achieved first-place rankings in all individual and team projects,demonstrating exceptional technical and collaborative skills.\nIssued by Case Western Reserve University.\n\n### ES6 Certification, Master Course Program | 2020\nCompleted intensive ES6 course, gaining hands-on experience with ES6 features and\nbest practices. Developed a solid understanding of ES6 syntax and\nimplementation, along with its usage in modern web development.\nIssued by Google.\n\n### Core Web Metrics Certification\nIssued by Google in 2023. This is my third certification for Core Web Vitals.\n- Gained a deep understanding of the importance of Core Web Vitals for improving user experience and search engine optimization.\n\n### Google Analytics GA4 Certification\nIssued by Google in 2023. I have completed the UA certification for the past six\nyears.\n- Extensive knowledge of Google Analytics and its capabilities.\n- Proficient in implementing and optimizing Google Analytics for\nweb applications.\n\n### PEN-200: Penetration Testing with Kali Linux\nIssued by OﬀSec in 2021.\n- Completed the PEN-200: Penetration Testing with Kali Linux\ncertification, gaining hands-on experience with Kali Linux and its\ncapabilities in a real-world penetration testing scenario.\n\n## Skills - Platforms and Tools\n\n### Tier One and Two Platform Experience\nSalesForce, SiteCore, Adobe AEM, IMB WebShere, Microsoft Azure,\nCloudflare, Shopify, SharePoint, Google Cloud Solutions, VMWare, Docker, and\nKubernetes.\n\n### Tier Three and Four Platform Experience\nWordPress, WebFlow, Framer, ButterCMS, Unbounce, WIX, HubSpot, Square\nSpace, Vercel, Nelify, Contentful, Cloudinary, CloudFlare Pages, Tina CMS,\nSanity.io, and Plasmic.\n\n## Skills - Languages and Frameworks\n\n### Languages\n- Sever Side Languages:\n-- Java, C++, C#, Python, Ruby, Rust, R, and Go.\n- Client Side Languages and Frameworks:\n-- HTML, Modern CSS, JavaScript, TypeScript, React, Vue, Astro, svelte, and\nAngular.\n- Server Side Frameworks:\n-- ASP.NET, ASP.NET Core, Django, Express, Flask, Laravel, Ruby on Rails, and Node.js and Dino.\n\nThe following are my favorite frameworks and tools: Astro, Svelte, and Cloudflare Workers. \n\n\n## CI/CD\n- Jenkins\n- GitHub\n- GitLab\n- Bitbucket\n- Azure DevOps\n- CircleCI\n- GitLab CI\n- Jenkins\n- GitHub Actions\n- Docker\n- Terraform\n- Cloudflare Workers\n- Vercel\n- Netlify\n\n### Database Experience\n- MySQL, SQL, Postgres, GraphQL, Firebase, NoSQL (MongoDB), Redis,\nPostgreSQL, MariaDB, and SQL Server.\n Database Migrations and Optimization\n- Database migrations, and database optimization.\n\n\n---\n\n## Career Background\n\n\n- Technical Marketing\n\n  - Google Analytics\n  - Google Tag Manager\n  - VWO\n  - HotJar\n  - MS Clarity\n  - Google Looker\n  - Heap\n  - CrazyEgg\n  - Google AdWords\n    - Just about every PPC tool currently in use (Bing, Yahoo Ads, LinkedIn, etc)\n\n- **Marketing**\n\n  Having recently completed my Marketing MBA I have an excellent grasp on Marketing as a whole.\n\n  - Content Creation\n  - Brand Strategy\n  - Building and Developing Brands from scratch.\n  - Restructuring current Brand strategies that are not working.\n  - Campaign Creation\n\n- **Web Development**\n\nI have a solid understanding of all the current JS frameworks, despite my personal preferences. I work with a variety of companies in different roles, often being called in to help correct a project that has gone off track.\n\nThis can be challenging, as company stakeholders may have fixed ideas about how to proceed.\n\nIn my current role, I debug, fix, document, and improve existing solutions. I also build out new solutions and act as a System Architect for companies looking to get off the ground.\n\n**Why am I the best?**\n\n- I focus on the user and how I can improve their experience.\n- Performance is absolutely essential, and most companies and 3rd party contractors don't meet my standards.\n\n- I returned to school in 2019 and received my Full Stack Web Development certificate from Case Western Reserve.\n- I have valid qualifications in the following:\n  - Google Analytics GA4\n  - Google Core Web Vitals\n  - Google Tag Manager\n  - Google Looker\n  - PEN 200: Penetration testing with Kali Linux\n\nI excel at combining my marketing and web expertise to solve solutions or ideally prevent them before they break.\n\n### What should I see on a site\n\n- User first development (Progressive Enhancement)\n- Critical CSS\n- Next Generation image formats\n- Lazy loading images\n- Service Workers\n- Non Render Blocking Code\n- A site the size of the original Doom game.\n- Secure Systems!\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"summary","text":"Summary"},{"depth":2,"slug":"work-history","text":"Work History:"},{"depth":3,"slug":"digital-marketing-and-technical-operations-consultant","text":"Digital Marketing and Technical Operations Consultant."},{"depth":2,"slug":"education","text":"Education"},{"depth":2,"slug":"certifications","text":"Certifications"},{"depth":3,"slug":"marketing-mini-mba","text":"Marketing Mini-MBA"},{"depth":3,"slug":"full-stack-web-development-boot-camp--2019","text":"Full Stack Web Development Boot Camp | 2019"},{"depth":3,"slug":"es6-certification-master-course-program--2020","text":"ES6 Certification, Master Course Program | 2020"},{"depth":3,"slug":"core-web-metrics-certification","text":"Core Web Metrics Certification"},{"depth":3,"slug":"google-analytics-ga4-certification","text":"Google Analytics GA4 Certification"},{"depth":3,"slug":"pen-200-penetration-testing-with-kali-linux","text":"PEN-200: Penetration Testing with Kali Linux"},{"depth":2,"slug":"skills---platforms-and-tools","text":"Skills - Platforms and Tools"},{"depth":3,"slug":"tier-one-and-two-platform-experience","text":"Tier One and Two Platform Experience"},{"depth":3,"slug":"tier-three-and-four-platform-experience","text":"Tier Three and Four Platform Experience"},{"depth":2,"slug":"skills---languages-and-frameworks","text":"Skills - Languages and Frameworks"},{"depth":3,"slug":"languages","text":"Languages"},{"depth":2,"slug":"cicd","text":"CI/CD"},{"depth":3,"slug":"database-experience","text":"Database Experience"},{"depth":2,"slug":"career-background","text":"Career Background"},{"depth":3,"slug":"what-should-i-see-on-a-site","text":"What should I see on a site"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
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
