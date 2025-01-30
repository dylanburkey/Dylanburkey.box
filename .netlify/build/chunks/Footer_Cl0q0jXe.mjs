import { b as createAstro, c as createComponent, r as renderTemplate, e as addAttribute, j as renderScript, d as renderSlot, k as renderHead, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_D50-pur6.mjs';
import 'kleur/colors';
import { S as SITE, L as LOCALE, a as SOCIALS } from './config_BNwkV9Ov.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$6 = createAstro("https://dylanburkey.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/node_modules/astro/components/ClientRouter.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://dylanburkey.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = undefined                                               ;
  const {
    title = SITE.title,
    author = SITE.author,
    profile = SITE.profile,
    description = SITE.desc,
    ogImage = SITE.ogImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site).href,
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(
    ogImage ?? SITE.ogImage ?? "og.png",
    Astro2.url.origin
  ).href;
  ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${socialImageURL}`,
    datePublished: `${pubDatetime?.toISOString()}`,
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: `${author}`,
        url: `${profile}`
      }
    ]
  });
  return renderTemplate(
    _a || (_a = __template(["<html", "", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><meta name="profile"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google Font --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet"><meta name="theme-color" content="">', "", '<script src="/toggle-theme.js"></script>', '</head> <body class="flex min-h-screen flex-col bg-skin-fill font-mono text-skin-base" data-astro-cid-sckkx6r4> <div class="fixed-header-spacer" data-astro-cid-sckkx6r4></div> ', "  ", "</body></html>"])),
    addAttribute(`${LOCALE.lang}`, "lang"),
    addAttribute(`theme-bubblegum ${scrollSmooth && "scroll-smooth"}`, "class"),
    addAttribute(canonicalURL, "href"),
    addAttribute(Astro2.generator, "content"),
    title,
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(author, "content"),
    addAttribute(profile, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(canonicalURL, "content"),
    addAttribute(socialImageURL, "content"),
    pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`,
    modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`,
    addAttribute(canonicalURL, "content"),
    addAttribute(title, "content"),
    addAttribute(description, "content"),
    addAttribute(socialImageURL, "content"),
    // If PUBLIC_GOOGLE_SITE_VERIFICATION is set in the environment variable,
    // include google-site-verification tag in the heading
    // Learn more: https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag
    googleSiteVerification,
    renderComponent($$result, "ViewTransitions", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }),
    renderHead(),
    renderSlot($$result, $$slots["default"]),
    renderScript($$result, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")
  );
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/layouts/Layout.astro", undefined);

const $$Astro$4 = createAstro("https://dylanburkey.com");
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}> <hr class="border-skin-line"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Hr.astro", undefined);

const $$Astro$3 = createAstro("https://dylanburkey.com");
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const {
    href,
    className = "",
    ariaLabel,
    title,
    disabled = false
  } = Astro2.props;
  return renderTemplate`${disabled ? renderTemplate`${maybeRenderHead()}<span${addAttribute(["group inline-block", className], "class:list")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(["group inline-block hover:text-skin-accent", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/LinkButton.astro", undefined);

const $$Astro$2 = createAstro("https://dylanburkey.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="sticky-header" data-astro-cid-3ef6ksr2> <a id="skip-to-content" href="#main-content" class="sr-only focus:not-sr-only" data-astro-cid-3ef6ksr2>Skip to content</a> <div class="nav-container" data-astro-cid-3ef6ksr2> <div class="top-nav-wrap" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> ${SITE.title} </a> <nav id="nav-menu" class="nav-menu" data-astro-cid-3ef6ksr2> <button class="hamburger-menu focus-outline" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="menu-icon" data-astro-cid-3ef6ksr2> <line x1="7" y1="12" x2="21" y2="12" class="line" data-astro-cid-3ef6ksr2></line> <line x1="3" y1="6" x2="21" y2="6" class="line" data-astro-cid-3ef6ksr2></line> <line x1="12" y1="18" x2="21" y2="18" class="line" data-astro-cid-3ef6ksr2></line> </svg> </button> <ul id="menu-items" class="menu-items" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/posts/"${addAttribute(activeNav === "posts" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Posts
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/tags/"${addAttribute(activeNav === "tags" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Tags
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/about/"${addAttribute(activeNav === "about" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
About
</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/tools/"${addAttribute(activeNav === "tools" ? "active" : "", "class")} data-astro-cid-3ef6ksr2>
Tools
</a> </li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": "/search", "className": `focus-outline p-3 sm:p-1 ${activeNav === "search" ? "active" : ""}`, "ariaLabel": "search", "title": "Search", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" class="scale-125 sm:scale-100" data-astro-cid-3ef6ksr2> <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" data-astro-cid-3ef6ksr2></path> </svg> ` })} </li> <li data-astro-cid-3ef6ksr2> ${renderTemplate`<button id="theme-btn" class="focus-outline" title="Toggles light & dark" aria-label="auto" aria-live="polite" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" id="moon-svg" data-astro-cid-3ef6ksr2> <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" data-astro-cid-3ef6ksr2></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" id="sun-svg" data-astro-cid-3ef6ksr2> <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" data-astro-cid-3ef6ksr2></path> </svg> </button>`} </li> </ul> </nav> </div> </div> ${renderComponent($$result, "Hr", $$Hr, { "data-astro-cid-3ef6ksr2": true })} </header>  ${renderScript($$result, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Header.astro", undefined);

const socialIcons = {
  Github: "github",
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
  Mail: "mail",
  Twitter: "twitter"
  // Add other social icons as needed
};

const $$Astro$1 = createAstro("https://dylanburkey.com");
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Socials;
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`social-icons ${centered ? "flex" : ""}`, "class")} data-astro-cid-upu6fzxr> ${SOCIALS.filter((social) => social.active).map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": social.href, "className": "link-button", "title": social.linkTitle, "data-astro-cid-upu6fzxr": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(socialIcons[social.name])}` })} <span class="sr-only" data-astro-cid-upu6fzxr>${social.linkTitle}</span> ` })}`)} </div> `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Socials.astro", undefined);

const $$Astro = createAstro("https://dylanburkey.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`${noMarginTop ? "" : "mt-auto"}`, "class")} data-astro-cid-sz7xmlte> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true, "data-astro-cid-sz7xmlte": true })} <div class="footer-wrapper" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Socials", $$Socials, { "centered": true, "data-astro-cid-sz7xmlte": true })} <div class="copyright-wrapper" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Copyright &#169; ${currentYear}</span> <span class="separator" data-astro-cid-sz7xmlte>&nbsp;|&nbsp;</span> <span data-astro-cid-sz7xmlte>All rights reserved.</span> </div> </div> </footer> `;
}, "/Users/dylanburkey/Documents/dev/Dylanburkey.box/src/components/Footer.astro", undefined);

export { $$Header as $, $$LinkButton as a, $$Footer as b, $$Layout as c, $$Socials as d, $$Hr as e, socialIcons as s };
