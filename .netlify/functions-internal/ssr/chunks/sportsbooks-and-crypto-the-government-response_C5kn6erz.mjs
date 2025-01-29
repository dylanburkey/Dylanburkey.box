import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_CN3tQ3KJ.mjs';
import { a as getImage } from './_astro_assets_yGezpeOQ.mjs';
import 'clsx';

const Astro__Z2fOdhY = new Proxy({"src":"/_astro/dylan-burkey-and-family-in-costa-rica.B7cFRa4p.jpg","width":360,"height":270,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/assets/images/dylan-burkey-and-family-in-costa-rica.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/dylan-burkey-and-family-in-costa-rica\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/dylan-burkey-and-family-in-costa-rica.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2fOdhY, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h3 id=\"table-of-contents\">Table of contents</h3>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href=\"#the-us-governments-war-on-innovation-a-tale-of-two-industries\">The US Government’s War on Innovation: A Tale of Two Industries</a>\n<ul>\n<li><a href=\"#living-like-a-prince-in-costa-rica\">Living like a Prince in Costa Rica</a></li>\n<li><a href=\"#the-us-governments-attempts-regulation\">The U.S Governments Attempts Regulation</a></li>\n<li><a href=\"#bodog---the-triumph-of-a-canadian-sportsbook\">BoDog - The Triumph of a Canadian Sportsbook</a></li>\n<li><a href=\"#a-history-of-regulatory-uncertainty\">A History of Regulatory Uncertainty</a></li>\n<li><a href=\"#stifling-innovation-the-dangers-of-reactive-regulation\">Stifling Innovation: The Dangers of Reactive Regulation</a></li>\n<li><a href=\"#standwithcryptoorg-paving-the-way-for-technological-innovation\">StandwithCrypto.org: Paving the Way for Technological Innovation</a>\n<ul>\n<li><a href=\"#beyond-politics-a-shared-vision-for-the-future\">Beyond Politics: A Shared Vision for the Future</a></li>\n</ul>\n</li>\n<li><a href=\"#harnessing-the-power-of-decentralization\">Harnessing the Power of Decentralization</a></li>\n</ul>\n</li>\n</ul>\n<p></p></details><p></p>\n<h2 id=\"the-us-governments-war-on-innovation-a-tale-of-two-industries\">The US Government’s War on Innovation: A Tale of Two Industries</h2>\n<p>Remember the early days of the internet? That Wild West era where anything went? That’s kind of how it was for online sports betting and cryptocurrency in the US. Both emerged in a hazy legal landscape, riddled with confusion and ripe for exploitation.</p>\n<h3 id=\"living-like-a-prince-in-costa-rica\">Living like a Prince in Costa Rica</h3>\n<p>This isn’t just some abstract observation for me. It’s personal. When I was 10, my dad landed a job at a big online sportsbook in Costa Rica. Yep, Costa Rica. Because back then, the US government was making it pretty hostile for online gambling companies.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/dylan-burkey-and-family-in-costa-rica.jpg&#x22;,&#x22;alt&#x22;:&#x22;Growing up in Costa Rica had many perks!&#x22;,&#x22;title&#x22;:&#x22;Dylan Burkey enjoying Costa&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"the-us-governments-attempts-regulation\">The U.S Governments Attempts Regulation</h3>\n<p>Over the next decade, I had a front-row seat to the chaos. Stupidity, greed, incompetence – you name it, I saw it. It all came to a head around 2012 when the US government started threatening to arrest US citizens working in the offshore gambling industry. My dad finally quit, but not before witnessing the rise and fall of some truly bizarre characters.</p>\n<h3 id=\"bodog---the-triumph-of-a-canadian-sportsbook\">BoDog - The Triumph of a Canadian Sportsbook</h3>\n<p>Meanwhile, Canada was basically shrugging its shoulders at the whole thing. That’s why Bodog, run by the (surprisingly nice) Calvin Ayre, became a massive online sports empire. I remember visiting the infamous “Bodog Mansion” with my best friend and being totally awestruck.</p>\n<h3 id=\"a-history-of-regulatory-uncertainty\">A History of Regulatory Uncertainty</h3>\n<p>Looking back, it’s fascinating how the US government handled (or mishandled) both online sports betting and crypto. Here are some key parallels:</p>\n<ul>\n<li><strong>Early Days of “Huh?”:</strong> Nobody really knew what to do with either industry. Was online sports betting legal? What even is cryptocurrency? Confusion reigned supreme.</li>\n<li><strong>Crackdowns and Uncertainty</strong>: As both industries grew, the US government started playing catch-up, often with heavy-handed tactics. This created huge uncertainty for everyone involved.</li>\n<li><strong>Slow March Towards Legality</strong>: Fast forward to today, and we see a gradual shift towards legalization and regulation in both sectors. States are legalizing online sports betting, and the government is (slowly) figuring out how to handle crypto.</li>\n</ul>\n<h3 id=\"stifling-innovation-the-dangers-of-reactive-regulation\">Stifling Innovation: The Dangers of Reactive Regulation</h3>\n<p>But here’s the thing: this slow, reactive approach has real-world consequences. My dad’s career and our families safety was directly impacted by the government’s flip-flopping on online gambling.</p>\n<blockquote>\n<p>And who knows how much innovation was stifled in the crypto space due to regulatory uncertainty?</p>\n</blockquote>\n<p>The US has a history of being a leader in technology and innovation. But when it comes to online sports betting and crypto, we’ve been playing catch-up. It’s time for clearer, more proactive regulations that foster growth instead of hindering it. Let’s learn from the past and create a future where innovation can thrive.</p>\n<h3 id=\"standwithcryptoorg-paving-the-way-for-technological-innovation\">StandwithCrypto.org: Paving the Way for Technological Innovation</h3>\n<p>The future of technology is being shaped by decentralized innovation, and cryptocurrency is at the forefront of this movement. <a href=\"https://example.com/stand-with-crypto\">Stand With Crypto</a>, a bipartisan organization, is dedicated to ensuring the United States remains a global leader in this exciting new era.</p>\n<h4 id=\"beyond-politics-a-shared-vision-for-the-future\">Beyond Politics: A Shared Vision for the Future</h4>\n<p><strong>Regardless of political affiliation, we can all agree on the importance of:</strong></p>\n<ul>\n<li><strong>Clear and Sensible Regulations:</strong> We need legislation that fosters innovation while protecting consumers.</li>\n<li><strong>American Technological Supremacy:</strong> The crypto industry is driving technological advancement, and we should create an environment that keeps these innovations in the U.S.</li>\n<li><strong>Embracing the Future:</strong> Cryptocurrency is revolutionizing how we interact with technology, and the U.S. should lead the way.</li>\n<li><strong>A Supportive Regulatory Environment:</strong> Outdated laws shouldn’t hinder companies from developing and deploying cutting-edge technologies.</li>\n</ul>\n<h3 id=\"harnessing-the-power-of-decentralization\">Harnessing the Power of Decentralization</h3>\n<p>The next five years will be critical. By embracing decentralized technologies like cryptocurrency, the United States can maintain its position as a global innovation hub. Let’s work together to build a future where technology empowers individuals and drives societal progress.</p>");
	

				const frontmatter = {"title":"From Sportsbooks to Crypto The Strange Parallels of US Regulation","author":"Dylan Burkey","pubDatetime":"2024-10-28T09:19:19.000Z","slug":"sportsbooks-and-crypto-legislative-blunders","featured":true,"draft":false,"category":"Crypto, Blockchain & Web3 Legislation","tags":["Web3","Blockchain","Crypto","Government Legislation","Cryptocurrency Legislation","Election 2024"],"ogImage":"https://www.dylanburkey.com/_astro/dylan-burkey-and-family-in-costa-rica.B7cFRa4p_Z1Y0cRA.webp","description":"From online sports betting to crypto, the US government's slow, reactive approach has stifled innovation. It's time for change.","canonicalURL":"https://dylanburkey.com/posts/sportsbooks-and-crypto-legislative-blunders","postImage":"https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=800&h=400","postImageDesc":"Sports Betting and Cryptocurrency Regulation"};
				const file = "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/content/blog/sportsbooks-and-crypto-the-government-response.md";
				const url = undefined;
				function rawContent() {
					return "\n### Table of contents\n\n![Growing up in Costa Rica had many perks!](@assets/images/costa-rica/the-beautiful-beach-costa-rica.jpg \"Dylan and Bill Burkey golfingin Costa Rica\")\n\n## The US Government's War on Innovation: A Tale of Two Industries\n\nRemember the early days of the internet? That Wild West era where anything went? That's kind of how it was for online sports betting and cryptocurrency in the US. Both emerged in a hazy legal landscape, riddled with confusion and ripe for exploitation.\n\n### Living like a Prince in Costa Rica\n\nThis isn't just some abstract observation for me. It's personal. When I was 10, my dad landed a job at a big online sportsbook in Costa Rica. Yep, Costa Rica. Because back then, the US government was making it pretty hostile for online gambling companies.\n\n![Growing up in Costa Rica had many perks!](@assets/images/dylan-burkey-and-family-in-costa-rica.jpg \"Dylan Burkey enjoying Costa\")\n\n### The U.S Governments Attempts Regulation\n\nOver the next decade, I had a front-row seat to the chaos. Stupidity, greed, incompetence – you name it, I saw it. It all came to a head around 2012 when the US government started threatening to arrest US citizens working in the offshore gambling industry. My dad finally quit, but not before witnessing the rise and fall of some truly bizarre characters.\n\n### BoDog - The Triumph of a Canadian Sportsbook\n\nMeanwhile, Canada was basically shrugging its shoulders at the whole thing. That's why Bodog, run by the (surprisingly nice) Calvin Ayre, became a massive online sports empire. I remember visiting the infamous \"Bodog Mansion\" with my best friend and being totally awestruck.\n\n### A History of Regulatory Uncertainty\n\nLooking back, it's fascinating how the US government handled (or mishandled) both online sports betting and crypto. Here are some key parallels:\n\n- **Early Days of \"Huh?\":** Nobody really knew what to do with either industry. Was online sports betting legal? What even is cryptocurrency? Confusion reigned supreme.\n- **Crackdowns and Uncertainty**: As both industries grew, the US government started playing catch-up, often with heavy-handed tactics. This created huge uncertainty for everyone involved.\n- **Slow March Towards Legality**: Fast forward to today, and we see a gradual shift towards legalization and regulation in both sectors. States are legalizing online sports betting, and the government is (slowly) figuring out how to handle crypto.\n\n### Stifling Innovation: The Dangers of Reactive Regulation\n\nBut here's the thing: this slow, reactive approach has real-world consequences. My dad's career and our families safety was directly impacted by the government's flip-flopping on online gambling.\n\n> And who knows how much innovation was stifled in the crypto space due to regulatory uncertainty?\n\nThe US has a history of being a leader in technology and innovation. But when it comes to online sports betting and crypto, we've been playing catch-up. It's time for clearer, more proactive regulations that foster growth instead of hindering it. Let's learn from the past and create a future where innovation can thrive.\n\n### StandwithCrypto.org: Paving the Way for Technological Innovation\n\nThe future of technology is being shaped by decentralized innovation, and cryptocurrency is at the forefront of this movement. [Stand With Crypto](https://example.com/stand-with-crypto), a bipartisan organization, is dedicated to ensuring the United States remains a global leader in this exciting new era.\n\n#### Beyond Politics: A Shared Vision for the Future\n\n**Regardless of political affiliation, we can all agree on the importance of:**\n\n- **Clear and Sensible Regulations:** We need legislation that fosters innovation while protecting consumers.\n- **American Technological Supremacy:** The crypto industry is driving technological advancement, and we should create an environment that keeps these innovations in the U.S.\n- **Embracing the Future:** Cryptocurrency is revolutionizing how we interact with technology, and the U.S. should lead the way.\n- **A Supportive Regulatory Environment:** Outdated laws shouldn't hinder companies from developing and deploying cutting-edge technologies.\n\n### Harnessing the Power of Decentralization\n\nThe next five years will be critical. By embracing decentralized technologies like cryptocurrency, the United States can maintain its position as a global innovation hub. Let's work together to build a future where technology empowers individuals and drives societal progress.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"table-of-contents","text":"Table of contents"},{"depth":2,"slug":"the-us-governments-war-on-innovation-a-tale-of-two-industries","text":"The US Government’s War on Innovation: A Tale of Two Industries"},{"depth":3,"slug":"living-like-a-prince-in-costa-rica","text":"Living like a Prince in Costa Rica"},{"depth":3,"slug":"the-us-governments-attempts-regulation","text":"The U.S Governments Attempts Regulation"},{"depth":3,"slug":"bodog---the-triumph-of-a-canadian-sportsbook","text":"BoDog - The Triumph of a Canadian Sportsbook"},{"depth":3,"slug":"a-history-of-regulatory-uncertainty","text":"A History of Regulatory Uncertainty"},{"depth":3,"slug":"stifling-innovation-the-dangers-of-reactive-regulation","text":"Stifling Innovation: The Dangers of Reactive Regulation"},{"depth":3,"slug":"standwithcryptoorg-paving-the-way-for-technological-innovation","text":"StandwithCrypto.org: Paving the Way for Technological Innovation"},{"depth":4,"slug":"beyond-politics-a-shared-vision-for-the-future","text":"Beyond Politics: A Shared Vision for the Future"},{"depth":3,"slug":"harnessing-the-power-of-decentralization","text":"Harnessing the Power of Decentralization"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
